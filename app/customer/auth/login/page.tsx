'use client'
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
type LoginForm = {
    email: string
    password: string
}

export default function CustomerLoginPage() {
    const {handleSubmit, register, formState:{errors}} = useForm<LoginForm>()
    const router = useRouter();
    async function handleLogin(data:any) {
        try {
            const response = await axios.post('/api/customer/login', data);
            router.replace('/customer/home/dashboard');
        } catch (error:any) {
            console.log(error)
        }
    }
    return (<>
        <div className="min-h-screen bg-sky-400 flex justify-center items-center overflow-hidden relative">
            <div className="absolute w-60 h-60 rounded-xl bg-sky-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block" />
            <div className="absolute w-48 h-48 rounded-xl bg-sky-300 -bottom-6 -right-10 transform rotate-12 hidden md:block" />
            <form onSubmit={handleSubmit(handleLogin)} className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
                <div>
                    <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
                        Login now!
                    </h1>
                    <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
                        Use your email and password to login!
                    </p>
                </div>
                <div className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email Address"
                        {...register("email", { required: true })}
                        className="block text-sm py-3 px-4 rounded-lg w-full border outline-sky-500"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">Email is required</p>}
                    <input
                        type="password"
                        placeholder="Password"
                        {...register("password", { required: true })}
                        className="block text-sm py-3 px-4 rounded-lg w-full border outline-sky-500"
                    />
                    {errors.password && <p className="text-red-500 text-xs mt-1">Password is required</p>}
                </div>
                <div className="text-center mt-6">
                    <button className="w-full py-2 text-xl text-white bg-sky-400 rounded-lg hover:bg-sky-500 transition-all">
                        Login
                    </button>
                    <p className="mt-4 text-sm">
                        Don&apos;t Have An Account?{" "}
                        <Link href='/customer/auth/register' className="underline cursor-pointer"> Sign up</Link>
                    </p>
                </div>
            </form>
            <div className="w-40 h-40 absolute bg-sky-300 rounded-full top-0 right-12 hidden md:block" />
            <div className="w-20 h-40 absolute bg-sky-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block" />
        </div>
        <div className="w-full bottom-0 md:absolute bg-blue-600 shadow-xl shadow-blue-200 py-10 px-5 md:px-20 flex justify-between items-center">
            <p className=" text-white">
                {" "}
                <span className="text-2xl md:text-4xl font-medium">Are you Delivery Partner?</span> <br />{" "}
            </p>
            <Link href='/partner/auth/login' className="text-center rounded-md p-2 md:px-5 md:py-3 font-medium text-slate-700 shadow-xl  hover:bg-white duration-150  bg-yellow-400">
                Login as Partner{" "}
            </Link>
        </div>
    </>
    )

}