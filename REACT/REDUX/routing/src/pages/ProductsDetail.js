import { useParams } from "react-router-dom";
function ProductsDetail() {
    const param = useParams()
    
  return (
    <>
      <h1>Product Details!</h1>
      <p >{param.productId}</p>
    </>
  );
}
export default ProductsDetail;
