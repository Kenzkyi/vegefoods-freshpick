import React, { useEffect, useState } from 'react'
import "../styles/profile.css"
import { RiLogoutBoxFill } from "react-icons/ri";
import {useNavigate} from 'react-router-dom'
import { TbCloudUpload } from "react-icons/tb";
import { BsFillCameraFill } from "react-icons/bs";
import EditPopUp from '../components/EditPopUp';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { removeUserInfo } from '../global/slice';

const Profile = () => {

  const navigate = useNavigate()

  const userId = useSelector((state)=>state.userId)

  const dispatch = useDispatch()

  const [imageValue, setImageValue] = useState( localStorage.getItem('profileImage') || null)
  const [isPopUpOpend, setIsPopupOpen] = useState(false)
  const [username, setUsername] = useState(localStorage.getItem('username') || 'guest_user123');
  const [location, setLocation] = useState(localStorage.getItem('location') || 'Unknown Location');
  

  const [editUserName, setEditUserName] = useState(username);
  const [editLocation, setEditLocation] = useState(location);

  useEffect(()=> {
    const savedUsername = localStorage.getItem('username')
    const savedLocation = localStorage.getItem('location')
    const savedImage = localStorage.getItem('profileImage')

    if (savedUsername) setUsername(savedUsername);
    if (savedLocation) setLocation(savedLocation);
    if (savedImage) setImageValue(savedImage);
  }, [])


  const openEditPopUp = () => {
    setEditUserName(username);
    setEditLocation(location);
    setIsPopupOpen(true);
  }

  const saveChanges = () => {
     setUsername(editUserName);
     setLocation(editLocation);

     localStorage.setItem('username', editUserName);
     localStorage.setItem('location', editLocation);
     setIsPopupOpen(false);
  }


    const getImageUrl = (e) => {
      const file = e.target.files[0];
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const persistimageurl = reader.result;
            setImageValue(persistimageurl);
            localStorage.setItem("profileImage", persistimageurl);
        };
        reader.readAsDataURL(file)
      } else {
        toast.error("Please upload a valid image file.")
      }
     
    }

    const baseUrl = 'https://vege-food.onrender.com/api/v1/'

    const [data, setData] = useState({})

    const getOneUser = async() =>{
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))
        try {
           const res = await axios.get(`${baseUrl}getOneUser/${userId}`)
           setData(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getOneUser()
    }, [])

  return (
    <div className='Profile'>

         <EditPopUp isopen={isPopUpOpend} onClose={()=>setIsPopupOpen(false)} >

<div className='popup-div-top'>
    <div className='edit-image-div'>
        <img src={imageValue} alt="" />
                    <input onChange={getImageUrl} type="file" id='l' hidden className='my-file-input'/>
            <label htmlFor="l" className='mylabel2' ><BsFillCameraFill style={{fontSize: "40px", fontWeight: "600", cursor: "pointer", color: "green"}} /></label>
    </div>
</div>
<div className='popup-div-btm'>
    <div className='user-details-edit-wrap'>
        <div className='username-div-edit'>
            <input onChange={(e)=>setEditUserName(e.target.value)} value={editUserName} type="text" className='my-edit-input' placeholder='Username' />
        </div>
        <div className='location-div-edit'>
            <input onChange={(e)=>setEditLocation(e.target.value)} value={editLocation} type="text" className='my-edit-input'placeholder='Location' />
        </div>
    </div>
    <div className='save-cahnage-cancel-btn'>
        <div className='save-cahnage-cancel-btn-wrap'>
            <button onClick={()=>setIsPopupOpen(false)} className='my-edit-popup-active-btn-cancel'>Cancel</button>
            <button onClick={saveChanges} className='my-edit-popup-active-btn-save-changes'>Save Changes</button>
        </div>
    </div>
</div>

</EditPopUp>

        <div className='Profile-wrap'>
            <div className='Profile-wrap-up-div'>
                <div className='image-div'>
                <button onClick={()=>{navigate("/"),dispatch(removeUserInfo())}} className='logout-btn'><RiLogoutBoxFill/>Logout</button>
                    <div className='image-div-main'>
                    {
                            imageValue ? (
                                <img src={imageValue} alt="" />
                            ) : (
                                <>
                                <input onChange={getImageUrl} type="file" id='l' hidden className='my-file-input'/>
                        <label htmlFor="l" className='mylabel' ><TbCloudUpload style={{fontSize: "75px", fontWeight: "600", cursor: "pointer"}} /></label>
                                </>
                            )
                        }
                    </div>
                </div>
                <div className='any-choice-div'>
                <div className='bird-div'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIYUeh_jPiNdJAV8w-eAlcgjcYxstpo8AHOQ&s" alt="" />
                    </div>
                    <div className='Account-and-payment'>
                        <button className='payment-btn'>Account & Payments</button>
                    </div>
                </div>
            </div>
            <div className='Profile-wrap-down-div'>
                <div className='Name-div-wrap'>
                    <div className='name-div-top'>{data.fullName}</div>
                    <div className='name-div-btm'>
                        <div className='edit-profile'>
                            <button onClick={openEditPopUp} className='myprofilebtn'>Edit Profile</button>
                        </div>
                        <div className='settings'>
                            <button className='myprofilebtn2'>Settings</button>
                        </div>
                    </div>
                </div>
                <div className='User-details-div'>
                    <div className='requirement-div1'>
                        <p>Username :</p>
                        <p>Email:</p>
                        
                    </div>
                    <div className='requirement-div2'>
                        <p>{data.username}</p>
                        <p>{data.email}</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Profile
