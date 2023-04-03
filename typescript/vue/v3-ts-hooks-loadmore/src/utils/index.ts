export const arrToObj = <T extends {_id?: string}>(arr: Array<T>) => {
    return arr.reduce((prev, current) => {
      if (current._id) {
        prev[current._id] = current
      }
      return prev
    }, {} as { [key: string]: T })
}

export const objToArr = <T>(obj: {[key: string]: T}) => {
    return Object.keys(obj).map(key => obj[key])
}
