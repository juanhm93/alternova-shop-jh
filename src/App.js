// import fs from 'fs';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import ToastSoldOut from './components/ToastSoldOut';
import './App.css';
import productsJSON from './static/productsJSON.json';




function App() {
  const [products, setProducts] = useState(productsJSON.products)
  const [orders, setOrders] = useState([])
  const [show, setShow] = useState(false)
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    const getCategories = products.map(product => product.type)
    const notRepeat = new Set(getCategories)
    const allCategories = Array.from(notRepeat)
    setCategories(allCategories)
  }, [])

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

  const changeSelected = (e) => {
    setSelectedCategory(e.target.value)
  }
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const filterProducts = products.filter(product => {
    if(search !== ''){
      return product.name.toLowerCase().includes(search.toLowerCase())
    }else if(selectedCategory !== '' && product.type === selectedCategory){
      return product
    }else if(selectedCategory === '' && search === ''){
      return product
    }
  })

  const handleCreateOrder = (totalOrderPrice) => {
    // const itemsOrder = orders.map(order => {
    //   return {
    //     ...order,
    //     "total_price": order.quantity * order.unit_price
    //   }
    // })
    const createOrder = {
      "total_order_price": totalOrderPrice,
      "order": orders.map(order => {
        return {
          ...order,
          "total_price": order.quantity * order.unit_price
        }
      })
    }
    console.log(createOrder)
  }

  return (
    <div className="App">
      <Header categories={categories} changeSelected={changeSelected}  handleSearch={handleSearch} />
      <div className='container-fluid'>
        <div className="row pt-2">
          <div className="ProductList col-sm-6">
            <ProductList products={filterProducts} addToCart={addToCart} />
          </div>
          <div className="col-sm-6">
            <ShoppingCart orders={orders} createOrder={handleCreateOrder} />
          </div>
        </div>
      </div>
      <ToastSoldOut closeToast={closeToast} show={show} />
    </div>
  );
}

export default App;
