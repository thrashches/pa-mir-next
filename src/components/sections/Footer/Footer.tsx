import styles from "./Footer.module.scss";
import Contacts from "@/components/shared/Contacts/Contacts";
import Image from "next/image";
import Logo from "../../../../public/img/svg/logo.svg";

import FooterLink from "@/components/ui/FooterLink/FooterLink";
import Copyright from "@/components/shared/Copyright/Copyright";


export default function Footer() {
    return <footer className={styles.Footer}>
        <div className={styles.NavbarTop}>
            <div className="xl:container xl:mx-auto lg:p-3 p-2">

                <div className="flex lg:flex-row flex-col lg:gap-4 gap-8 p-1 lg:items-center justify-between">
                    <div className="flex shrink-0 items-center max-w-[55vw]">
                        <Image
                            className="w-auto"
                            src={Logo}
                            alt="Бюро переводов Параллельный мир"
                        />
                    </div>
                    <nav className="lg:flex block shrink-0 items-center">
                        <FooterLink to={'/'}>Главная</FooterLink>
                        <FooterLink to={'/services/'}>Услуги</FooterLink>
                        <FooterLink to={'/prices/'}>Цены</FooterLink>
                        <FooterLink to={'/scheme/'}>Схема работы</FooterLink>
                        <FooterLink to={'/about/'}>О нас</FooterLink>
                        <FooterLink to={'/contacts/'}>Контакты</FooterLink>
                    </nav>
                    <div className="ml-auto">

                    </div>

                </div>
                <div
                    className="flex flex-col-reverse gap-10 md:flex-row md:items-center justify-between lg:mt-10 mt-4 p-3">
                    <Copyright/>
                    <Contacts/>
                </div>
            </div>

        </div>

    </footer>
}