import './LikeButton.css'
import { useState } from "react";

export default function LikeButton() {
    let [isLikeD, setIsLiked] = useState(false);
    let [count, setCounts] = useState(0);

    let likeStyle = { color: "red" };

    let toggleLike = () => {
        setIsLiked(!isLikeD);
        setCounts(count + 1);
    }

    return (
        <div >
            <p>Counts ={count}</p>
            <p onClick={toggleLike}>
                {isLikeD == true ?
                 <i className="fa-solid fa-heart" style={likeStyle}></i> : 
                <i className="fa-regular fa-heart"></i>}
            </p>
        </div>
    );
}   