import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import _ from 'lodash';
import * as aws from 'aws-sdk';
const textRact = require('aws-sdk/clients/textract');
aws.config.update({
  accessKeyId: environment.awsAccesskeyID,
  secretAccessKey: environment.awsSecretAccessKey,
  region: environment.awsRegion,
});
@Injectable({
  providedIn: 'root'
})
export class TextractService {
  textract: any = new textRact();
  constructor() {
    console.log("configuration")

  }
  getText(result: any, blocksMap: any) {
    let text = "";
    if (_.has(result, "Relationships")) {
      result.Relationships.forEach((relationship: { Type: string; Ids: any[]; }) => {
        if (relationship.Type === "CHILD") {
          relationship.Ids.forEach((childId) => {
            const word = blocksMap[childId];
            if (word.BlockType === "WORD") {
              text += `${word.Text} `;
            }
            if (word.BlockType === "SELECTION_ELEMENT") {
              if (word.SelectionStatus === "SELECTED") {
                text += `X `;
              }
            }
          });
        }
      });
    }
    return text.trim();
  };
  findValueBlock(keyBlock: any, valueMap: any) {
    let valueBlock;
    keyBlock.Relationships.forEach((relationship: any) => {
      if (relationship.Type === "VALUE") {
        // @ts-ignore: Unreachable code error
        relationship.Ids.every((valueId: any) => {
          if (_.has(valueMap, valueId)) {
            valueBlock = valueMap[valueId];
            return false;
          }
        });
      }
    });

    return valueBlock;
  };
  getKeyValueRelationship(keyMap: any, valueMap: any, blockMap: any) {
    const keyValues: any = { };
    const keyMapValues = _.values(keyMap);
    keyMapValues.forEach((keyMapValue: any) => {
      const valueBlock = this.findValueBlock(keyMapValue, valueMap);
      const key = this.getText(keyMapValue, blockMap);
      const value = this.getText(valueBlock, blockMap);
      keyValues[key] = value;
    });

    return keyValues;
  };
  getKeyValueMap(blocks: any) {
    const keyMap: any = { };
    const valueMap: any = { };
    const blockMap: any = { };
    let blockId;
    blocks.forEach((block: any) => {
      blockId = block.Id;
      blockMap[blockId] = block;
      if (block.BlockType === "KEY_VALUE_SET") {
        if (_.includes(block.EntityTypes, "KEY")) {
          keyMap[blockId] = block;
        } else {
          valueMap[blockId] = block;
        }
      }
    });
    return { keyMap, valueMap, blockMap };
  };
  async analyseDocument(buffer: any) {
    const params = {
      Document: {
        Bytes: buffer,
      },
      FeatureTypes: ["TABLES", "FORMS"],
    };
    const request = this.textract.analyzeDocument(params);
    const data = await request.promise();
    if (data && data.Blocks) {
      let table_block = new Array();
      let block_map: any = { };
      data.Blocks.forEach((item: any) => {
        block_map[item.Id] = item;
        if (item.BlockType == "TABLE") {
          if (table_block.length == 0) {
            table_block.push(item);
          }
        }
      });
      let rows: any = { };
      table_block.map(table => table.Relationships).forEach(relationship => {
        if (relationship[0].Type == "CHILD") {
          relationship[0].Ids.forEach((child_id: any) => {
            var cell = block_map[child_id];
            if (cell.BlockType == 'CELL') {
              var row_index = cell.RowIndex;
              var col_index = cell.ColumnIndex;
              if (!rows[row_index]) {
                rows[row_index] = [];
              }
              rows[row_index][col_index] = this.getText(cell, block_map);
            }
          });
        }
      });
      const { keyMap, valueMap, blockMap } = this.getKeyValueMap(data.Blocks);
      const keyValues = this.getKeyValueRelationship(keyMap, valueMap, blockMap);
      return { montantBrut: parseInt(rows[5][7].replace('\'', '')), montantNet: parseInt(keyValues['Montant versé'].replace('\'', '')) }
    }
    return undefined;
  }
}
