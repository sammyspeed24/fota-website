import React from 'react'
import VideoHome  from '../components/VideoHome';
import classes from '../components/Home.module.css'
import BranchCard from '../components/BranchCard';
import CustomNavbar from '../components/Navbar';


const Home =()=>{
    return(
        <div className={classes.HomeContainer}>
             <CustomNavbar /> 
            < VideoHome />
            <BranchCard />



        </div>
    );
}
export default Home;
