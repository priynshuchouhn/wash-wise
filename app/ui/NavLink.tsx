import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({title, path}: {title: string, path: string}){
    const pathname = usePathname()
    return  <Link className={`px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline ${pathname === path ? 'text-blue-500' : ''}`} href={path}>{title}</Link>

}