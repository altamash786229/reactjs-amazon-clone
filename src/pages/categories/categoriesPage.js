import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/Product/productCard";
const CategoryPage = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const productList = await res.json();
    setProducts(productList.products);
  };
  useEffect(() => {
    // Fetching the list of products
    fetchData();
  }, []);
  console.log("productsdata", products);
  const handleAddToCart = (product) => {
    // Add the product to the cart
    console.log(`Added ${product.title} to cart`);
  };

  const ProductBox = ({ product }) => {
    return (
      <Card className="product-box">
        <Card.Img variant="top" src={product.thumbnail} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>Price: ${product.price}</Card.Text>
          <Card.Text>Discount: {product.discountPercentage}%</Card.Text>
          <Card.Text>Rating: {product.rating}</Card.Text>
          <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
        </Card.Body>
      </Card>
    );
  };

  return (
    <Container fluid>
      <h1 className="mt-5 mb-5">{category.toUpperCase()} : Categories Page </h1>
      <Row>
        {products &&
          products.map((product) => (
            <Col md={4} sm={6} xs={12} key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default CategoryPage;
