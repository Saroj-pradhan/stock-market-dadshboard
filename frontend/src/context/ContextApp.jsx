import { createContext, useState } from "react";
export const ContextApp = createContext();
import { mockStockData } from "../data/mockstocksData";

export const  StockContext = ({children})=> {
    const [data,setdata] = useState(mockStockData);
    const [presenteddata,setpresenteddata] = useState(mockStockData[0]);
  return (
    <ContextApp.Provider value={[data,setdata ,presenteddata,setpresenteddata]}>
        {children}
   </ContextApp.Provider>
  )
}


