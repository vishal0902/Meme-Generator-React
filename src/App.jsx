import Header from "./components/Header"
import Meme from "./components/Meme"
import "./App.css"
import { useEffect, useState } from "react"


const App = () => {

  console.log("hello")

  const [memeData, setMemeData] = useState([])
  
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    imageUrl: ""
  })


  const handleChange = (event) => {
    console.log(event.target)
    const { value, name } = event.target;

    setMeme((preState) => {
      return (
        {
          ...preState,
          [name]: value
        }
      )
    })
  }


    useEffect(() => {
      console.log("useEffect called");
      console.log("hello")

      fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setMemeData(data))

        
     
    }, [])


    const getUrl = () => {
      
      const imageArray = memeData.data.memes;
      console.log(imageArray[0].url, "hi")
      
      
      const randomIndex = Math.floor(Math.random() * imageArray.length)
      
      setMeme((preState) => {
        return (
          {
            ...preState,
            imageUrl: imageArray[randomIndex].url
          }
        )
      })
      
    }




    return (
      <div className="container">

            <div className="item1">
              <Header />
            </div>

                  
              <div className="item2">
                <input
                  type="text"
                  className="textBox"
                  name="topText"
                  onChange={handleChange}
                  value={meme.topText}
                  id=""
                  placeholder="Top Text"
                />
              </div>
        
        
              <div className="item3">
                <input
                  type="text"
                  className="textBox"
                  name="bottomText"
                  onChange={handleChange}
                  value={meme.bottomText}
                  id=""
                  placeholder= "Bottom Text"
                />
              </div>


            <div className="memeSection">
              <input className="btn web3color" type="button" onClick={getUrl} value="Generate Meme" />

             

                <Meme url={meme.imageUrl} topText = {meme.topText} bottomText = {meme.bottomText} />
              
              </div>

        
    


      </div>
    )
  
}


export default App;