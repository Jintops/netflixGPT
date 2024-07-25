import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValideDate } from '../utils/validate';
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {

   const navigate = useNavigate();
   const dispatch=useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name= useRef(null);

  const handleButtonClick = () => {
    const message = checkValideDate(email.current.value, password.current.value)
    // console.log(email.current.value);
    // console.log(password.current.value);
    setErrorMessage(message);
    
   if(message) return;

   if(!isSignInForm){
    createUserWithEmailAndPassword(auth,email.current.value, password.current.value)
   .then((userCredential) => {
     // Signed up 
     const user = userCredential.user;
     updateProfile(user, {
      displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/157833707?v=4"
    }).then(() => {
      const { uid,email,displayName,photoURL} = auth.currentUser;
      dispatch(addUser({uid: uid, email: email,displayName: displayName, photoURL:photoURL}))
    
      navigate("/browse")
    }).catch((error) => {
     setErrorMessage(error.message);
    });
     console.log(user)
  
     // ...
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     setErrorMessage(errorCode+"-"+errorMessage)
   });

  }else{

    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    navigate("/browse")
  }) 
  
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage)
  });
  }
  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  } 
  

  return (
    <div>
      <Header />
      <div className='absolute '>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg' alt='bgimage'></img>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='absolute w-3/12 p-12 bg-black mx-auto my-36 right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl p-3'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input ref={name} type='text' placeholder='Name' className='p-4 my-4 w-full bg-gray-600 '></input>}
        <input ref={email} type='email' placeholder='email' className='p-4 my-4  w-full bg-gray-600'></input>
        <input ref={password} type='password' placeholder='Password' className='p-4 my-4  w-full bg-gray-600'></input>
        <p className='text-red-500 font-bold text-lg'>{errorMessage}</p>
        <button className='p-4 my-2 bg-red-700  w-full rounded-lg' onClick={handleButtonClick}> {isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-3 cursor-pointer' onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login;
