import styles from "./Header.module.scss";
import Logo from "../../../../public/img/svg/logo.svg";
import Image from "next/image";
import Navbar from "@/components/shared/Navbar/Navbar";
import Contacts from "@/components/shared/Contacts/Contacts";
import NavbarTop from "@/components/shared/NavbarTop/NavbarTop";


export default function Header() {
    return <header className={styles.Header}>
        <NavbarTop/>
    </header>
}