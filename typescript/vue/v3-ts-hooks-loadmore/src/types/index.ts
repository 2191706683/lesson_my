// <类型传参> ColumnProps？
interface ListProps<p> {
    // key  [id]  字符串 
    [id:string]: p;
}

export interface PostProps {
    _id: string;
    title: string;
    excerpt?: string;
    context?: string;
    image?: ImageProps | string;
    column?: string;
    author?: string | UserProps;
    createdAt?: string;
    isHTML?: boolean
}

export interface LoadedPostProps {
    columnId?: string;
    currentPage?: number;
    total?: number;
}

export interface ColumnProps {
    _id: string;
    title: string;
    description: string;
}
export interface UserProps {
    isLogin: boolean;
    nickName?: string;
    _id?: string;
    column?: string;
    email?: string;
    description?: string;
    avatar?: ImageProps 
}
export interface ImageProps {
    _id?: string;
    url?: string;
    fitUrl?: string;
    createdAt?: string;
}
export interface GlobalDataProps {
    columns: {
        data: ListProps<ColumnProps>;
        currentPage: number;
        total: number;
    },
    token: string;
    user: UserProps,
    posts: {
        data: ListProps<PostProps>,
        loaderColumns: ListProps<LoadedPostProps>
    }
}