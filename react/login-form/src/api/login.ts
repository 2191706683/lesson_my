import { LoginEnity } from "../model/login";

export const isValidLogin = (login: LoginEnity): Promise<boolean> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(login.login === 'admin' && login.password === 'test');
        }, 1000);
    })