import Header from "./components/Header"
import Meme from "./components/Meme"
import "./App.css"

const App = () => {
  return (
    <div className="container">
      
      <div className="item1">
        <Header />        
      </div>
      <div className="item2">
        <input type="text" className="textBox" name="" id="" />
      </div>
      <div className="item3">
        <input type="text" className="textBox"  name="" id="" />
      </div>
      

      <div className="item4">
      <Meme />

      </div>


      </div>
  )
}


export default App;