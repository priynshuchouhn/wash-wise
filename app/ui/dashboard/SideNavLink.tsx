import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function SideNavLink({ title, path, icon }: any) {
    const pathName = usePathname();
    return (
        <Link className={`${ pathName == path ? "flex items-center px-6 py-2 mt-4 text-blue-500 bg-sky-100 bg-opacity-25 hover:text-blue-600" : "flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-sky-100 hover:bg-opacity-25 hover:text-blue-600" }`} href={path}>
            {icon}
            <span className="mx-3">{title}</span>
        </Link>
    )
}


