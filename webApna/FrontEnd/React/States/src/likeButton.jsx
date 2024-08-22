import { useState } from "react";

export default function LikeButton()
{
    // let clicked = () => {
    //     console.log("clicked");
    // };

    let [isLiked, setIsLiked] = useState(false);
    let [clicks, setClicks] = useState(0);

    function toggleBtn()
    {
        // console.log("Toggled");
        setIsLiked(!isLiked);
        if(!isLiked)
        {
            setClicks(clicks + 1);
        }
    }

    let redStyle = {color : "red"};

    return (
        <div>
            <p onClick={toggleBtn}>
                { isLiked ? (
                        <i className="fa-solid fa-heart" style = {redStyle}></i> 
                    ):
                    ( 
                        <i className="fa-regular fa-heart"></i> 
                )}
            </p>
            <p>Likes: {clicks}</p>
        </div>
    );
}