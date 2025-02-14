import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import prod1 from "../Images/prod1.jpg";
import prod2 from "../Images/prod2.jpg";
import prod3 from "../Images/prod3.jpg";
import prod4 from "../Images/prod4.jpg";
import prod5 from "../Images/prod5.jpg";
import prod6 from "../Images/prod6.jpg";

import "../css/CartSection.css";



const CartSection = () => {
  return (
    <Container className="cart-container">
        <h3 className="cart-title">Shop Our Top Products</h3>

      <Row className="justify-content-center">
        <Col md={4} sm={6} xs={12} className="cart-item">
          <img src={prod1} alt="" className="cart-image" />
        </Col>
        <Col md={4} sm={6} xs={12} className="cart-item">
          <img src={prod2} alt="" className="cart-image" />
        </Col>
        <Col md={4} sm={6} xs={12} className="cart-item">
          <img src={prod3} alt="" className="cart-image" />
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={4} sm={6} xs={12} className="cart-item">
          <img src={prod4} alt="" className="cart-image" />
        </Col>
        <Col md={4} sm={6} xs={12} className="cart-item">
          <img src={prod5} alt="" className="cart-image" />
        </Col>
        <Col md={4} sm={6} xs={12} className="cart-item">
          <img src={prod6} alt="" className="cart-image" />
        </Col>
      </Row>
    </Container>
  );
};

export default CartSection;
