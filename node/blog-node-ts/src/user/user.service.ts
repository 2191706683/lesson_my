import { connection } from '../app/database/mysql'
import { UserModel } from './user.model';

/**
 * 获取用户ID
 */
export const getUser = (condition: string) => {
    // user.name  user.id user.name
    // sql模板 ？ WHERE 分支
    return async (param: string | number) => {

        const statement = `
            SELECT
                user.id,
                user.name
            FROM
                user
            WHERE
                ${condition} = ?
        `;
        const [data] = await connection.promise().query(statement, param);
        return data[0]?.id ? data[0] : null;
    }
}

/**
 * 创建用户
 */
export const createUser = async (user: UserModel) => {
    const statement = `
        INSERT INTO user
        SET ?
    `;

    const [data] = await connection.promise().query(statement, user);

    return data;
}

/**
 * 按用户名获取
 */
export const getUserByName = getUser('user.name')

export const getUserById = getUser('user.id')
