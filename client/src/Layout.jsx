import Footer from "./components/Footer";
import Topmenu from "./components/topmenu";
import { Outlet } from "react-router-dom";


const Layout=()=>{
    return(
        <>
      <Topmenu/>

      <div>
        <Outlet/>
      </div>
      
      <Footer/>
        </>
    )
}
export default Layout;