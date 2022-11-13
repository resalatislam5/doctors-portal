import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
const Login = () => {
    const {Login} = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    Login(data.email,data.password)
    .then(result =>{
        console.log(result.user)
    })
    .catch(err =>{
        console.error(err)
    })
  };
    return (
        <div className='w-[385px] h-[480px] mx-auto mb-12 p-7 shadow-lg rounded-lg'>
            <div className="text-center my-4 text-xl">
                <h1>Login</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p className="">Email</p>
                <input className="input input-bordered w-full" type='email' {...register("email",{ required: true })} />
                {errors.email && <p role="alert">{errors.email?.message}</p>}
                <p className="mt-3">Password</p>
                <input className="input input-bordered w-full" type='password' {...register("password", { required: true })} />
                {errors.password && <p role="alert">{errors.password?.message}</p>}
                <p>Forgot Password?</p>
                <input className='btn w-full mt-5' value={'Login'} type="submit" />
                <p >New to Doctors Portal? <Link to='/signup' className='text-[#19D3AE]'>Create new account</Link></p>
            </form>
            <div className="flex w-full items-center">
                <div className="w-full"><hr /></div>
                <div className="divider divider-horizontal">OR</div>
                <div className="w-full"><hr /></div>
            </div>
            <button className='btn-outline btn w-full'>continue with Google</button>
        </div>
    );
};

export default Login;