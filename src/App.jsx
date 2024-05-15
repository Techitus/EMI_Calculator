import { useState } from "react"
import BasicPie from "./piechart"


const App = () => {
  const [amount,setAmount] = useState()
  const [interest, setInterest] = useState()
  const [loan,setLoan] = useState()
  return (
  <>
  <div className="wrapper bg-green-400 h-screen w-screen absolute">
    <h1 className="text-4xl  mt-10 text-white text-center">EMI Calculator</h1>
    <div className="container item-center justify-between flex p-20  ">
      <div className="bg-white w-[28rem] item-center justify-between block ml-72 p-5 rounded-lg">
      <div className="rangeSlide  w-96 ml-4 p-4 flex ">
        <div className="">
        <label htmlFor="medium-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Loan Amount</label>
<input id="medium-range" min={0.0} max={10000000.0} type="range" value={amount} onChange={(e)=>setAmount(e.target.value)}className="w-full h-2 mb-6 rounded-lg accent-green-600  cursor-pointer "/>
        </div>
      
<div className="">
<input className="w-32 mt-5 ml-3 bg-gray-300" type="text" name="" id="" value={amount} placeholder="Rs."  />
</div>
      </div>
      <div className="rangeSlide  w-96 ml-4 p-4 flex ">
        <div className="">
        <label htmlFor="medium-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Interest Rate</label>
        <input id="medium-range" min={1.0} max={20.0} value={interest} onChange={(e)=>setInterest(e.target.value)} type="range"  className="w-full h-2 mb-6 rounded-lg accent-green-600  cursor-pointer "/>
        </div>
      
<div className="">
<input className="w-32 mt-5 ml-3 bg-gray-300" type="text" name="" id="" placeholder="p.a" value={interest}  />
</div>
      </div>
      <div className="rangeSlide  w-96 ml-4 p-4 flex ">
        <div className="">
        <label htmlFor="medium-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Loan Term</label>
        <input id="medium-range" min={1} max={20}  type="range" value={loan} onChange={(e)=>setLoan(e.target.value)} className="w-full h-2 mb-6 rounded-lg accent-green-600  cursor-pointer "/>
        </div>
      
<div className="">
<input className="w-32 mt-5 ml-3 bg-gray-300" type="text" name="" id="" placeholder="years"  value={loan} />
</div>
      </div>
      </div>
      
      <div className="piechart mt-2">
        <BasicPie/>
      </div>
    </div>
    <div className="flex justify-center items-center font-mono">
    <div className="summary bg-[#f2f2f2] w-[28rem]  block p-5 rounded-lg">
      <h1 className="text-2xl text-blue-600 font-bold">Monthly EMI: <span className="text-xl text-green-600">RS.2000000</span></h1> <br />
      <h1 className="text-md ml-10">Total Principal: <span className="text-xl text-blue-600">RS.2000000</span></h1> <br />
      <h1 className="text-md ml-10"> Interest Payable: <span className="text-xl text-blue-600">RS.2000000</span></h1> <br />
      <h1 className="text-md">Total Amount Payable: <span className="text-xl text-blue-600">RS.2000000</span></h1>



      </div>
    </div>
   

    </div>
  </>
  )
}

export default App