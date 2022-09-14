// import './App.css'

import Home from "./Pages/Home";
import { Text } from "@chakra-ui/react";
import Allroutres from "./Components/Allroutres";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import Product from "./Pages/Product";
function App() {
  return (
    <div className="">
      <Navbar />
      <Allroutres />
      {/* <Product/> */}
      <Footer/>
    </div>
  );
}

export default App;
