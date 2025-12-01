import { useState } from "react";
export default function Counter(){

    function init(){
        return Math.random();
    }

    let [count, setCount] = useState(init);

    let increaseCount = () =>{
        setCount((currCount)=>{
            return currCount + 1
        });

        setCount((currCount)=>{
            return currCount + 1 ;
        })
    }

    return(
        <div>
             <h3>count ={count}</h3>
             <button onClick={increaseCount}>Increase Count</button>
        </div>
    );
}