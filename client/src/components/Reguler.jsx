import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import "../css/Reguler.css";
import cart1 from "../Images/cart1.jpg"
import cart2 from "../Images/cart2.avif"
import cart3 from "../Images/cart3.avif"

const Reguler = () => {
    return(
        
        
        <Container style={{paddingBottom:"15px"}}>
            <h3 className="cart-title">Primium Productes</h3>
            <Row>
                {/* Bada Column */}
                <Col md={6} sm={12} className="big-box">
                <img src={cart1} alt="" style={{width:"600px", height:300}} />
                </Col>

                {/* Chhote Columns */}
                <Col md={3} sm={6} className="small-box"> <img src={cart2} alt="" style={{width:"300px", height:300}} /></Col>
                <Col md={3} sm={6} className="small-box"> <img src={cart3} alt=""style={{width:"300px", height:300}} /></Col>
            </Row>
        </Container>
    );
}
export default Reguler;
