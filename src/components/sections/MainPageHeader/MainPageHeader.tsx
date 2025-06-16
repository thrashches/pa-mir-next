import styles from "./MainPageHeader.module.scss";
import NavbarTop from "@/components/shared/NavbarTop/NavbarTop";
import Greeting from "@/components/sections/Greeting/Greeting";


export default function MainPageHeader() {
    return <header className={styles.MainPageHeader}>
        <div className={styles.content}>
            <NavbarTop />
            <Greeting/>
        </div>
    </header>
}