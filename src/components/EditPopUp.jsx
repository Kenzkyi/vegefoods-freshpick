import React from 'react'
import "../styles/editPopUp.css"

const EditPopUp = ({isopen, onClose, children}) => {
    if(!isopen) return null;
    return (
      <div className='EditPopUp-overlay'>
          <div className='EditPopUp-content'>
              <div className='cancel-div-top'>
                 <h1> Update Profile</h1>
                  <button onClick={onClose} className='my-edit-popup-btn'>X</button>
              </div>
              {children}
          </div>
      </div>
    )
}

export default EditPopUp