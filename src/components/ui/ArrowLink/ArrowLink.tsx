import Link from "next/link";
import { ArrowRightCircle } from "@deemlol/next-icons";
import {JSX} from "react";

type ArrowLinkProps = {
    to: string;
}

export default function ArrowLink(props: ArrowLinkProps): JSX.Element {
    const {to} = props
    return <Link
        className="flex items-center gap-3 text-md text-sky-600 hover:text-sky-500 stroke-sky-600 hover:stroke-sky-500 cursor-pointer"
        href={to}
    >
        Подробнее
        <ArrowRightCircle size={24} />
    </Link>
}