import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../../components/Product/productCard";

export const CartPage = () => {
  const data = useSelector((state) => state.cartReducer.cart);
  console.log(data, "data");

  return (
    data &&
    data.map((product) => {
      return <ProductCard product={product} />;
    })
  );
};
