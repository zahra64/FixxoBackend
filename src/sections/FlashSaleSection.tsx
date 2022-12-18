import React from 'react'
import {Link} from 'react-router-dom'
import ProductCard from '../components/ProductCard'
 import {Product} from '../models/productModel'

 interface IFlashSaleSectionType {
    items: Product[]
      
  }
const FlashSaleSection: React.FC<IFlashSaleSectionType>= ({items = []}) => {


  return (
   
    <section className="flashsale container">
        <div className="flashsale-box">
            <h1 className="flashsale-title">2 FOR USD $29</h1>
            <Link to="/products" className="flashsale-button  btn-sale">
                <span className="corner-left "></span>
                FLASE SALE
                <span className="corner-right"></span>
            </Link>
        </div>
        <div className="this-product-grid">
            <div className="row row-cols-1 row-cols-md-2 g-4" style={{width:"70%"}}>
            {/* <div className="row row-cols-1 row-cols-md-2 g-4" > */}
                {
                    items.map( product => <ProductCard key={product.articleNumber} item ={product} />)
                }
            </div>
        </div>
        <div className="this-product-grid">
            <div className="row row-cols-1 row-cols-md-2 g-4" style={{width:"70%", position:'relative', left:'250px'}}>
                {
                    items.map( product => <ProductCard key={product.articleNumber} item ={product} />)
                }
            </div>
        </div>
        <div className="flashsale-box">
            <h1 className="flashsale-title">2 FOR USD $29</h1>
            <Link to="/products" className="flashsale-button  btn-sale">
                <span className="corner-left "></span>
                FLASE SALE
                <span className="corner-right"></span>
            </Link>
        </div>
    </section>
  )
}

export default FlashSaleSection