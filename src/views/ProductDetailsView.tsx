import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ProductDetails from '../sections/ProductDetails'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import { useProductContext, IProductContextType } from '../contexts/ProductContexts'
import BreadcrumbSection from '../sections/BreadcrumbSection'



const ProductDetailsView: React.FC= () => {

    // const {product, getProduct} we name it as a variable to productcontext
    const {id} = useParams<string>()
    const productContext = useProductContext() as IProductContextType

    useEffect(() => {
        productContext.getProduct(id)
      }, [])

    return (
        <>
            <MainMenuSection />
            <BreadcrumbSection  currentPage={productContext.product.name} />
            {/* <BreadcrumbSection parentPage="Products" currentPage={productContext.product.name} /> */}
            <ProductDetails item={productContext.product} />
            <FooterSection />
        </>
    )
    }

export default ProductDetailsView


