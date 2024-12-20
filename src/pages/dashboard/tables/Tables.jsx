import React from 'react'
import { useStore } from '../../../zustand'

const Tables = () => {
    const inc = useStore((state) => state.inc)
  return (
    <div>
        <button onClick={()=>inc(1)} className='bg-slate-600 py-3 px-10 text-white rounded-xl'>inc</button>
        <button onClick={()=>inc(10)} className='bg-slate-600 py-3 px-10 text-white rounded-xl'>10</button>
        <button onClick={()=>inc(100)} className='bg-slate-600 py-3 px-10 text-white rounded-xl'>100</button>
    </div>
  )
}

export default Tables