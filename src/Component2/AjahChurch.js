import react from 'react'
import AbujaNavbar from './AbujaNavbar';
import fotaAbuja1 from  '../Component2/AbujaImg/fotaAbuja1.jpg';
import bg from  '../Component2/AbujaImg/bg.jpg';
import funke from  '../Component2/AbujaImg/Funke.jpg';
import pastor from  '../fotaImage/pastor.jfif';
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom';
import './Ajah.css';

const AjahCurch =()=>{
    return(
        <div className="AjahChurch">
            < AbujaNavbar />
            <div className="AjahChurch-container">
                <div className=" content-wrapper">
                 <h1>Welcome To Fota Ajah</h1>
                 <Link className="MoreInfo btn btn-lg btn-outline-success" to="/">More Info</Link>
                 
            </div>

        </div>

        </div>


    );


}
export default AjahCurch