/* eslint-disable react/prop-types */

function ProductCard({ data }) {
    return (
        <div className="card" style={{width: '18rem', marginTop: '1rem'}}>
            <img
                src={data.thumbnail}
                className="card-img-top"
                alt={data.title}
            />
            <div className="card-body">
                <h5 className="card-title">
                    {data.title}
                </h5>
                <p className="card-text">
                    {data.description}
                </p>
                <h5>{data.price}$</h5>
                <button className="btn btn-primary">
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default ProductCard