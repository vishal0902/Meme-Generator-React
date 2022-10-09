import memeData from "../assets/MemesData"
import { useState } from "react";


const Meme = () => {
    
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        imageUrl: ""
    });

    const getUrl = () => {
        const imageArray = memeData.data.memes;
        console.log(imageArray.length)
        const randomIndex =  Math.floor(Math.random() * imageArray.length)
        setMeme((preState)=>{
            return (
                {
                    ...preState,
                    imageUrl: imageArray[randomIndex].url
                }
            )
        })
        console.log(meme.imageUrl);
    }
    
    return (
        <div className="memeSection">
            <input className="btn web3color" type="button" onClick={getUrl} value="Generate Meme" />
            <img src={meme.imageUrl} alt="" className="memeImage" />
        </div>
        
    )
}

export default Meme;