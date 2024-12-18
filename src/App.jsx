import { useEffect, useState } from "react"
import { ScaleLoader } from "react-spinners";
import SingleProduct from "./SingleProduct";

function App() {
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(true);

  const fetchData= async()=>{
    const response=await fetch("https://dummyjson.com/products");
    const products =await response.json();
    setData(products.products);
    setLoading(false);
  }
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <>
    <div className="container-fluid mt-3">
      <div className="row flex justify-content-center">
        
        {loading &&
          <div className="col-lg-1">
            <ScaleLoader />
          </div>
        }
        {data.map((product,index)=>{
          return(
          <SingleProduct {...product} key={index} />

          )
        })}

      
      </div>
 
    </div>
     
    </>
  )
}

export default App
