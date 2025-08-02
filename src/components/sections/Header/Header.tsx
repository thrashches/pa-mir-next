'use client';
import styles from "./Header.module.css";
import NavbarTop from "@/components/shared/NavbarTop/NavbarTop";


export default function Header() {
    return <header className={styles.Header}>
        <NavbarTop/>
    </header>
}