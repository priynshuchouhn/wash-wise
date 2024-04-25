import Image from 'next/image';
import logo from '../../../public/wash-wise-logo.png';
import SideNavLink from './SideNavLink';

export default function SideNav({sidebarOpen, handleSidebar, navItems}:any) {
    return (
        <>
            <div onClick={() => handleSidebar(false)} className={`fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}></div>
            <div className={`${sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'} fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-white lg:translate-x-0 lg:static lg:inset-0`}>
                <div className="flex items-center justify-center mt-8">
                    <div className="flex items-center">
                        <Image src={logo} alt="" width={32} height={32} />
                        <span className="mx-2 text-2xl font-semibold text-blue-500">Wash Wise</span>
                    </div>
                </div>

                <nav className="mt-10">
                    {navItems.map((item:any)=> <SideNavLink key={item.title} title={item.title} path={item.path} icon={item.icon}/>)}
                </nav>
            </div>
        </>
    )
}


