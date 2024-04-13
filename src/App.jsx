import Header from './components/Header'
import ProductCard from './components/ProductCard'
import ShoppingCartList from './components/ShoppingCartList'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
    return (
        <>
			<Header />
			<div className='container'>
				<div className='row'>
					<div className='col-6'>
						<ProductCard />
						<ProductCard />
						<ProductCard />
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
