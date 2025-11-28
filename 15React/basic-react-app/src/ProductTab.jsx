import Product from "./Product";

function ProductTab(){
    let options = ["High-tech","Durable","Fast"];
    const option2 = {
        a:"High-tech",
        b:"Durable",
        c:"Fast"
    }
    return (
       <>
        <Product title ="Phone" price={20000} features={options}/>
        <Product title ="Laptop" price={70000} features={options}/> 
        <Product title ="Watches" price={2000} features={options}/>
        </>
    );
}

export default ProductTab;