import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {SignUP,updateUserProfile} = useContext(AuthContext)
  const onSubmit = data =>{
    SignUP(data.email,data.password)
    .then(result =>{
        console.log(result.user)
        updateUserProfile(data.name)
        .then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
    })
    .catch(err =>{
        console.error(err)
    })
  };
    return (
        <div className='w-[385px] h-[556px] mx-auto my-3 p-7 shadow-lg rounded-lg'>
            <div className="text-center my-7 text-xl">
                <h1>Sign Up</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p className="">Name</p>
                <input className="input input-bordered w-full"  {...register("name",{ required: true })} required/>
                <p className="">Email</p>
                <input className="input input-bordered w-full" type='email' {...register("email",{ required: true })} required/>
                <p className="mt-3">Password</p>
                <input className="input input-bordered w-full" type='password' {...register("password", { required: true })} required/>
                {errors.email && <span>This field is required</span>}
                <input className='btn w-full mt-5' value={'Sign Up'} type="submit" />
                <p className="">New to Doctors Portal? <Link to='/login' className='text-[#19D3AE]'>Login</Link></p>
            </form>
            <div className="flex w-full items-center">
                <div className="w-full"><hr /></div>
                <div className="divider divider-horizontal">OR</div>
                <div className="w-full"><hr /></div>
            </div>
            <button className='btn-outline btn w-full '>continue with Google</button>
        </div>
    );
};

export default SignUp;