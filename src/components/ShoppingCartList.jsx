import { useSelector } from 'react-redux'

import ShoppingCartListItem from './ShoppingCartListItem'

function ShoppingCartList() {
    const isVisible = useSelector((state) => state.shoppingCart.isVisible)

    if (!isVisible) return

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Product name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <ShoppingCartListItem />
            </tbody>
        </table>
    )
}

export default ShoppingCartList
