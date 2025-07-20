import StockChart from "./StockChart";
import StockDataTable from "./StockDataTable";
import { mockStockData } from "../data/mockstocksData";
import { useContext, useState } from "react";
import { ContextApp } from "../context/ContextApp";
const Dashboard = ()=>{
    const [data,setdata ,presenteddata,setpresenteddata] = useContext(ContextApp);
   
 const handeldata = (ev)=>{
let actualvalue = ev.currentTarget.id;
let filterdata = data.filter((stock)=>stock.symbol === actualvalue);
setpresenteddata(filterdata[0]);
    }

    return(
        <>
        <div className=" sm:grid grid-cols-[30%_70%] mt-3 pl-1.5 pr-1.5">
            <div className="bg-slate-800 border-2  m-3 h-96 overflow-y-scroll">
         {mockStockData.map((e)=>{
           const isactive = presenteddata.symbol === e.symbol;
               const ispositveValue  = Number(e.change) > 0;
           return (<div onClick={handeldata} id={e.symbol} className={`flex justify-between p-2.5 m-4 text-white ${isactive?"bg-blue-600":"bg-gray-600"}`}>
            <p>{e.symbol}<br></br>{e.name}</p>
            <p className={`${ispositveValue?"text-green-500":"text-red-600"}`}>{e.price} <br/> {e.change}</p>
            </div>)
        })}
            </div>
            <div className="bg-slate-800 border-2  m-3 p-5"><StockDataTable/></div>
        </div>
        <div className=" sm:grid grid-cols-[30%_70%] mt-3 pl-1.5 pr-1.5">
            <div className="   m-3"></div>
            <div className="bg-slate-800 border-2  m-3 p-5"><StockChart/></div>
        </div>
       
        </>
    )
}
export default Dashboard;