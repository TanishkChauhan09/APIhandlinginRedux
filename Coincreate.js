import { useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { fetchdata } from "./slicer1";
import CoinCard from "./Coincard";

export default function Coincreate(){

    const dispatch = useDispatch();
    const {data,loading,error} = useSelector((state) => state.slice1);

 
    useEffect(()=>{
          dispatch(fetchdata(20));
    },[])

    // Dispaly information of user 
    if(loading){
        return <h1>Data is loading</h1>
    }
    if(error){
        return <h1>Error has occured</h1>
    }

    return(
        <>
          <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
            {data.map((value)=><CoinCard key={value.id} coin={value}></CoinCard>)}
          </div>
        </>
    )

}