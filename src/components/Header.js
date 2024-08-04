import React from 'react'
import {auth} from "../utils/firebase"
import { useEffect } from 'react';
import {  signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO } from '../utils/constants';

const Header = () => {
 const navigate=useNavigate();
 
 const user = useSelector(store=> store.user)

 const dispatch = useDispatch();
  const handleSignOut=()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error")
    });
  }

  useEffect(()=>{
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
      
        const { uid,email,displayName,photoURL} = user;
       dispatch(addUser({uid: uid, email: email,displayName: displayName, photoURL:photoURL}))
     navigate("/browse")
      } else {
        dispatch(removeUser());
       navigate("/")
      }
    });

    return ()=>unsubscribe(); 
  },[]);

  return (
    <div className=' w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-48' src={LOGO} alt='logo'></img>  
    
    {user && ( <div className='flex p-4'>
      <img className='w-12 h-12 ' alt="usericon" src={user?.photoURL}></img>
     <button className='font-bold text-white m-1' onClick={handleSignOut}>Sign Out</button>
        </div>
        )}

    </div>
    
  )
}

export default Header
