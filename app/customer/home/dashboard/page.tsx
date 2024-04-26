'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

function Page() {
  const { register } = useForm();
  const [lstServices, setLstServices] = useState([]) as any
  useEffect(()=>{
    axios.get('/api/customer/services').then(res=>{
      const data = res.data.data
      setLstServices(data);
      // console.log(data);
    }).catch(err=>{
      console.log(err);
    })
  },[])
  return (
    <div className="min-h-screen p-0 sm:p-12">
      <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
        <h1 className="text-2xl font-bold mb-8">Create Order</h1>
        <form id="form">
          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
              Service
            </label>
            <div className="mt-2">
              <select className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" {...register('service', { required: true })}>
                {lstServices.map((item:any) => <option key={item._id} value={item.name}>{item}</option>)}
               
              </select>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
              Quantity
            </label>
            <input type="number" {...register('quantity', { required: true })} className="block text-sm py-3 px-4 rounded-lg w-full border outline-sky-500" />
          </div>
          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
              Date
            </label>
            <input type="date" {...register('date', { required: true })} className="block text-sm py-3 px-4 rounded-lg w-full border outline-sky-500" />
          </div>
          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <button className="text-center rounded-md p-2 md:px-5 md:py-2 font-medium text-white shadow-xl  hover:bg-white hover:text-blue-400 duration-150  bg-blue-400" type="submit">Create Order</button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Page;