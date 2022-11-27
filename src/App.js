import { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import './App.css';
import productsJSON from './static/productsJSON.json'


function App() {
  const [products, setProducts] = useState(productsJSON.products)


  return (
    <div className="App">
      <Header />
      <div className='container-fluid'>
        <div className="row">
        <ProductList products={products} />
          <div className="col-sm-6">
            2 of 2
          </div>
        </div>
    </div>
      
    </div>
  );
}

export default App;
