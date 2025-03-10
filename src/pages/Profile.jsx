import React from 'react'
import "../styles/profile.css"

const Profile = () => {
  return (
    <div className='Profile'>
        <div className='Profile-wrap'>
            <div className='Profile-wrap-up-div'>
                <div className='image-div'>
                    <div className='image-div-main'>
                        <img src="/src/assets/public/453596388_122102941406449484_3412917747762962178_n.jpg" alt="img" />
                    </div>
                </div>
                <div className='any-choice-div'>
                    <div className='Account-and-payment'>
                        <button className='payment-btn'>Account & Payments</button>
                    </div>
                </div>
            </div>
            <div className='Profile-wrap-down-div'>
                <div className='Name-div-wrap'>
                    <div className='name-div-top'>OSUJI WISDOM</div>
                    <div className='name-div-btm'>
                        <div className='edit-profile'>
                            <button className='myprofilebtn'>Edit Profile</button>
                        </div>
                        <div className='settings'>
                            <button className='myprofilebtn2'>Settings</button>
                        </div>
                    </div>
                </div>
                <div className='User-details-div'>
                    <div className='requirement-div1'>
                        <p>Username:</p>
                        <p>Location:</p>
                        <p>Phone:</p>
                        <p>Email:</p>
                        
                    </div>
                    <div className='requirement-div2'>
                        <p>wisdomosuji26</p>
                        <p>Texas, United State.</p>
                        <p>+1 123 456 096</p>
                        <p>wisdomosuji26@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile
