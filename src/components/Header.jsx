import React from 'react'

const Header = ({categories,changeSelected, handleSearch}) => {
  return (
    <div>
     <nav className="navbar bg-light">
    <div className="container-fluid">
      <div className="navbar-brand mx-auto" style={{color: '#e71e6e'}} >
       Alternova shop
      </div>
      <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch}  />
      <select className="form-select form-select-sm " aria-label=".form-select-sm example" onChange={changeSelected}>
  <option defaultValue value={''}>select category</option>
  {
   categories.length > 0 && categories.map(category => (
    <option key={category} value={category}>{category}</option>
   ))
  }
</select>
    </form>
    </div>
  </nav></div> 
  )
}

export default Header