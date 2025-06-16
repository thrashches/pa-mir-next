import styles from "./FooterLink.module.scss";
import Link from "next/link";


interface FooterLinkProps {
    to?: string;
    children?: React.ReactNode;
}

export default function FooterLink(props: FooterLinkProps) {
    const {to, children} = props;

    return <Link
        href={to?to:"#"}
        className="block px-3 py-2 font-medium hover:text-white text-gray-400"
        aria-current="page"
    >{children}</Link>
}