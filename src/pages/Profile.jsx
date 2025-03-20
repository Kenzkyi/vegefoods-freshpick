import React, { useEffect, useState } from 'react'
import "../styles/profile.css"
import {useNavigate} from 'react-router-dom'
import { TbCloudUpload } from "react-icons/tb";
import { BsFillCameraFill } from "react-icons/bs";
import EditPopUp from '../components/EditPopUp';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { removeUserInfo } from '../global/slice';
import { IoCaretBackCircleSharp } from "react-icons/io5";
import { RiLogoutBoxRFill } from "react-icons/ri";

const Profile = () => {

  const navigate = useNavigate()

  const userId = useSelector((state)=>state.userId)

  const dispatch = useDispatch()

  const [imageValue, setImageValue] = useState( localStorage.getItem('profileImage') || null)
  const [isPopUpOpend, setIsPopupOpen] = useState(false)
  const [username, setUsername] = useState(localStorage.getItem('username') || 'guest_user123');
  

  const [editUserName, setEditUserName] = useState(username);

  useEffect(()=> {
    const savedUsername = localStorage.getItem('username')
    const savedImage = localStorage.getItem('profileImage')

    if (savedUsername) setUsername(savedUsername);
    if (savedImage) setImageValue(savedImage);
  }, [])


  const openEditPopUp = () => {
    setEditUserName(username);
    setIsPopupOpen(true);
  }

  const saveChanges = () => {
     setUsername(editUserName);

     localStorage.setItem('username', editUserName);
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
        try {
           const res = await axios.get(`${baseUrl}getOneUser/${userId}`)
           setData(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const [inputData,setInputData] = useState(data?.username)

    const userUsername = async () => {
        try {
            const res = await axios.put(`${baseUrl}updateuser/${userId}`)
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        getOneUser()
    }, [])

  return (
    <div className='Profile'>

         <EditPopUp isopen={isPopUpOpend} onClose={()=>setIsPopupOpen(false)}>

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
            <input onChange={(e)=>inputData(e.target.value)} value={inputData} type="text" className='my-edit-input' placeholder='Username'/>
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
                <button onClick={()=>navigate("/")} className='Back-to-home'><IoCaretBackCircleSharp style={{fontSize: "30px"}}/><p>Go To Home</p></button>
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
                        <button onClick={()=>{navigate("/"),dispatch(removeUserInfo())}} className='payment-btn'>Logout<RiLogoutBoxRFill style={{fontSize: "30px"}}/></button>
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
                            <button className='myprofilebtn2'>Accounts & Payment</button>
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
