export interface loginState {
    isAuthenticated:boolean;
    token:string | null;
    loginLoading:boolean,
    errorMessage: string | null;
}
export const initialLoginState: loginState = {
  isAuthenticated: false,
  token: null,
  loginLoading:false,
  errorMessage: null
};