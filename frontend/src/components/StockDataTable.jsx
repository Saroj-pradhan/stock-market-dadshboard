import { ContextApp } from "../context/ContextApp"
import { useContext } from "react"
function StockDataTable() {
    
 const [data,setdata ,presenteddata] = useContext(ContextApp);
 const ispositveValue  = Number(presenteddata.change) > 0;
  return (

 <>
  <div className="flex justify-between text-white">
           <div>
              <p className="text-2xl">{presenteddata.name}</p>
               <p className="text-xl text-gray-500">{presenteddata.symbol}</p>
           </div>
           <div>
           <p className="text-2xl">₹ {presenteddata.price}</p>
            <p className={`text-xl ${ispositveValue?"text-green-500":"text-red-600"}`}>{presenteddata.change} ({presenteddata.changePercent}%)</p>
           </div>
      
    </div>
    <div className="sm:grid grid-cols-4 sm:gap-3 p-2 ">
      <div className="m-1.5 sm:m-0 h-16 rounded bg-slate-600 text-gray-400 p-1.5"> <p>Market Cap</p>    <p className="text-white">{presenteddata.marketCap}</p></div>
      <div className="m-1.5 sm:m-0 h-16 rounded bg-slate-600 text-gray-400 p-1.5"> <p>P/E Ratio</p>     <p className="text-white">{presenteddata.pe}</p></div>
      <div className="m-1.5 sm:m-0 h-16 rounded bg-slate-600 text-gray-400 p-1.5"> <p>volume</p>        <p className="text-white">{presenteddata.volume}</p></div>
      <div className="m-1.5 sm:m-0 h-16 rounded bg-slate-600 text-gray-400 p-1.5"> <p>Average Ratio</p> <p className="text-white">{presenteddata.avgVolume}</p></div>
    </div>
    <p className="text-xl text-white">Technical Indecator</p>
    <div className="sm:grid grid-cols-3 p-2 gap-2">
      <div className="m-1.5 sm:m-0 h-16 rounded bg-slate-600 text-gray-400 p-1.5"> <p>52W High</p>  <p className="text-green-500">{presenteddata.weekHigh52}</p></div>
      <div className="m-1.5 sm:m-0 h-16 rounded bg-slate-600 text-gray-400 p-1.5"> <p>52W Low</p>  <p className="text-red-500">{presenteddata.weekLow52}</p></div>
      <div className="m-1.5 sm:m-0 h-16 rounded bg-slate-600 text-gray-400 p-1.5"> <p>volume</p>  <p className="text-orange-400">{presenteddata.volume}</p></div>
      <div className="m-1.5 sm:m-0 h-16 rounded bg-slate-600 text-gray-400 p-1.5"> <p>pe ratio</p>  <p className="text-blue-600">{presenteddata.pe}</p></div>
      <div className="m-1.5 sm:m-0 h-16 rounded bg-slate-600 text-gray-400 p-1.5"> <p>change</p>  <p className={`${ispositveValue?"text-green-500":"text-red-600"}`}>{presenteddata.change}</p></div>
      <div className="m-1.5 sm:m-0 h-16 rounded bg-slate-600 text-gray-400 p-1.5"> <p>Change in %</p>  <p className={`${ispositveValue?"text-green-500":"text-red-600"}`}>{presenteddata.pe}</p></div>
    </div>
    </>  
  )
}

export default StockDataTable