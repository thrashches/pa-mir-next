import styles from "./MainPageHeader.module.css";
import NavbarTop from "@/components/shared/NavbarTop/NavbarTop";
import Greeting from "@/components/sections/Greeting/Greeting";

export default function MainPageHeader() {
    return <header
        className={styles.MainPageHeader}
        style={{
            backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH||''}/img/png/header.png')`,
        }}
    >
        <div className={styles.content}>
            <NavbarTop />
            <Greeting/>
        </div>
    </header>
}