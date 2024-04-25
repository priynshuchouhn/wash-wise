'use client'
import React, { useState } from 'react'
import SideNav from '../../ui/dashboard/SideNav';
import Header from '../../ui/dashboard/Header';
import { HomeIcon, ShoppingBagIcon, UserGroupIcon, UserPlusIcon } from '@heroicons/react/24/outline';
import Footer from '@/app/ui/dashboard/Footer';

export const ADMIN_NAV_ITEMS = [
    {
        title: 'Dashboard',
        icon: <HomeIcon className="h-6 w-6" />,
        path: '/admin/home/dashboard'
    },
    {
        title: 'Customers',
        icon: <UserGroupIcon className="h-6 w-6" />,
        path: '/admin/home/customer/list'
    },
    {
        title: 'Partners',
        icon: <UserPlusIcon className="h-6 w-6" />,
        path: '/admin/home/partner/list'
    },
    {
        title: 'Orders',
        icon: <ShoppingBagIcon className="h-6 w-6" />,
        path: '/admin/home/order/list'
    },
]

export default function Layout({ children }: { children: React.ReactNode }) {
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
                    navItems={ADMIN_NAV_ITEMS} />
                <div className="flex flex-col flex-1 overflow-hidden">
                    <Header handleSidebar={handleSidebarToggle} userType={'admin'} />
                    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                        <div className="container px-6 py-8 mx-auto">
                            {children}
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    </>
}

