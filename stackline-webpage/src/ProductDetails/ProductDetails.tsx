import { Product } from "../types/productTypes";
import { ProductImage, ProductName, Sidebar, Tag } from './ProductStyles'

interface ProductDetailsProps {
    product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => (
    <Sidebar>
    <ProductImage src={product.image} alt={product.title} />
    <ProductName>{product.title}</ProductName>
    <div>
      {product.tags.map(tag => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </div>
  </Sidebar>
);

export default ProductDetails;