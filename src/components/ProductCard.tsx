import React from 'react'
import { NavLink } from 'react-router-dom'
import { Product } from '../models/productModel';

interface ProductCardType {
    item: Product
}


 const productCard: React.FC<ProductCardType> = ({item}) => {

    const addToWishList = (e:any) => {
        console.log("added to wish list")
    }
    

    const addToCompare = (e: any) => {
        console.log("added to compare")
    }


    const addToCart = (e:any) => {
        console.log("added to shopping cart")
    }

    return (
        <div className="col">
            <div className="card">
                <div className="card-img">
                {/* <img src={TempImg} alt="" /> */}
                    {/* <img src={item.img} alt={item.name} /> */}
                    <img src={item.imageName} alt={item.name} />
                        {/* <img src="assets/images/imges.jpg" alt="images" /> */}
                    <div className="card-menu d-xl-none">
                        <button onClick={addToWishList} className="menu-link"><i className="fa-regular fa-heart"></i></button>
                        <button onClick={addToCompare} className="menu-link"><i className="fa-regular fa-code-compare"></i></button>
                        <button onClick={addToCart} className="menu-link"><i className="fa-regular fa-bag-shopping"></i></button>
                        {/* <a href="#"><i className="fa-regular fa-repeat"></i></a> */}
                    </div>
                    <NavLink to={`/products/${item.articleNumber}`}  className="btn-theme btn-card-theme d-xl-none" >
                        <span className="corner-left"></span>
                        QUICK VIEW
                        <span className="corner-right"></span>
                    </NavLink>
                </div>
                <div className="card-body">
                    {/* <p className="card-category">Category</p> */}
                    {/* <h5 className="card-title">Modern Black Blouse</h5> */}
                    <p className="card-category">{item.category}</p> 
                    <h5 className="card-title">{item.name}</h5>  
                    <p className="card-rating">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                    </p>
                    <p className="card-price">{item.price}</p>  
                </div>
            </div>
        </div>
    )
    }

    export default productCard