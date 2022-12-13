import React, { useEffect } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import { useProductContext } from '../contexts/ProductContexts'

const ProductsView = () => {
  const {products, getProducts} = useProductContext()
  
  useEffect(() => {
    getProducts()
  }, [])

 

  return (
    <>
    <MainMenuSection />
    <BreadcrumbSection currentPage="Products" />
    <ProductGridSection title="Products" items={products} />
    <FooterSection />
    </>
  )
}

export default ProductsView