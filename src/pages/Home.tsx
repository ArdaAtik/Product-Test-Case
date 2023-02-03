import ProductCard from "../components/ProductCard";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useShoppingCart } from "../context/shoppingCartContext";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brand?: string;
  category: string;
  thumbnail?: string;
  images?: string[];
}

function Home() {
  const { productData, searchField, searchShow } = useShoppingCart();
  const filteredData = productData?.filter((data: Product) => {
    return (
      data.title.toLowerCase().includes(searchField.toLowerCase()) ||
      data.category?.toLowerCase().includes(searchField.toLowerCase())
    );
  });
  return (
    <Container fluid>
      {productData &&
        (searchShow ? (
          <>
            <Row className="justify-content-between">
              {filteredData.map((product: Product) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  id={product.id}
                  description={product.description}
                  price={product.price}
                  images={product.images}
                  category={product.category}
                />
              ))}
            </Row>
          </>
        ) : (
          <>
            <Row className="justify-content-between ">
              {productData.map((product: Product) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  id={product.id}
                  description={product.description}
                  price={product.price}
                  images={product.images}
                  category={product.category}
                />
              ))}
            </Row>
          </>
        ))}
    </Container>
  );
}

export default Home;
