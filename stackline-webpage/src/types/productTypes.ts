export interface Product {
    id: string;
    title: string;
    subtitle: string;
    imageUrl: string;
    tags: string[];
}

export interface DataState {
    products: Product[];
    loading: boolean;
    error: string | null;
}