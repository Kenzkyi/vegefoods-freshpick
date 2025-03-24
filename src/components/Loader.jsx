import React from 'react'
import { ScaleLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div style={{height:'90vh',width:'100%',display:'flex',alignItems:'center',justifyContent:'center',position:'fixed',background:'white',zIndex:20}}>
      <ScaleLoader />
    </div>
  )
}

export default Loader
