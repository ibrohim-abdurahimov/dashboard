import React from 'react'
import { useStore } from '../../../zustand'

const Billing = () => {
    const count =  useStore(state => state.count)
  return (
    <div>
        <p>{count}</p>
    </div>
  )
}

export default Billing