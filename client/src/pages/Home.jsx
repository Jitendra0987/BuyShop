import Bener from "../components/Bener";
import CartSection from "../components/CartSection";
import Reguler from "../components/Reguler";
import { useEffect } from "react"
import BASE_URL from "../../configer.jsx"
import axios from "axios"
import { useContext } from "react";
import { myLoginContext } from "../LoginContext"
const Home=()=>{

    const {setIsLogedIn} = useContext(myLoginContext);
    const getProfile = async () => {
        const token = localStorage.getItem("token");
      const response=await axios.get(`${BASE_URL}/user/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      console.log(response.data);
      localStorage.setItem("userid", response.data._id);
      localStorage.setItem("username", response.data.name);
      setIsLogedIn(true); 
    };  
  
  useEffect(()=>{
    if (localStorage.getItem("token"))
    {
      getProfile();
    }
  
  }, [])


    return(
        <>
        <Bener/>
        <CartSection/>
        <Reguler/>

        </>
    )
}
export default Home;