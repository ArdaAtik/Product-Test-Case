import { Product } from "../pages/Home";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useShoppingCart } from "../context/shoppingCartContext";
import Badge from "react-bootstrap/Badge";

const ProductCard = ({
  id,
  title,
  description,
  price,
  images,
  category,
}: Product) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card style={{ width: "18rem", margin: "0.3rem" }}>
      <Card.Img
        variant="top"
        src={images ? images[0] : ""}
        height="200px"
        style={{ objectFit: "contain" }}
        alt="#"
      />

      <Card.Body
        className="d-flex flex-column"
        style={{
          height: "12rem",
        }}
      >
        <div
          style={{
            height: "6rem",
            marginBottom: "1rem",
          }}
        >
          <Card.Title className="d-flex justify-content-between align-items-baseline ">
            <span className="fs-5">{title}</span>
            <span className="ms-2 text-muted">{price}$</span>
          </Card.Title>
          <Badge pill bg="dark" className="">
            {category}
          </Badge>
        </div>
        <h3 className="description-container">
          <Card.Text>{description}</Card.Text>
        </h3>
      </Card.Body>
      <div className="mt-auto mb-3">
        {quantity === 0 ? (
          <Button
            variant="dark"
            className="w-100"
            onClick={() => increaseCartQuantity(id)}
          >
            Add to Cart
          </Button>
        ) : (
          <div
            className="d-flex align-items-center flex-column"
            style={{ gap: ".5rem" }}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ gap: ".5rem" }}
            >
              <Button variant="dark" onClick={() => decreaseCartQuantity(id)}>
                -
              </Button>
              <div>
                <span className="fs-3">{quantity} </span>
                in cart
              </div>
              <Button variant="dark" onClick={() => increaseCartQuantity(id)}>
                +
              </Button>
            </div>
            <Button
              variant="danger"
              size="sm"
              onClick={() => removeFromCart(id)}
            >
              Remove
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProductCard;
