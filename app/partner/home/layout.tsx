'use client'
import Footer from "@/app/ui/dashboard/Footer";
import Header from "@/app/ui/dashboard/Header";
import SideNav from "@/app/ui/dashboard/SideNav";
import { CurrencyDollarIcon, HomeIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const PARTNER_NAV_ITEMS = [
    {
        title: 'Dashboard',
        icon: <HomeIcon className="h-6 w-6"/>,
        path: '/partner/home/dashboard'
    },
    {
        title: 'Earnings',
        icon: <CurrencyDollarIcon className="h-6 w-6"/>,
        path: '/partner/home/earnings/'
    },
    {
        title: 'Previous Orders',
        icon: <ShoppingBagIcon className="h-6 w-6"/>,
        path: '/partner/home/order/list'
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
                    navItems ={PARTNER_NAV_ITEMS}/>
                <div className="flex flex-col flex-1 overflow-hidden">
                    <Header handleSidebar={handleSidebarToggle} userType={'partner'} />
                    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                        <div className="container px-6 py-8 mx-auto">
                            {children}
                        </div>
                    </main>
            <Footer/>
                </div>
            </div>
        </div>
    </>
}