import React from 'react'
import { Product } from '../models/productModel' 

interface ProductDetailsType {
    item: Product
}

const ProductDetails: React.FC<ProductDetailsType> = ({item}) => {
    return (
        <section className="product-details">
            <div className="container">
                <div>
                    <div>{item.name}</div>
                    <img src={item.imageName} />
                </div>
            </div>
        </section>
    )
}

export default ProductDetails