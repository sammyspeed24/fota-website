import React from 'react'
import houston from '../fotaImage/houstonpastor.png';
import pastor2 from '../fotaImage/fota-pastor2.jfif';
import AbujaPastor from '../fotaImage/AbujaPastor.jfif';
import suru from  '../fotaImage/surupastor.jfif';
import pastor from  '../fotaImage/pastor.jfif';
import  '../components/BranchCard.css'
import { Link } from 'react-router-dom';


const BranchCard =()=>{
    return(
        <div className="Branch-card-page">
            <div className="container">
              <div className="row">
{/* <div className="col col1 pb-4">
 <div class="card"></div>
 <div class="card-body">
<h5 class="card-title"></h5>
 <Link to="/AbujaChurch" className="btn btn-primary"target="_blank" >Connect With Me</Link>
 </div>
 </div>col1 end */}

 <div className="col col2 pb-4">
 <div class="card"></div>
 <div class="card-body">
 <h5 class="card-title">FOTA ABUJA</h5>
 <Link to="/AbujaChurch" className="btn btn-primary"target="_blank" >Connect With Me</Link>
 </div>
 </div>{/*container end*/}

 <div className="col col3 pb-4">
 <div class="card"></div>
 <div class="card-body">
 <h5 class="card-title">FOTA AJAH</h5>
 <Link to="/AjahChurch" className="btn btn-primary"target="_blank" >Connect With Me</Link>
 </div>
 </div>
 {/*container end*/}
 <div className="col col4 pb-4">
 <div class="card"></div>
 <div class="card-body">
 <h5 class="card-title">
   FOTA HOUSTON</h5>
  <Link to="/AbujaChurch" className="btn btn-primary"target="_blank" >Connect With Me</Link>
 </div>
</div>

<div className="col col5 pb-4">
 <div class="card"></div>
 <div class="card-body">
 <h5 class="card-title">FOTA FESTAC</h5>
 <Link to="/AbujaChurch" className="btn btn-primary"target="_blank" >Connect With Me</Link>
 </div>
</div>



</div>
</div>
 </div> 

    
    );
}
export default BranchCard;







// <div className="row">
// <div className="Image-container">
//    <div className="Image-zoom">
//        <figure> <img src={pastor2} alt="pix7" class="card-img-top"/></figure>
//        <h5>Rev. Yomi Kasali</h5>
//       <p>God Loves you...</p>
//       <Link to="/" className="btn btn-primary">Connect With Me</Link>
//     </div>
//  </div>

//  <div className="Image-container">
//    <div className="Image-zoom">
//        <figure> <img src={AbujaPastor} alt="pix7" class="card-img-top"/></figure>
//        <h5>Pastor Adefunke Kasali</h5>
//        <p>God Loves you...</p>
//       <Link to="/AbujaChurch" className="btn btn-primary"target="_blank" >Connect With Me</Link>
//     </div>
//  </div>

//  <div className="Image-container">
//    <div className="Image-zoom">
//        <figure> <img src={suru} alt="pix7" class="card-img-top"/></figure>
//        <h5>Card title</h5>
//         <p>God Loves you...</p>
//       <Link to="/AbujaChurch" class="btn btn-primary">Connect With Me</Link>
//     </div>
//  </div>

//  <div className="Image-container">
//    <div className="Image-zoom">
//        <figure> <img src={houston} alt="pix7" class="card-img-top"/></figure>
//        <h5>Card title</h5>
//       <p>God Loves you...</p>
//       <Link to="/AbujaChurch" class="btn btn-primary">Connect With Me</Link>
//     </div>
//  </div>

//  <div className="Image-container">
//    <div className="Image-zoom">
//        <figure> <img src={pastor} alt="pix7" class="card-img-top"/></figure>
//        <h5>Card title</h5>
//         <p>God Loves you...</p>
//       <Link to="/AbujaChurch" target="_blank" class="btn btn-primary">Connect With Me</Link>
//     </div>
//  </div>
  
//    </div>{/*ROW end*/}