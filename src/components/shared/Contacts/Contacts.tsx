import {Mail, Phone} from "@deemlol/next-icons";
import {JSX} from "react";


type ContactProps = {
    iconColor?: string;
}

export default function Contacts(props: ContactProps): JSX.Element {
    const {iconColor} = props;

    return <div className="flex-shrink-0">
        <a href={'mailto:p-mir@mail.ru'} className="flex gap-2 items-center text-md text-gray-300 cursor-pointer">
            <Mail size={20} color={iconColor||"rgb(184, 230, 254)"}/> p-mir@mail.ru
        </a>
        <a href={'tel:+74952269622'} className="flex gap-2 items-center text-md text-gray-300 cursor-pointer">
            <Phone size={20} color={iconColor||"rgb(184, 230, 254)"}/> +7 (495) 22-696-22
        </a>
    </div>
}