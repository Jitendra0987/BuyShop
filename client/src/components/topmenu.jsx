import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import cart from "../Images/cart.png";
import wish from "../Images/Wishlist.png";;

import "../css/Topmenu.css";
import { Link } from 'react-router-dom';


const Topmenu=()=>{
  return(
    <>

<Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">BuyCart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="about">About</Nav.Link>
            <Nav.Link as={Link} to="product">Products</Nav.Link>
          </Nav>


      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
         
          </Col>
        </Row>
      </Form>
       


      <Dropdown as={ButtonGroup}>
      <Button variant="success">Users</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="admin">Admin</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      
      <Link to="/cart">  <img src={cart} alt="" /> <sup>6</sup> </Link>
      <Link to= "/wishList" > <img src={wish} alt="" />    </Link>
    </Container>
      </Navbar>
             
    </>
  )
}
export default Topmenu;