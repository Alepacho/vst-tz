export type IDetail = {
    title: string,
    description: string
}

export type IProduct = {
    id?: number,
    name: string,
    image: string,
    price: number,
    details: IDetail[],
    description: string
}