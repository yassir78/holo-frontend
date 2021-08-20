export interface landingState {
    success: boolean;
    errorMessage: string | null;
    addSuccessModalShow: boolean;
    addFailureModalShow: boolean;
}
export const initialLandingState: landingState = {
    success: false,
    errorMessage: null,
    addSuccessModalShow: false,
    addFailureModalShow: false
};