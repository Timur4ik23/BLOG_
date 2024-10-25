'use client'

import PasswordInput from '../../components/PasswordInput';
import Link from 'next/link'
import validationSchema from '../../validationSchema/validationSchema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react'
import Input from '../../components/Input';
import { signUpFormStyle } from '../../styles/tailwindClasses';
import {useMutation } from '@tanstack/react-query'
import { registerUser } from '../../http/http';




const SignUp = ()=>{

    const {mutate, isPending, isError, error} = useMutation({
        mutationFn: registerUser,
        onSuccess: (data)=>{
            console.log(data);
        },
        onError: (error) => {
            console.error("Error:", error);  // If there's an error, this logs it
        }
    });

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(validationSchema),
        mode: 'onBlur'
    });

    const [isShow, setIsShow] = useState<boolean>(false)
    const [isShowRepeat, setIsShowRepeat] = useState<boolean>(false)
    
    function handleShowPassword():void{
        setIsShow(prev=>!prev)
    }
    function handleShowPasswordRepeat():void{
        setIsShowRepeat(prev=>!prev)
    }

    const onSubmit = async (data) => {
        mutate(data);
        // console.log('Form data>>>', data);
    };

    // const handleCheck = async ()=>{
    //     try {
    //         const res = await fetch('/api/signUp'); // Call the API endpoint to check DB connection
    //         if (!res.ok) {
    //             const errorData = await res.json(); // Parse the error response
    //             throw new Error(errorData.error || 'Connection test failed'); // Throw an error if not OK
    //         }
    //         // const result = await res.json(); // Parse the success response
    //         console.log(res); // Log the success message
    //         // alert(result.message); // Alert the user of the success
    //     } catch (error) {
    //         console.error("Error during connection check:", error); // Log the error
    //         alert("Error during connection check: " + error.message); // Alert the user of the error
    //     }
        
    // }

    return(
        // <form onSubmit={handleSubmit(onSubmit)} noValidate className={signUpFormStyle}>
    
        //     <h1>SIGN UP</h1>

        //     <div className='relative'>
        //             <Input toRegister={'firstName'} registerFunction={register} errors={errors}>Name(optional)</Input>
        //             <Input toRegister={'lastName'} registerFunction={register} errors={errors}>Surname(optional)</Input>
        //             <Input toRegister={'userName'} registerFunction={register} errors={errors}>Username</Input>
        //             <Input toRegister={'email'} registerFunction={register} errors={errors}>Email</Input>


        //             <Link href="/forgotPassword" className='text-xs absolute bottom--11 right-0'>Forgot password?</Link>
        //     </div>

        //     <PasswordInput
        //           toRegister={"password"}
        //           isShowType={isShow}
        //           handleShow={handleShowPassword}
        //           registerFunction={register}
        //           errors={errors}
        //     >Password</PasswordInput> 

        //     <PasswordInput
        //           toRegister={"repeatPassword"}
        //           isShowType={isShowRepeat}
        //           handleShow={handleShowPasswordRepeat}
        //           registerFunction={register}
        //           errors={errors}>
        //         Repeat password
        //     </PasswordInput> 


        //     <div className='mt-11'>
        //         <button className='border' disabled={isPending}>{!isPending? "SIGN UP": "LOADING..."}</button>
        //         {/* <button className='border' >sign up</button> */}
        //         <br />
        //         <button className='border'>Sign in with Google</button>
        //     </div>

        //     <div className='flex mt-14'>
        //         <p className='text-xs'>Don`t have an account?</p>
        //         <Link href="/signUp" className='text-xs'><span className='underline decoration-sky-500'>Register</span></Link>
        //     </div>

            
        // </form>
        // <button onClick={handleCheck}>CLICK</button>
        <h1>hello</h1>
    )
}

export default SignUp