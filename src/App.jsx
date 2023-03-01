import logo from "./assets/image/fish.jpeg";
import "./App.css";
import Navbar from "./componet/Navbar";
import Slider from "./componet/Slider";
import Category from "./componet/Category";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Home from "./componet/Home";
import React from "react";
import Signup from "./Page/signup";
import Cart from "./Page/Cart";
import Filter from "./componet/Filter";
//import Link from 'link-react';

// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <button>hello </button>
//       <h3>hello wo4ekrln l</h3>
//       <h3>hello wo4ekrln l</h3>
//       <h3>hello wo4ekrln l</h3>
//       <h3>hello wo4ekrln l</h3>
//       <h3>hello wo4ekrln l</h3>
//     </div>
//   )
// }

// export default App
function App() {
  // fetch("/api/categories")
  //   .then((res) => res.json())
  //   .then((res) => console.log("jdfluidfn"));
  // console.log("hello world");

  // fetch("/api/products")
  //   .then((res) => res.json())
  //   .then((res) => console.log(res));

  return (
    <div>
      <Router>
        <Navbar />
        {/* <Filter /> */}
        {/*
        <Category />
        */}
        <Routes>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
        </Routes>
      </Router>
    </div>
  );

  //  fetch(/api/products).
  // then((res)=>console.log(res))
  // return (<>
  //   <div className="App">
  //   {/* <Navbar/> */}
  //   {/* <Category/> */}
  //   {/* <Link to="/signup"> */}
  //   <button>Signup</button>
  //   {/* </Link> */}
  //   <button>hello </button>

  //      <Router>
  //       <Routes>
  //       <Route exact path="/home" element={<Home/>}>
  //       <Route exact path="/signup" element={<Signup/>}>

  //       </Route>
  //        </Route>
  //       </Routes>
  //     </Router>

  //     </div>
  //     <script src="https://kit.fontawesome.com/78fe78e614.js" crossorigin="anonymous"></script>
  //  </>
  // );

  //   // return (
  //   //   <div>
  //   //     {/* <Navbar/> */}
  //   //     <Navbar/>
  //   //   </div>
  //   // )
}

export default App;
