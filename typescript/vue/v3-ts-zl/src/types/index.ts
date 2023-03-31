export interface ImageProps {
    _id?: string
    url?: string
    fitUrl?: string
    createAt?: string
}

export interface UserProps {
    isLogin: boolean
    nickname?: string
    _id?: string
    column?: string
    description?: string
    avatar?: ImageProps
}

export interface GlobalErrorProps {
    status: boolean
    message?: string
}

export interface GlobalDataProps {
    token: string
    user:  UserProps
    loading: boolean
    error: GlobalErrorProps
}