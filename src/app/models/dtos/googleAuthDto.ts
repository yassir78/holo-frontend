/* eslint-disable prettier/prettier */
export interface GoogleAuthDto {
    token: string;
    profil: {
        firstName: string;
        lastName: string;
        profileImage: string;
        email: string;
    }

}