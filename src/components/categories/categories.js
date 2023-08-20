import React from "react";
import { Link } from "react-router-dom";

import { Container, Row, Card, Button } from "react-bootstrap";
import "./categories.css";

const CategoryCard = ({ category }) => {
  return (
    <div className="col-md-6 col-lg-3 mb-4">
      <Card
        className="category-card"
        style={{ backgroundImage: `url(${category.image})` }}
      >
        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
          <Card.Title className="category-name">{category.name}</Card.Title>
          <Link to={`/category/${category.name.toLowerCase()}`}>
            <Button variant="primary" className="view-category-btn">
              View Category
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

const categories = [
  {
    id: 1,
    name: "Mens",
    image:
      "https://images.pexels.com/photos/12454845/pexels-photo-12454845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    name: "Womens",
    image:
      "https://images.pexels.com/photos/10547939/pexels-photo-10547939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    name: "Kids",
    image:
      "https://images.pexels.com/photos/10547939/pexels-photo-10547939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    name: "Girls",
    image:
      "https://images.pexels.com/photos/10547939/pexels-photo-10547939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const CategoryList = () => {
  return (
    <Container className="mt-2">
      <Row>
        <h1 className="text-center">Product Categories</h1>
      </Row>
      <Row>
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </Row>
    </Container>
  );
};

export default CategoryList;
