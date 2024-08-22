import "./product.css"
import Price from "./price.jsx"

function Product({name, idx})
{
    // console.log(name);
    // let list = features.map((feature) => <li>{feature}</li>)
    // let styles = {backgroundColor : price > 30000 ? "pink" : ""}
    let oldPrices = ["700", "2300", "35000", "43000"];
    let newPrices = ["500", "2000", "25000", "40000"];
    let desc = [
        "Wireless",
        "Remarkable MultiTouch",
        "Your own Pc",
        "Lightweight"
    ]
    return (
        // <div className="card" /*style={styles}*/>
        //     <h1>{name}</h1>
        //     <h2>Price : {price}</h2>
        //     <p>{features.map((feature) => <li>{feature}</li>)}</p>
        //     {/* {price > 30000 ? <p>Discount : 5%</p>: null} */}
        //     {price > 30000 && <p>Discount : 5%</p>}
        // </div>
        <div className="card">
            <p>{name}</p>
            <p>{desc[idx]}</p>
            <Price oldPrices = {oldPrices[idx]} newPrices = {newPrices[idx]}/>
        </div>
    );
}

export default Product;