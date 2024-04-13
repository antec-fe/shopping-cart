function ProductCard() {
    return (
        <div className="card" style={{width: '18rem', marginTop: '1rem'}}>
            <img
                src="https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
                className="card-img-top"
                alt="iPhone 9"
            />
            <div className="card-body">
                <h5 className="card-title">
                    iPhone 9
                </h5>
                <p className="card-text">
                    An apple mobile which is nothing like apple
                </p>
                <h5>549$</h5>
                <button className="btn btn-primary">
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default ProductCard