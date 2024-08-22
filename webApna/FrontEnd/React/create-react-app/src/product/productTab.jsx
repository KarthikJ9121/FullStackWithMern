import Product from "./product.jsx";

function ProductTab()
{
    // let features = [<li>Fast</li>, <li>Durable</li>, <li>Eco-friendly</li>] or can be sent
    // let features = ["Fast", "Durable", "Eco-Friendly"];
    let styles = {
        display : "flex",
        flexWrap : "wrap"
    };
    return (
        <div style = {styles}> 
            <Product name = "Mouse" /*price = {2500} features = {features}*/ idx = {0}/>
            <Product name = "Apple Pencil" /*price = {15000} features = {features}*/ idx = {1}/>
            <Product name = "Computer" /*price = {45000} features = {features}*/ idx = {2}/>
            <Product name = "Laptop" /*price = {35000} features = {features}*/ idx = {3}/>
        </div>
    );
}

export default ProductTab;