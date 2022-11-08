import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import Navigation from './components/Navigation'
import CreateProductos from './components/CreateProductos'
import CreateCategories from './components/CreateCategories'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (

  <Router>
    <Navigation/>
    <div className="container">
    <Route path="/Productos" component={props=><CreateProductos/>}/>
    <Route path="/categorias" component={props=><CreateCategories/>}/>
    </div>

    </Router>
   
  );
}

export default App;
