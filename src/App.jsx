import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from './components/Header'
import ProductCard from './components/ProductCard'
import ShoppingCartList from './components/ShoppingCartList'

import { fetchList } from './store/productSlice'

import 'bootstrap/dist/css/bootstrap.css'

function App() {
	const dispatch = useDispatch()
	const products = useSelector(state => state.product.list)

	useEffect(()=> {
		dispatch(fetchList())
	}, [dispatch])


    return (
        <>
			<Header />
			<div className='container'>
				<div className='row'>
					<div className='col-6'>
						{
							products && products.map((product) => (
								<ProductCard
									key={product.id}
									data={product}
								/>
							))
						}
					</div>
					<div className='col-6'>
						<ShoppingCartList />
					</div>
				</div>
			</div>
        </>
    )
}

export default App
