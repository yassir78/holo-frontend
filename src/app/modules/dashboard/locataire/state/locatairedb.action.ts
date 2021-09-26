import { createAction, props } from "@ngrx/store"
import { Good } from "src/app/models/good"

export const getAllGoods = createAction(
    '[Goods component] get all goods process',
)

export const getAllGoodsSuccess = createAction(
    '[Goods effect]  get all good process success',
    props<{ goods: Good[] }>()
)
export const getAllGoodsFailure = createAction(
    '[Goods effect] get all good process failure',
    props<{ error: string }>()
)
export const selectGood = createAction(
    '[Good details  components] show good details',
    props<{ good: Good }>()
)




