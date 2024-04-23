'use client';

import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
    const router = useRouter()
    function handleLogin(e:any){
        e.preventDefault()
        router.push('/admin/home')
    }
    return <>
        <div className="w-full min-h-screen bg-gray-50 flex flex-col justify-center items-center pt-6 sm:pt-0">
            <div className="w-full sm:max-w-md p-5 mx-auto">
                <h2 className="mb-12 text-center text-4xl font-extrabold">Welcome, Admin!</h2>
                <form onSubmit={handleLogin} method="post">
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="text"
                            name="email"
                            className="py-2 px-3 border border-gray-300 focus:border-sky-300 focus:outline-none focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            className="py-2 px-3 border border-gray-300 focus:border-sky-300 focus:outline-none focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                        />
                    </div>
                    <div className="mt-6">
                        <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-sky-700 active:bg-sky-700 focus:outline-none focus:border-sky-700 focus:ring focus:ring-sky-200 disabled:opacity-25 transition">
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
}