function ShoppingCartListItem() {
    return (
        <tr>
            <td>Porsche Taycan</td>
            <td>
                <div className="input-group mb-3">
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                    >
                        -
                    </button>
                    <input
                        type="text"
                        className="form-control"
                        style={{width: '1rem'}}
                        defaultValue={0}
                    />
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                    >
                        +
                    </button>
                </div>
            </td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger"
                >
                    X
                </button>
            </td>
        </tr>
    )
}

export default ShoppingCartListItem