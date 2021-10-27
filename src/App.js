import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router,Route,Switch } from "react-router-dom";
import CustomNavbar from './components/Navbar';
import AboutPage from './components/AboutPage';
import Gallery from './components/Gallery';
import Home from './components/Home';


import ContactPage from './components/ContactPage';
import ConnectPage from './components/ConnectPage';
import GivePaymentPage from './components/GivePaymentPage';
// import SendRequest from './Components/SendRequest';
// import FlipCard from "./Components/FlipCard"
// import ScrollToTop from './Components/ScrollToTOp';
// import ScrollTopButton from './Components/ScrollTopButton';
// import { SendUsMsg } from './Components/SendUsMsg';
// import DepartmentsPage from './Components/Departments';
// import FolwContruction from './Components/FolwContruction';
// import  "./Components/ScrollToTop.css";
import AjahChurch from './Component2/AjahChurch';

import AbujaChurch from './Component2/AbujaChurch';


// // I used HOC (higher ordered component) is used to wrap the route
// export const PublicRoute = ({ component: Component , ...rest})=>{
//   return (
//       <Route {...rest}  component={(props)=>(
//           <div>
//               <CustomNavbar /> {/* HEADER ALWAYS VISIBLE */}
//               <Component {...props} />
//           </div>
//       )}
//       />
//   )
// }
// // I used HOC (higher ordered component) i dont need the navbar here
// export const AllBranchesRoute = ({ component: Component, ...rest }) => {
//   return (
//       <Route
//           {...rest}
//           component={(props)=> (<Component {...props} />)}
//       />
//   );
// };

function App() {
return(
  <Router>
  <div className="App">
<Switch>

<Route exact path="/" component={Home} />
 <Route exact path="/about" component={AboutPage} />
  <Route exact path="/contact" component={ContactPage} />
    <Route exact path="/giving/3.4" component={GivePaymentPage} />
     <Route exact path="/gallery/3.3" component={Gallery} />
     <Route exact path="/connect/3.1" component={ConnectPage} />
         < Route exact BranchesRoute exact path="/abujaChurch" component={AbujaChurch} />
         < Route exact BranchesRoute exact path="/ajahChurch" component={AjahChurch} />
  
</Switch>


  </div>
  </Router>

);




}

export default App;


