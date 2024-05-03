'use client';
import OrderModal, { OrderModalRef } from "@/app/ui/OrderModal";
import { PencilIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

const statusClass: any = {
    'Pending': 'text-amber-700',
    'Picked': 'text-orange-700',
    'In Process': 'text-blue-700',
    'Completed': 'text-green-700',

}

export default function List() {
    const [lstOrder, setLstOrder] = useState([]);
    const [lstPartner, setLstPartner] = useState([])
    const [selectedOrder, setSelectedOrder] = useState(null)
    const dialog = useRef<OrderModalRef>();
    useEffect(() => {
        fetchOrderData();
        fetchPartnerData();
    }, [])
    const fetchOrderData = async () => {
        try {
            const orderResponse = await axios.get('/api/admin/order/list');
            const orderData = orderResponse.data.data;
            setLstOrder(orderData);
        } catch (error) {
            console.log(error);
        }
    };
    const fetchPartnerData = async () => {
        try {
            const partnerResponse = await axios.get('/api/admin/partner/list');
            const partnerData = partnerResponse.data.data;
            setLstPartner(partnerData);
        } catch (error) {
            console.log(error);
        }
    };
    const handleOpenModal = (id: any) => {
        if (dialog.current) {
            setSelectedOrder(id)
            dialog.current.open();
        }
    };
    return (<>
        <OrderModal ref={dialog} lstPartner={lstPartner} forwardedRef={null} selectedOrderId={selectedOrder} updateOrderListFn={fetchOrderData} />
        <h3 className="text-3xl font-medium text-gray-700">Order</h3>
        <div className="overflow-scroll md:overflow-hidden rounded-lg border border-gray-200 shadow-md my-5">
            <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                            Sr No
                        </th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                            Order No
                        </th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                            Customer
                        </th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                            Partner
                        </th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900" >Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                    {lstOrder.map((order: any, index) => <tr key={order._id} className="hover:bg-gray-50">
                        <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                            {index + 1}
                        </th>
                        <td className="px-6 py-4">
                            <div className="font-medium text-gray-700">{order._id}</div>

                        </td>
                        <td className="px-6 py-4">
                            <div className="text-gray-700">{order.customerId.name}</div>
                        </td>
                        <td className="px-6 py-4">
                            {order.partnerId ? order.partnerId.name : '-'}
                        </td>
                        <td className="px-6 py-4">
                            <div className={statusClass[order.status]}>{order.status}</div>
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex justify-start gap-4">
                                <button onClick={() => handleOpenModal(order._id)}>
                                    <PencilIcon className="h-6" />
                                </button>
                            </div>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    </>)
}