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


const Topmenu=()=>{
  return(
    <>

<Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">BuyShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">about</Nav.Link>
            <Nav.Link href="#pricing">product</Nav.Link>
            <Nav.Link href="#pricing">Testter</Nav.Link>
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
       


      <Dropdown as={ButtonGroup}     >
      <Button variant="success">Split Button</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

      <img src={cart} alt="" />
      <img src={wish} alt="" />

    </Container>
      </Navbar>
             
    </>
  )
}
export default Topmenu;