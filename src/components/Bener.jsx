import Carousel from 'react-bootstrap/Carousel';
import baner1 from "../Images/bener1.jpg";
import baner2 from "../Images/bener2.jpg";
import baner3 from "../Images/bener3.jpg";
const Bener=()=>{
    return(
        <>
<Carousel style={{paddingTop:"10px"}}>
      <Carousel.Item>
        <img src={baner1} style={{ width: "100%", height: "100%" }}/>
        <Carousel.Caption>
          <h3>BuyCart Shop Easy</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={baner2} alt="" style={{ width: "100%", height: "100%" }} />
        <Carousel.Caption>
          <h3>BuyCart Shop Easy</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={baner3} alt="" style={{ width: "100%", height: "100%" }}/>
        <Carousel.Caption>
          <h3>BuyCart Shop Easy</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

        </>
    )
}
export default Bener;