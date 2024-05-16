/* eslint-disable no-unused-vars */
import { useState } from "react"
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const App = (props) => {
  const [amount,setAmount] = useState()
  const [interest, setInterest] = useState()
  const [loan,setLoan] = useState()
  
  const calculateInterestPayable = (()=>{
    const monthlyInterestRate = interest / 12 / 100;
    const numberOfPayments = loan * 12;

    const totalRepayment = (amount * monthlyInterestRate * numberOfPayments) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    const totalInterestPayable = totalRepayment - amount;

    const yearlyInterest =Math.round( totalInterestPayable / loan);

   return parseInt(yearlyInterest)
   
     
  })
  const calculateEMI = () => {
    const monthlyInterestRate = interest / 1200
    const numberOfPayments = loan * 12
    const emi =  (amount * monthlyInterestRate * Math.pow(1 + (interest / 12 / 100), numberOfPayments)) /
      (Math.pow(1 +monthlyInterestRate, numberOfPayments) - 1);
      const calculatedEmi =Math.round(emi)
      return parseInt(calculatedEmi)
  };
  return (
  <>
  <div className="wrapper bg-green-400 h-screen w-screen absolute">
    <h1 className="text-4xl  mt-10 text-white text-center">EMI Calculator</h1>
    <div className="container item-center justify-between flex p-20  ">
      <div className="bg-white w-[28rem] item-center justify-between block ml-72 p-5 rounded-lg">
      <div className="rangeSlide  w-96 ml-4 p-4 flex ">
        <div className="">
        <label htmlFor="loan-amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Loan Amount</label>
<input id="loan-amount" defaultValue={100000} min={0.0} max={10000000.0} type="range" value={amount} onChange={(e)=>setAmount(e.target.value)}className="w-full h-2 mb-6 rounded-lg accent-green-600  cursor-pointer "/>
        </div>
      
<div className="">
<input className="w-32 mt-5 ml-3 bg-gray-300" type="text" name="" id="" value={amount} placeholder="Rs." onChange={(e)=>setAmount(e.target.value)}  />
</div>
      </div>
      <div className="rangeSlide  w-96 ml-4 p-4 flex ">
        <div className="">
        <label htmlFor="interest-rate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Interest Rate</label>
        <input id="interest-rate" defaultValue={9} min={1.0} max={20.0} value={interest} onChange={(e)=>setInterest(e.target.value)} type="range"  className="w-full h-2 mb-6 rounded-lg accent-green-600  cursor-pointer "/>
        </div>
      
<div className="">
<input className="w-32 mt-5 ml-3 bg-gray-300" type="text" name="" id="" placeholder="p.a" value={interest} onChange={(e)=>setInterest(e.target.value)} />
</div>
      </div>
      <div className="rangeSlide  w-96 ml-4 p-4 flex ">
        <div className="">
        <label htmlFor="loan-term" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Loan Term</label>
        <input id="loan-term" defaultValue={2} min={1} max={20}  type="range" value={loan} onChange={(e)=>setLoan(e.target.value)} className="w-full h-2 mb-6 rounded-lg accent-green-600  cursor-pointer "/>
        </div>
      
<div className="">
<input className="w-32 mt-5 ml-3 bg-gray-300" type="text" name="" id="" placeholder="years"  value={loan}  onChange={(e)=>setLoan(e.target.value)}/>
</div>
      </div>
      </div>
      
      <div className="piechart mt-2">

      <PieChart
      series={[
        {
          data: [
            { id: 0, value: amount, label: 'Principal ' },
            { id: 1, value: calculateInterestPayable(), label: 'Interest ' },
            
          ],
        },
      ]}
      width={500}
      height={300}
    />
      </div>
    </div>
    <div className="flex justify-center items-center font-mono">
    <div className="summary bg-[#f2f2f2] w-[28rem]  block p-5 rounded-lg">
      <h1 className="text-2xl text-blue-600 font-bold">Monthly EMI: <span className="text-xl text-green-600">RS.{calculateEMI()}</span></h1> <br />
      <h1 className="text-md ml-10">Total Principal: <span className="text-xl text-blue-600">RS.{amount}</span></h1> <br />
      <h1  className="text-md ml-10" > Interest Payable: <span  className="text-xl text-blue-600">RS.{calculateInterestPayable()}</span></h1> <br />
      <h1 className="text-md">Total Amount Payable: <span className="text-xl text-blue-600">RS.{parseInt(amount) + calculateInterestPayable()}</span></h1>



      </div>
    </div>
   

    </div>
  </>
  )
}

export default App