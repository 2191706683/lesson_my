export interface LoginEnity {
    login: string;
    password: string;
}

export const createEmptyLogin = (): LoginEnity => ({
    login: '',
    password: ''
});