import dotenv from 'dotenv';
dotenv.config();

// node 进行对象 env 

export const { APP_PORT } = process.env;

export const {
    MYSQL_HOST,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE,
} = process.env;

export const { SECRET } = process.env;