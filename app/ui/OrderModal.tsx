'use client';
import axios from "axios";
import React, { useEffect, useImperativeHandle, useRef } from "react";
import { useForm } from "react-hook-form";
export interface OrderModalRef {
    open(): void;
}

interface OrderModalProps {
    forwardedRef: React.Ref<OrderModalRef>;
    lstPartner: any,
    selectedOrderId: string | null,
    updateOrderListFn : any
}

const OrderModal: React.FC<OrderModalProps> = ({ forwardedRef, lstPartner, selectedOrderId, updateOrderListFn }) => {
    const dialog = useRef<HTMLDialogElement>(null);
    const { register, handleSubmit, reset } = useForm();
    useImperativeHandle(forwardedRef, () => ({
        open: () => {
            if (dialog.current) {
                dialog.current.showModal();
            }
        },
        close: () => {
            if (dialog.current) {
                dialog.current.close()
            }
        }
    }));
    async function handleAssignPartner(data:any){
        const body = {
            partnerId : data.partnerId,
            orderId: selectedOrderId
        }
        const response = await axios.post('/api/admin/order/assignPartner', body)
        updateOrderListFn()
        dialog.current?.close()
    }
    function handleClose(){
        dialog.current?.close()
    }

    return <dialog ref={dialog} className="border-none rounded-lg p-2 bg-white w-full md:w-1/3 backdrop:bg-black backdrop:opacity-50">
        <div className="">
            <h2 className="text-2xl uppercase mb-1 border-b-2">select Partner</h2>
            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                    Partner
                </label>
                <div className="mt-2 w-full">
                    <select className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" {...register('partnerId', { required: true })}>
                        <option disabled>Select a partner</option>
                        {lstPartner.map((item: any) => <option key={item._id} value={item._id}>{item.name}</option>)}
                    </select>
                </div>
            </div>
            <form className="justify-end flex gap-2" onSubmit={handleSubmit(handleAssignPartner)}>
                <button onClick={handleClose} className="mt-4 px-4 py-2 rounded-md bg-red-500 text-white text-md cursor-pointer" type="button">Cancel</button>
                <button className="mt-4 px-4 py-2 rounded-md bg-blue-500 text-white text-md cursor-pointer">Save</button>
            </form>
        </div>
    </dialog>;
};

export default React.forwardRef((props: OrderModalProps, ref) => (
    <OrderModal {...props} forwardedRef={ref as React.Ref<OrderModalRef>} />
));