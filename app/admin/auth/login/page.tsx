'use client';

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form"
type LoginForm = {
    email: string
    password: string
}

export default function AdminLoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>({defaultValues:{
        email: 'admin@waswise.com',
        password: 'admin12'
    }})

    async function handleLogin(data:any) {
        try {
            setIsLoading(true);
            setError(null)
            const response = await axios.post('/api/admin/login', data);
            setIsLoading(false);
            router.replace('/admin/home/dashboard');
        } catch (error:any) {
            setError(error.response.data.message || "Something went wrong")
            setIsLoading(false);
            console.log(error)
        }
    }
    return <>
        <div className="w-full min-h-screen bg-gray-50 flex flex-col justify-center items-center pt-6 sm:pt-0">
            <div className="w-full sm:max-w-md p-5 mx-auto">
                <h2 className="mb-12 text-center text-4xl font-extrabold">Welcome, Admin!</h2>
                <form onSubmit={handleSubmit(handleLogin)} method="post">
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="email">
                            Email
                        </label>
                        <input type="email" {...register("email", { required: true })} className="py-2 px-3 border border-gray-300 focus:border-sky-300 focus:outline-none focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"/>
                        {errors.email && <p className="text-red-500 text-xs mt-1">Email is required</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="password">
                            Password
                        </label>
                        <input type="password" {...register("password",{ required: true })} className="py-2 px-3 border border-gray-300 focus:border-sky-300 focus:outline-none focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"/>
                        {errors.password && <p className="text-red-500 text-xs mt-1">Password is required</p>}
                    </div>
                    <div className="mt-6">
                        <button disabled={isLoading} type="submit" className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-sky-700 active:bg-sky-700 focus:outline-none focus:border-sky-700 focus:ring focus:ring-sky-200 disabled:opacity-25 transition">
                            {isLoading ? 'Loading...' : 'Sign In'}
                        </button>
                    </div>
                    <div className="mt-6">
                        <p className="text-red-600 text-center">{error}</p>
                    </div>
                </form>
            </div>
        </div>
    </>
}