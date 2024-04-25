'use client'
import Footer from "@/app/ui/dashboard/Footer";
import Header from "@/app/ui/dashboard/Header";
import SideNav from "@/app/ui/dashboard/SideNav";
import { HomeIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export const CUSTOMER_NAV_ITEMS = [
    {
        title: 'Dashboard',
        icon: <HomeIcon className="h-6 w-6"/>,
        path: '/admin/home/dashboard'
    },
    // {
    //     title: 'Customers',
    //     icon: <UserGroupIcon className="h-6 w-6"/>,
    //     path: '/admin/home/customer/list'
    // },
    // {
    //     title: 'Partners',
    //     icon: <UserPlusIcon className="h-6 w-6"/>,
    //     path: '/admin/home/partner/list'
    // },
    {
        title: 'Previous Orders',
        icon: <ShoppingBagIcon className="h-6 w-6"/>,
        path: '/admin/home/order/list'
    },
]

export default function Layout( {children}: {children: React.ReactNode}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    function handleSidebarToggle(params?: boolean) {
        if (params) {
            setSidebarOpen(params);
            return
        }
        setSidebarOpen((prevState) => !prevState)
    }
    return <>
        <div>
            <div className="flex h-screen bg-gray-200">
                <SideNav sidebarOpen={sidebarOpen}
                    handleSidebar={setSidebarOpen} 
                    navItems ={CUSTOMER_NAV_ITEMS}/>
                <div className="flex flex-col flex-1 overflow-hidden">
                    <Header handleSidebar={handleSidebarToggle} userType={'customer'} />
                    {children}
            <Footer/>
                </div>
            </div>
        </div>
    </>
}