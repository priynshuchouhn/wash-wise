'use client';

import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';

export default function Page() {
    const [data, setData] = useState({ name: '', mobile: '', address: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        setError(null)
        axios.get('/api/customer/profile').then(res => {
            const user = res.data.data;
            setData({ name: user.name || user.userId.name, mobile: user.mobile, address: user.address });
            setIsLoading(false);
        }).catch((err) => {
            setError(err.response.data.message || 'Something went wrong')
            setIsLoading(false);
            console.log(err)
        });
    }, []);

    const { handleSubmit, register, formState: { errors }, setValue } = useForm();
    
    useEffect(() => {
        // Set form values once data is fetched
        setValue('name', data.name);
        setValue('mobile', data.mobile);
        setValue('address', data.address);
    }, [data, setValue]);
    async function handleSave(data: any) {
        try {
            setIsLoading(true);
            setError(null)
            const body ={
                address: data.address,
                mobile: data.mobile,
            }
            const response = await axios.post('/api/customer/profile/update', body);
            setIsLoading(false);
        } catch (error:any) {
            setIsLoading(false);
            setError(error.response.data.message || 'Something went wrong')
            console.log(error)
        }
    }
    return (<>
        <form onSubmit={handleSubmit(handleSave)} className="w-full">
            <div className="flex flex-col justify-center items-center">
                <div className="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3 mb-5">
                    <div className="mt-2 mb-8 w-full">
                        <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
                            General Information
                        </h4>
                        <p className="mt-2 px-2 text-base text-gray-600">
                            Complete your profile to get started
                        </p>
                        {error ? <small className="px-2 text-red-600">
                            {error}
                        </small> : null}
                        
                    </div>
                    <div className="md:grid md:grid-cols-2 gap-4 px-2 w-full">
                        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                            <p className="text-sm text-gray-600">Name</p>
                            <p className="w-full text-base font-medium text-navy-700 dark:text-white">
                            <input type="text" readOnly {...register('name', { required: true })} className="block text-sm py-3 px-4 rounded-lg w-full border outline-sky-500" />
                            </p>
                        </div>
                        <div className="relative flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                            <p className="text-sm text-gray-600">Mobile</p>
                            <p className="w-full text-base font-medium text-navy-700 dark:text-white">
                                <input type="text" {...register('mobile', { required: true })} maxLength={10} className="block text-sm py-3 px-4 rounded-lg w-full border outline-sky-500" />
                            </p>
                            {errors.mobile && <p className="text-red-500 text-xs mt-1 absolute bottom-0">Mobile is required</p>}
                        </div>
                        <div className="relative col-span-2 flex flex-col w-full justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                            <p className="text-sm text-gray-600">Address</p>
                            <p className="text-base font-medium text-navy-700 dark:text-white">
                                <textarea className="block text-sm py-3 px-4 rounded-lg w-full border outline-sky-500"  {...register('address', { required: true })} />
                            </p>
                            {errors.address && <p className="text-red-500 text-xs mt-1 bottom-0 absolute">Address is required</p>}
                        </div>
                    </div>
                </div>
                <button disabled={isLoading} className="text-center rounded-md p-2 md:px-5 md:py-2 font-medium text-white shadow-xl  hover:bg-white hover:text-blue-400 duration-150  bg-blue-400" type="submit">{isLoading ? 'Wait' :'Save'}</button>
            </div>
        </form>
    </>
    )
}