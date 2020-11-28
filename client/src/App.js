import React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import CartScreen from "./screens/CartScreen"
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen"
function App() {
  return (
    <Router>
    <div className="grid-container">
    <header className="row">
     <div >
         <a className="brand" href="/">Clothing Line</a>
     </div>
     <div>
         <a href="/cart">Cart</a>
         <a href="/signin">Sign In</a>
     </div>
    </header>
    <main>
      <Route  path="/" component={HomeScreen} exact></Route>
      <Route  path="/product/:id" component={ProductScreen}></Route>
      <Route path="/cart/:id?" component={CartScreen}></Route>
    </main>
    <footer className="row center">
       All right reserved
    </footer>
</div>
</Router>
  );
}

export default App;

