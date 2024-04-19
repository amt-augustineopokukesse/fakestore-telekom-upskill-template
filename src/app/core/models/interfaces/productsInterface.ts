export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
    quantity?: number;
}

interface Rating {
    rate: number;
    count: number;
}

export interface ProductQuantity {
    [key: number]: number
}
