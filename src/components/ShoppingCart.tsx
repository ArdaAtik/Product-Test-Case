import { Offcanvas, Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import { CartItem } from "./CartItem";

type shoppingCartProps = {
  isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: shoppingCartProps) => {
  const { closeCart, cartItems, productData, cartQuantity, clearCart } =
    useShoppingCart();
  return (
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div
            className={
              cartQuantity > 0 ? "ms-auto fw-bold fs-5" : "fw-bold text-center"
            }
          >
            {cartQuantity > 0
              ? "Total $" +
                cartItems.reduce((total, cartItem) => {
                  const item = productData.find(
                    (i: any) => i.id === cartItem.id
                  );
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              : "CART IS EMPTY"}
          </div>
        </Stack>
      </Offcanvas.Body>
      {cartQuantity > 0 && (
        <Button className="m-2" variant="danger" onClick={clearCart}>
          Clear Cart
        </Button>
      )}
    </Offcanvas>
  );
};

export default ShoppingCart;
