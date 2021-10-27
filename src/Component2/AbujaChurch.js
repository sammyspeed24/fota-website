import react from 'react'
import AbujaNavbar from './AbujaNavbar';
import './AbujaChurch.css';
import fotaAbuja1 from  '../Component2/AbujaImg/fotaAbuja1.jpg';
import bg from  '../Component2/AbujaImg/bg.jpg';
import funke from  '../Component2/AbujaImg/Funke.jpg';
import pastor from  '../fotaImage/pastor.jfif';
import Carousel from 'react-bootstrap/Carousel'

const AbujaChurch =()=>{
    return(
        <div >
            <AbujaNavbar />
       
       <div classNameName="spech">
       <Carousel>
       <Carousel.Item>
    <img className="d-block w-100" src={funke} alt="Third slide" />
     <Carousel.Caption>
      <h3>Where We Raise Godly People. </h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>{/*END CAROUSEL-ITEM*/}

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={fotaAbuja1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Welcome to Fota Abuja</h3>
      <p> </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bg}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>
          We Burn For God
      </h3>
    
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
     
        </div>
        </div>
    );
}
export default AbujaChurch;
