// <类型传参> ColumnProps?
export interface listProps<p> {
    // key  [id]
    [id: string]: p
}

export interface ColumnProps {
    _id: string
    title: string
    description: string
}

export interface GlobalDataProps {
    columns: {
        data: listProps<ColumnProps>,
        currentPage: number,
        total: number
    }
}