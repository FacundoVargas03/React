import { GiShoppingCart } from "react-icons/gi";
export const CartWidget = () => {
  return (
    <div className="d-flex p-2 navbar-nav ms-auto mb-2 mb-lg-0">
      <GiShoppingCart color="black" size={23} />
      <p className="mx-2">1</p>
    </div>
  );
};
