import ShoppingCartListItem from './ShoppingCartListItem'

function ShoppingCartList() {
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
