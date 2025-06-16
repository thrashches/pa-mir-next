import styles from "./ContactsMobile.module.scss";
import {Mail, Phone} from "@deemlol/next-icons";


export default function ContactsMobile() {
    return <div className="flex items-center gap-2 p-2 lg:hidden">
        <a href={'mailto:p-mir@mail.ru'} className="flex gap-2 items-center text-md text-gray-300 cursor-pointer">
            <Mail size={20} color={"rgb(0, 132, 209)"}/>
        </a>
        <a href={'tel:+74952269622'} className="flex gap-2 items-center text-md text-gray-300 cursor-pointer">
            <Phone size={20} color={"rgb(0, 132, 209)"}/>
        </a>
    </div>
}