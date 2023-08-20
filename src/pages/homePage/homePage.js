import React from "react";
import CarouselComponent from "../../components/landing/landing";
import CategoryList from "../../components/categories/categories";
import { Container, Row } from "react-bootstrap";
import Footer from "../../components/footer/footer";
export default function HomePage() {
  return (
    <>
      <CarouselComponent />
      <Container>
        <Row>
          <CategoryList />
        </Row>
      </Container>
      <Footer />
    </>
  );
}
