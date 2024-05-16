export interface Review {
    customer: string;
    review: string;
    score: number;
}

export interface SalesDetail {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
}

export interface Product {
    id: string;
    title: string;
    image: string;
    subtitle: string;
    brand: string;
    reviews: Review[];
    retailer: string;
    details: string[];
    tags: string[];
    sales: SalesDetail[];
}


export interface DataState {
    products: Product[];
    loading: boolean;
    error: string | null;
}