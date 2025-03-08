import React, { useState } from 'react'
import Header from '../components/Header';

const Campaign = () => {
    const [no, setno] = useState("");
    const submitHandler = (e) => {
    e.preventDefault();
    alert(`✅ Details Submitted Successfully!`);
    setno("");
    window.open("https://join.suncrypto.in/11048/refer", "_blank", "noopener,noreferrer");
    }

  return (
    <div className='flex items-start text-white justify-center w-full h-[900px] bg-gradient-to-b from-slate-950 via-slate-700 to-slate-800'>
        <div>
            <Header/>
        </div>
        <div className='flex flex-col items-center border-double border-gray-500 border-[3px] mx-2 mt-24 w-full max-w-[900px] h-[750px] bg-slate-800 shadow-sky-400  shadow-inner  rounded-xl'>
            <div className='mt-8 bg-slate-900 px-4 py-2 text-2xl text-white rounded-2xl shadow-sm shadow-current '><h1>Suncrypto</h1></div>
            <div className='flex flex-col items-center border-double border-gray-500 border-[3px] mx-2 my-6 w-[90%] max-w-[800px] h-[30%] bg-slate-800 shadow-sky-400  shadow-inner  rounded-xl'>
                <div className='flex flex-col items-center justify-center space-y-2 mt-5 mx-3 text-xl text-cyan-300'>
                <h3>✅ Complete Full Process And Earn Money</h3>
                <h4>🛑 Must Enter OR Check Refer Code(11048)</h4>
                <h3>✅ Instant Earn Money</h3></div>
            </div>
            <div className='text-white mt-8 mx-2 w-full h-auto flex items-center justify-center'>
                <form onSubmit={(e)=>submitHandler(e)} className='mx-3 flex flex-col'>
                    <h3 className='text-xl'>Enter Your No.</h3>
                    <div className='relative'>
                    <i className="ri-money-rupee-circle-fill absolute top-[13px] left-2 text-5xl text-amber-400"></i>
                    <input onChange={(e)=>setno(e.target.value)} className='px-16 mt-2 py-3 w-full rounded-xl border-[2px] border-slate-900 shadow shadow-orange-300 text-black text-2xl font-mono ' type="text" placeholder='Enter Your No.' required />
                    </div>
                    <button className='px-10 mt-6 py-2 bg-emerald-500 rounded-md hover:bg-emerald-700 hover:cursor-pointer hover:shadow hover:shadow-teal-300 hover:scale-[0.90] '>Submit</button>
                </form>
            </div>
            <div className='flex flex-col items-center border-double border-gray-500 border-[3px] mx-2 my-6 w-[90%] max-w-[800px] h-[30%] bg-slate-800 shadow-sky-400  shadow-inner  rounded-xl'>
                <div className='mt-5 text-xl space-y-3 flex flex-col items-center justify-center'>
                <h3 className='text-stone-100'>Reward:<span className='text-cyan-300'>₹100</span></h3>
                <h4 className='text-stone-100'>Payment Type:<span className='text-cyan-300'>Suncrypto App</span></h4>
                <h5 className='text-cyan-400'>Payment Time:KYC Complete</h5></div>
                <hr className='w-[93%] mt-4 h-1 border-[2px] border-slate-700' />
                <a className='text-blue-400 text-xl mt-1 text-center underline font-semibold hover:text-blue-700' href="https://t.me/earningedge123">Join Telegram</a>
            </div>
        </div>
    </div>
  )
}

export default Campaign