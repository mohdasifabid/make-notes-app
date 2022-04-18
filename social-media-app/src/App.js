import "./App.css";
import { usePostProvider } from "./contextProvider";
import { Leftbar } from "./utilities/Leftbar";
import { Navbar } from "./utilities/Navbar";
import { Postcard } from "./utilities/Postcard";
import { Postcreater } from "./utilities/Postcreater";

function App() {
  const {state} = usePostProvider()
  return (
    <div>
      <div className="landing-page">
           <div>
             <Leftbar/>
           </div>
           <div>
             <Navbar/>
             <Postcreater/>
          </div>
      </div>
     <div>
     {state.postInfo.map((item)=>{
       return (<Postcard item={item} key={item.id} />)
     })}
     </div>
    </div>
  )};

export default App;
