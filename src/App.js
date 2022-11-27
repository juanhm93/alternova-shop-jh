import { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import ToastSoldOut from './components/ToastSoldOut';
import './App.css';
import productsJSON from './static/productsJSON.json'


function App() {
  const [products, setProducts] = useState(productsJSON.products)
  const [orders, setOrders] = useState([])
  const [show, setShow] = useState(false)

  const closeToast = () => {
    setShow(false)
  } 

  const addToCart = (newProduct) => {
    console.log("addToCart")
    console.log(newProduct)

    if(newProduct.stock === 0){
      console.log("no se puede agregar")
      setShow(true)
      return false
    }

    console.log("seguimos!!")
    setProducts(products.map(product => {
      if(product.name === newProduct.name){
        return {
          ...product,
          stock: product.stock - 1
        }
      }else{
        return product
      }
    }))

    const hasOrder = orders.findIndex(order => order.name === newProduct.name)
    if(orders.length > 0 && hasOrder !== -1){
      setOrders(orders.map(order => {
        if(order.name === newProduct.name){
          return {
            ...order,
            quantity: order.quantity + 1
          }
        }else{
          return order
        }
      }))
      
    }else {
      const {  stock, ...pro} = newProduct
      pro.quantity = 1
      setOrders(order => [
          ...order,
          pro
        ])
    }
  }


  return (
    <div className="App">
      <Header />
      <div className='container-fluid'>
        <div className="row pt-2">
          <div className="ProductList col-sm-6">
            <ProductList products={products} addToCart={addToCart} />
          </div>
          <div className="col-sm-6">
            <ShoppingCart orders={orders} />
          </div>
        </div>
      </div>
      <ToastSoldOut closeToast={closeToast} show={show} />
    </div>
  );
}

export default App;
