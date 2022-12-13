import ProductCard from '../components/ProductCard'
import React from 'react'
import {Product} from '../models/productModel'


interface IProductGridType {
  title: string
  items: Product[]
    
}

 const ProductGridSection: React.FC<IProductGridType>= ({title, items = []}) => {

  return (
    <section className="product-grid">
        <div className="container">
            <h1>{title}</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
              {
                             
                    items.map(product =><ProductCard key={product.articleNumber} item={product} />)
        
                 // products.featuredProducts.map(product =><ProductCard key={product.articleNumber} item={product} />)
              }
              
         
            </div>
        </div>
 </section>
    )
  }

  export default ProductGridSection

//TO GET ALL PRODUCT FROM API
// const ProductGridSection= ({title}) => {

//   const products = useContext(ProductContext)
  
//     return (
//       <section className="product-grid">
//           <div className="container">
//               <h1>{title}</h1>
//               <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
//                 {
//                     // products.map(product => <ProductCard key={items.id} item ={product} />)
//                     products.map( product => <ProductCard key={product.articleNumber} item ={product} />)
//                 }
                
           
//               </div>
//           </div>
//    </section>
//     )
//   }



///////////////////////////////////






// items.map( item => (<ProductCard key={item.articleNumber} item={item} />))