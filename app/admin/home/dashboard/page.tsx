import { ArrowUpOnSquareStackIcon, PaperAirplaneIcon, ShoppingBagIcon, UserPlusIcon } from '@heroicons/react/24/outline'
import React from 'react'

function page() {
  return (
    <>
      <h3 className="text-3xl font-medium text-gray-700">Dashboard</h3>
      <div className="mt-4">
        <div className="flex flex-wrap -mx-6">
          <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
            <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
              <div className="p-3 bg-fuchsia-600 bg-opacity-75 rounded-full">
                <svg className="w-8 h-8 text-white" viewBox="0 0 28 30" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z"
                    fill="currentColor"></path>
                  <path
                    d="M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z"
                    fill="currentColor"></path>
                  <path
                    d="M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z"
                    fill="currentColor"></path>
                  <path
                    d="M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z"
                    fill="currentColor"></path>
                  <path
                    d="M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z"
                    fill="currentColor"></path>
                  <path
                    d="M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z"
                    fill="currentColor"></path>
                </svg>
              </div>

              <div className="mx-5">
                <h4 className="text-2xl font-semibold text-gray-700">0</h4>
                <div className="text-gray-500">Total Customers</div>
              </div>
            </div>
          </div>

          <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
            <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
              <div className="p-3 bg-orange-600 bg-opacity-75 rounded-full">
                <UserPlusIcon className='w-8 h-8 text-white' />

              </div>

              <div className="mx-5">
                <h4 className="text-2xl font-semibold text-gray-700">0</h4>
                <div className="text-gray-500">Total Partners</div>
              </div>
            </div>
          </div>

          <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
            <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
              <div className="p-3 bg-pink-600 bg-opacity-75 rounded-full">
                <ShoppingBagIcon className="w-8 h-8 text-white" />
              </div>

              <div className="mx-5">
                <h4 className="text-2xl font-semibold text-gray-700">0</h4>
                <div className="text-gray-500">Total Orders</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page