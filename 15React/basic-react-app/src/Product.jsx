import "./Product.css"

function Product({ title, price, features }) {
    let isDiscount = price > 15000;
    let styles = {backgroundColor : isDiscount ? "pink" : ""};
    return (
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h3>Price :  {price}</h3>
            {isDiscount && <p>Discount : 5% </p>}
            {/* <ul> to pass the array to component
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul> */ }
        </div>
    );
}

export default Product;