import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
type CardItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CardItemProps) {
  const { removeFromCart, productData } = useShoppingCart();

  const item = productData.find((i: any) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.images[0]}
        style={{ width: "125px", height: "75px", objectFit: "contain" }}
      />
      <div className="me-auto">
        <div>
          {item?.name}
          {quantity > 1 && (
            <span style={{ fontSize: ".65rem" }} className="text-muted">
              x {quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          ${item.price}
        </div>
      </div>
      <div>${item.price * quantity}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
