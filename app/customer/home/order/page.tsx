'use client';

import axios from "axios";
import { useEffect, useState } from "react";

export default function Page() {
const [lstOrder, setLstOrder] = useState([]);
useEffect(()=>{
    axios.get('/api/customer/order/list').then(res=>{
        const data = res.data.data
        console.log(data);
        setLstOrder(data);
    }).catch(err=>{})
},[])

    return (<div className="grid md:grid-cols-3 gap-4 grid-cols-1">
        {lstOrder.map((order:any) => <div key={order._id} className="rounded-lg bg-gray-50 px-16 py-14">
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
            <p className="md:w-[230px] w-full text-center font-normal text-gray-600">
            Quantity : {order.quantity}
            </p>
            <p className="md:w-[230px] w-full text-center font-bold text-gray-600">
            Status : {order.status}
            </p>
            <span className="mx-auto mt-10 block rounded-xl border-4 border-transparent bg-orange-400 px-6 py-3 text-center text-base font-medium text-orange-100 outline-8 hover:outline hover:duration-300">
                {order.totalPrice}
            </span>
        </div>
        )}
    </div>
    )
}