
function Nav() {
  return (
    <div className='flex bg-gray-900 pl-3 pr-3 pt-2  pb-2  justify-between items-center text-white '>
    <div className="flex">
        <div>
            <img  src="../src\assets\images\financial-profit.png" className="mr-3" width={50} height={50} alt="" srcset="" />
        </div>
        <div>
       <h1 className="text-2xl">StockMarket Dashboard</h1> 
       <p className="text-m">Real-time Indian Stock Market Analysis</p>
       </div>
    </div>
    <p className="text-lg">NSE/BSE</p>
    </div>
  )
}

export default Nav