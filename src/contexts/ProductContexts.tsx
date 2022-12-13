import {useContext, useState} from "react"
import {createContext } from "react"
import {Product} from "../models/productModel"


interface IProductType {

	children: any
}

export interface IProductContextType {
	product: Product
	products: Product[]
	featuredProducts: Product[]
	flashSaleProducts: Product[]
	getProduct: (articleNumber: string) => void
	getProducts: (take?: number) =>void
	getFeaturedProducts: (take?: number) =>void
	getFlashSaleProducts: (take?: number) =>void
} 
export const ProductContext = createContext<IProductContextType | null>(null)

export const useProductContext = () => {
	return useContext (ProductContext )
}
export const ProductProvider: React.FC<IProductType> = ({children}) => {
	const url = 'https://win22-webapi.azurewebsites.net/api/products'

	const product_object: Product = { articleNumber: '', name:'',category:'',price:0}

	const [product, setProduct] = useState<Product> (product_object)
	const [products, setProducts] = useState<Product[]> ([])
	const [featuredProducts, setFeaturedProducts] = useState<Product[]> ([])
	const [flashSaleProducts, setFlashSaleProducts] = useState<Product[]> ([])

	const getProducts = async (take: number = 0) => {
		const res = await fetch(url)
		setProducts(await res.json())
	}

	const getFeaturedProducts = async (take = 0) => {
		const res = await fetch(url + `?take=${take}`)
		setFeaturedProducts (await res.json ())
	}

	const getFlashSaleProducts = async (take = 0) => {
		const res = await fetch(url + `?take=${take}`)
		setFlashSaleProducts (await res.json ())
	}
	const getProduct = async (articleNumber: string ) => {
		const res = await fetch(url + `/${articleNumber}`)
		setProduct (await res.json ())
	}

	
	return <ProductContext.Provider value={{product, products, featuredProducts,flashSaleProducts, getProducts, getFeaturedProducts, getFlashSaleProducts, getProduct}}>
		{children}
		
	</ProductContext.Provider>
	}

	export default ProductContext
