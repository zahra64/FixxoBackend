import React, { useEffect } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import BannersSection from '../sections/BannersSection'
import ProductGridSection from '../sections/ProductGridSection'
import { useProductContext } from '../contexts/ProductContexts'
import FlashSaleSection from '../sections/FlashSaleSection'
import CustomerSupportSection from '../sections/CustomerSupportSection'
import { IProductContextType } from '../contexts/ProductContexts'
// import { ProductContext } from '../contexts/contexts'


  const HomeView: React.FC = () => {
    //   const productContext = useContext(ProductContext)


    const {featuredProducts, getFeaturedProducts} = useProductContext() as IProductContextType
    const {flashSaleProducts,  getFlashSaleProducts} = useProductContext() as IProductContextType
    document.title = 'Fixxo.'

  useEffect(() => {
    getFeaturedProducts(8)
  }, [])

  useEffect(() => {
    getFlashSaleProducts(4)
  }, [])
  
  return (
    <>
      <header className="gradient-gray">
        <MainMenuSection />
        <ShowcaseSection />
      </header>
      <ProductGridSection title="Featured Products" items={featuredProducts}/>
      {/* <ProductGridSection title="Featured Products" items={productContext.featuredProducts}/> */}
      <BannersSection />
      <FlashSaleSection  items={flashSaleProducts}/>
      <CustomerSupportSection />
      <FooterSection />
    </>
  )
}


export default HomeView



