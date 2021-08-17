export interface landingState {
    success: boolean;
    errorMessage: string | null;
}
export const initialLandingState: landingState = {
    success: false,
    errorMessage: null
};