import {BrowserRouter,Routes, Route} from "react-router-dom"
import Layout from "./Layout";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Product from "./pages/Product.jsx";
import Admin from "./pages/Admin/AdminDashBoard.jsx";
import ProductInsert from "./pages/Admin/ProductInsert.jsx";
import ProductUpdate from "./pages/Admin/ProductUpdate.jsx";
import Cart from "./pages/Cart.jsx";
import WishList from "./pages/wishList.jsx";



const App=()=>{
  return(
    <> 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/product" element={<Product/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/wishlist" element={<WishList/>} />


      <Route path="admin" element={<Admin/>}>
      <Route path="productinsert" element={<ProductInsert/>}/>
      <Route path="productupdate" element={<ProductUpdate/>}/>
      
       
      </Route>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;