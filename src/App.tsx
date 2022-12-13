// import React from 'react';
// import './App.css';
import React, {useEffect, useState} from 'react'
import './style.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeView from './views/HomeView';
import CategoriesView from './views/CategoriesView';
// import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import ContactsView from './views/ContactsView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import WishListView from './views/WishListView';
import ShoppingCartView from './views/ShoppingCartView';
import NotFoundView from './views/NotFoundView';
import { ProductProvider} from './contexts/ProductContexts';

const App: React.FC = ()=> {
  return (
    <BrowserRouter>
      <ProductProvider>
      <Routes>
        <Route path="/" element={<HomeView/>} />
        <Route path="/categories" element={<CategoriesView />} />
        {/* <Route path="/products" element={<ProductsView />} /> */}
        <Route path="/products/:name" element={<ProductDetailsView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/compare" element={<CompareView />} />
        <Route path="/wishlist" element={<WishListView />} />
        <Route path="/shoppingcart" element={<ShoppingCartView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;



// function App() {
  // const [products, setProducts] = useState({
  //   all: [],
  //   featuredProducts: [],
  //   saleProducts: []
  // })
  
  //   useEffect (() => {
  //     const fetchAllProducts = async () => {
  //       let result = await fetch ('https://win22-webapi.azurewebsites.net/api/products')
  //       setProducts({...products, all: await result.json()})
  //     }
  //     fetchAllProducts()

  //     const fetchFeaturedProducts = async () => {
  //       let result = await fetch ('https://win22-webapi.azurewebsites.net/api/products?take=8')
  //       setProducts({...products, featuredProducts: await result.json()})
  //     }
  //     fetchFeaturedProducts()

  //     const fetchSaleProducts = async () => {
  //       let result = await fetch ('https://win22-webapi.azurewebsites.net/api/products?take=4')
  //       setProducts({...products, saleProducts: await result.json()})
  //     }
  //     fetchSaleProducts()

  //   }, [setProducts])


// return (
//   <BrowserRouter>
//     <ProductContext.Provider value={products}>
//     <Routes>
//       <Route path="/" element={<HomeView/>} />
//       <Route path="/categories" element={<CategoriesView />} />
//       {/* <Route path="/products" element={<ProductsView />} /> */}
//       <Route path="/products" element={<ProductsView />} />
//       <Route path="/products/:name" element={<ProductDetailsView />} />
//       <Route path="/contacts" element={<ContactsView />} />
//       <Route path="/search" element={<SearchView />} />
//       <Route path="/compare" element={<CompareView />} />
//       <Route path="/wishlist" element={<WishListView />} />
//       <Route path="/shoppingcart" element={<ShoppingCartView />} />
//       <Route path="*" element={<NotFoundView />} />
//     </Routes>
//     </ProductContext.Provider>
//   </BrowserRouter>
// );
// }