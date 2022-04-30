import { createContext,useState ,useEffect} from "react";
import "./App.css";
import RouterDom from "./pages/router/Router";
// import Image7 from "./assets/Image 7.png";
// import Image8 from "./assets/Image 8.png";
// import Image10 from "./assets/Image 10.png";
// import Image11 from "./assets/Image 11.png";
// import Image12 from "./assets/Image 12.png";
// import Data from './assets/sample'
export const AllBooks = createContext()

function App() {
  const [bookArray, setBookArray] = useState([])
  let boookobject ={
      books: bookArray,
      setBooks: setBookArray
    }
  useEffect(() => {
    fetch('http://localhost:3004/Data')
      .then(results => results.json())
      .then(data => {
       console.log(data);
       setBookArray(data)
      //  setBookArray
      // boookobject= {
      //   books: bookArray,
      //   setBooks: setBookArray
      // }
      });
  }, []);
  return (
    <AllBooks.Provider value={boookobject}>
    <RouterDom />
    </AllBooks.Provider>
    // <div>
    //   {/* <OrderSummery/> */}
    //     {/* <OrderPlaced/>    */}
    //     {/* <Feedback/> */}
    //  </div>
  );
}

export default App;