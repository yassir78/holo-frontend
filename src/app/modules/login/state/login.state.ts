export interface loginState {
    isAuthenticated:boolean;
    token:string | null;
    errorMessage: string | null;
}
export const initialLoginState: loginState = {
  isAuthenticated: false,
  token: null,
  errorMessage: null
};