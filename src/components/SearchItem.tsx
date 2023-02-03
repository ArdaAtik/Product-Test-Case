import Form from "react-bootstrap/Form";
import { useShoppingCart } from "../context/shoppingCartContext";
const SearchItem = () => {
  const { setSearchField, setSearchShow } = useShoppingCart();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchField(e.target.value);
    e.target.value === "" ? setSearchShow(false) : setSearchShow(true);
  };
  return (
    <>
      <Form className="d-flex w-100 mx-2">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2 w-100"
          aria-label="Search"
          onChange={handleChange}
        />
      </Form>
    </>
  );
};

export default SearchItem;
