import {useContext, useState} from "react"
import {createContext } from "react"
import {Product} from "../models/productModel"


interface IProductProviderType {

	children: any
}

export interface IProductContextType {
	product: Product
	products: Product[]
	featuredProducts: Product[]
	flashSaleProducts: Product[]
	flashSaleLeftProducts: Product[]
	getProduct: (articleNumber?: string) => void
	// getProducts: (take?: number) =>void
	getProducts: () =>void
	getFeaturedProducts: (take?: number) =>void
	getFlashSaleProducts: (take?: number) =>void
	getFlashSaleLeftProducts: (take?: number) =>void

} 
export const ProductContext = createContext<IProductContextType | null>(null)
export const useProductContext = () => { return useContext (ProductContext )}

    const ProductProvider: React.FC<IProductProviderType> = ({children}) => {
	// const baseUrl: string ='https://win22-webapi.azurewebsites.net/api/products'
	const baseUrl: string ='http://localhost:5000/api/products'

	const product_object: Product = { tag:'', articleNumber: '', name:'', description:'', category:'', price:0, imageName:''}

	const [product, setProduct] = useState<Product> (product_object)
	const [products, setProducts] = useState<Product[]> ([])
	const [featuredProducts, setFeaturedProducts] = useState<Product[]> ([])
	const [flashSaleProducts, setFlashSaleProducts] = useState<Product[]> ([])
	const [flashSaleLeftProducts, setFlashSaleLeftProducts] = useState<Product[]> ([])

	const getProduct = async (articleNumber?: string ) => {
		if (articleNumber !== undefined) {
			// const res = await fetch(baseUrl + `/${articleNumber}`)
			const res = await fetch(`${baseUrl}/product/details/${articleNumber}`)
			setProduct (await res.json ())
		}
		
	}

	// const getProducts = async (take: number = 0) => {
	// 	let url = baseUrl

	// 	if (take !== 0)
	// 	url = baseUrl + `?take=${take}`

	// 	const res = await fetch(url)
	// 	setProducts(await res.json())
	// }

	const getProducts = async () => {

		const res = await fetch(baseUrl)
		setProducts(await res.json())
	}

	const getFeaturedProducts = async (take: number = 0) => {
		// let url = baseUrl + `?tag=featured`
		let url = `${baseUrl}/featured`
		if (take !== 0)
		// url += baseUrl + `&take=${take}`
		url += `/${take}`

		const res = await fetch(url)
		setFeaturedProducts(await res.json())
	}

	const getFlashSaleProducts = async (take: number = 0) => {
		// let url = baseUrl + `?tag=flashSale`
		let url = `${baseUrl}/flashSale`
		if (take !== 0)
		// url += baseUrl + `&take=${take}`
		url += `/${take}`

		const res = await fetch(url)
		setFlashSaleProducts (await res.json ())
	}
	
	const getFlashSaleLeftProducts = async (take: number = 0) => {
		let url = `${baseUrl}/flashSaleLeft`
		if (take !== 0)
		url += `/${take}`

		const res = await fetch(url)
		setFlashSaleLeftProducts (await res.json ())
	}
	
	return <ProductContext.Provider value={{product, products, featuredProducts,flashSaleProducts,flashSaleLeftProducts, getProducts, getFeaturedProducts, getFlashSaleProducts,getFlashSaleLeftProducts, getProduct}}>
		{children}
		
	</ProductContext.Provider>
	}

	export default ProductProvider
