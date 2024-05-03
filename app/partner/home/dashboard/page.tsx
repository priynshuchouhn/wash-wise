'use client'
import { ClipboardDocumentCheckIcon, CurrencyDollarIcon, ShoppingBagIcon, UserPlusIcon } from '@heroicons/react/24/outline'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Dashboard() {
  const [metrics, setMetrics] = useState({
    completedOrders: 0,
    pendingOrders: 0,
    earnings: 0
  });
  const [lstOrder, setLstOrder] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    axios.get('/api/partner/order/list').then(res => {
      const data = res.data.data
      // console.log(data);
      setLstOrder(data);
      setIsLoading(false)
    }).catch(err => {
      console.log(err);
      setIsLoading(false)
    })
    axios.get('/api/partner/dashboard/metrics').then(res=>{
      const data = res.data.data
      setMetrics(data)
    }).catch(err=>{
      console.log(err)
    })
  }, [])
  return (
    <>
      <h3 className="text-3xl font-medium text-gray-700">Dashboard</h3>
      <div className="my-4">
        <div className="flex flex-wrap -mx-6">
          <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
            <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
              <div className="p-3 bg-fuchsia-600 bg-opacity-75 rounded-full">
                <ShoppingBagIcon className="w-8 h-8 text-white" />
              </div>

              <div className="mx-5">
                <h4 className="text-2xl font-semibold text-gray-700">{metrics.pendingOrders}</h4>
                <div className="text-gray-500">Pending Orders</div>
              </div>
            </div>
          </div>

          <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
            <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
              <div className="p-3 bg-orange-600 bg-opacity-75 rounded-full">
                <CurrencyDollarIcon className='w-8 h-8 text-white' />

              </div>

              <div className="mx-5">
                <h4 className="text-2xl font-semibold text-gray-700">{metrics.earnings}</h4>
                <div className="text-gray-500">Earnings</div>
              </div>
            </div>
          </div>

          <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
            <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
              <div className="p-3 bg-pink-600 bg-opacity-75 rounded-full">
                <ClipboardDocumentCheckIcon className='w-8 h-8 text-white' />
              </div>

              <div className="mx-5">
                <h4 className="text-2xl font-semibold text-gray-700">{metrics.completedOrders}</h4>
                <div className="text-gray-500">Orders Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className='h-2 mb-4 ' />
      {isLoading || lstOrder.length <=0 ? <div className="flex justify-center items-center"><p className="text-3xl">No orders found</p></div> : <div className="grid md:grid-cols-4 gap-4 grid-cols-1">
        {lstOrder.map((order: any) => <div key={order._id} className="rounded-lg text-center bg-gray-50 px-8 py-6">
          <div className="flex justify-center">
            <div className="rounded-full bg-green-200 p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-8 w-8 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <h3 className="my-4 text-center text-3xl font-semibold text-gray-700">
            {order.productId.name}
          </h3>
          <p className=" w-full text-center font-bold text-gray-700">
            {order.customerId.name}
          </p>
          <p className=" w-full text-center font-normal text-gray-600">
            Quantity : {order.quantity}
          </p>
          <p className="w-full text-center text-gray-600">
            Amount : &#8377;{order.totalPrice}
          </p>
          <p className="w-full text-center font-bold text-gray-600">
            Your Earnings : &#8377;{order.totalPrice * 0.3}
          </p>
          <span className="cursor-pointer mx-auto mt-10 block rounded-xl border-4 border-transparent bg-orange-400 px-6 py-3 text-center text-base font-medium text-orange-100 outline-8 hover:outline hover:duration-300">
            {order.status}
          </span>
          <small className='text-gray-400'>Click to change the status</small>
        </div>
        )}
      </div>}
    </>
  )
}

export default Dashboard