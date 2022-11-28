import { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import ToastMessage from './components/ToastMessage';
import './App.css';
import productsJSON from './static/productsJSON.json';


function App() {
  const [products, setProducts] = useState(productsJSON.products)
  const [orders, setOrders] = useState([])
  const [show, setShow] = useState(false)
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [search, setSearch] = useState('')
  const [finishOrders, setFinishOrders] = useState([])
  const [message, setMessage] = useState({title: '', message: '', type: ''})
  
  // const [countOrder, setCountOrder] = useState(0)

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

    if(newProduct.stock === 0){
  
      setMessage({
        title: 'Sold Out',
        message: 'You can not add more products of this type, we do not have in stock',
        type: 'warning'
      })
      setShow(true)
      return false
    }

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
    
    if(orders.length === 0){
      setMessage({
        title: 'Empty Cart',
        message: 'add products to the cart to create your order',
        type: 'warning'
      })
      setShow(true)
      return false
    }
    const createOrder = {
       "total_order_price": totalOrderPrice,
       "order": orders.map(order => {
         return {
           ...order,
           "total_price": order.quantity * order.unit_price
         }
       })
     }
     setFinishOrders(finish => [...finish, createOrder])
     generateJson(createOrder);
     setOrders([])
     setMessage({
      title: 'Order Created',
      message: 'Your order is ready. Enjoy it!',
      type: 'success'
    })
    setShow(true)
  

    console.log(finishOrders)
  }

  const generateJson = (data) => {
    const stringData = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data))}`;
      const now = new Date()
      const date = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`
      const time = `${now.getHours()}_${now.getMinutes()}_${now.getSeconds()}`
      const link = document.createElement("a");
      link.href = stringData;
      link.download = `order-${date}_${time}.json`;
  
      link.click();
    
  }

  return (
    <div className="App bg-light">
      <Header categories={categories} changeSelected={changeSelected}  handleSearch={handleSearch} />
      <div className='container-fluid'>
        <div className="row d-flex flex-column-reverse flex-sm-row pt-2">
          <div className="ProductList col-12 col-sm-5 col-lg-7 col-xl-6 ">
            <ProductList products={filterProducts} addToCart={addToCart} />
          </div>
          <div className="col-12 col-sm-7 col-lg-5 col-xl-6 ">
            <ShoppingCart orders={orders} createOrder={handleCreateOrder} />
          </div>
        </div>
      </div>
      <ToastMessage closeToast={closeToast} show={show} message={message} />
    </div>
  );
}

export default App;
