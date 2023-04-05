

export type ICard = {
    id: number,
    name: string,
    image: string,
    price: number,
    details: {
        title: string,
        description: string
    }[],
    description: string
}