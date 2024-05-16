import { Product } from "../types/productTypes";

interface ProductDetailsProps {
    product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => (
    <div>
        <img src="" alt="" />
        <h2></h2>
        <div></div>
    </div>
);

export default ProductDetails;