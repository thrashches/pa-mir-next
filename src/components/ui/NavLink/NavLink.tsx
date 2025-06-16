'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";



interface NavLinkProps {
    to?: string;
    children?: React.ReactNode;
}

export default function NavLink(props: NavLinkProps) {
    const {to, children} = props;
    const pathname = usePathname();
    const className = pathname === to ?
        "block rounded-md lg:bg-gray-900 bg-gray-800 px-3 py-2 lg:text-sm text-md font-medium text-white" :
        "block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white";

    return <Link
        href={to?to:"#"}
        className={className}
        aria-current="page"
    >{children}</Link>
}