export interface Product {
    id: string;
    title: string;
    image: string;
    subtitle: string;
    brand: string;
    reviews: {
        customer: string;
        review: string;
        score: number;
    }[];
    retailer: string;
    details: string[];
    tags: string[];
    sales: {
        weekEnding: string;
        retailSales: number;
        wholesaleSales: number;
        unitsSold: number;
        retailerMargin: number;
    }[];
}


export interface DataState {
    products: Product[];
    loading: boolean;
    error: string | null;
}