'use client'
import { ClipboardDocumentCheckIcon, CurrencyDollarIcon, ShoppingBagIcon, UserPlusIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'

function Dashboard() {
  const [metrics, setMetrics] = useState({
    orders:0,
    customer:0,
    partner:0
  });
  return (
    <>
      <h3 className="text-3xl font-medium text-gray-700">Dashboard</h3>
      <div className="mt-4">
        <div className="flex flex-wrap -mx-6">
          <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
            <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
              <div className="p-3 bg-fuchsia-600 bg-opacity-75 rounded-full">
              <ShoppingBagIcon className="w-8 h-8 text-white" />
              </div>

              <div className="mx-5">
                <h4 className="text-2xl font-semibold text-gray-700">{metrics.customer}</h4>
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
                <h4 className="text-2xl font-semibold text-gray-700">{metrics.partner}</h4>
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
                <h4 className="text-2xl font-semibold text-gray-700">{metrics.orders}</h4>
                <div className="text-gray-500">Orders Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard