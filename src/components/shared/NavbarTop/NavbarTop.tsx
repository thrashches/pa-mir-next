"use client"

import styles from "./NavbarTop.module.scss";
import Image from "next/image";
import Logo from "../../../../public/img/svg/logo.svg";
import Burger from "../../../../public/img/svg/burger.svg";
import Contacts from "@/components/shared/Contacts/Contacts";
import NavLink from "@/components/ui/NavLink/NavLink";
import ContactsMobile from "@/components/shared/ContactsMobile/ContactsMobile";
import BurgerMenu from "@/components/shared/BurgerMenu/BurgerMenu";
import {useState} from "react";
import {Mail, Phone} from "@deemlol/next-icons";


export default function NavbarTop() {
    const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

    return <div className={styles.NavbarTop}>
        <div className="xl:container xl:mx-auto lg:p-3 p-2">

            <div className="flex lg:gap-4 gap-3 p-1 items-center justify-between">
                <div className="flex shrink-0 items-center max-w-[55vw]">
                    <Image
                        className="w-auto"
                        src={Logo}
                        alt="Бюро переводов Параллельный мир"
                    />
                </div>
                <div className="lg:flex shrink-0 items-center hidden">
                    <NavLink to={'/'}>Главная</NavLink>
                    <NavLink to={'/services'}>Услуги</NavLink>
                    <NavLink to={'/prices'}>Цены</NavLink>
                    <NavLink to={'/scheme'}>Схема работы</NavLink>
                    <NavLink to={'/about'}>О нас</NavLink>
                    <NavLink to={'/info'}>Информация</NavLink>
                    <NavLink to={'/contacts'}>Контакты</NavLink>
                </div>
                <div className="ml-auto hidden lg:block">
                    <Contacts iconColor={'rgb(85, 105, 135)'}/>
                </div>
                <nav className="flex gap-3 px-2 items-center lg:hidden">
                    <a href={'mailto:p-mir@mail.ru'}
                       className="flex gap-2 items-center text-md text-gray-300 cursor-pointer">
                        <Mail size={20} color={"rgb(0, 132, 209)"}/>
                    </a>
                    <a href={'tel:+74952269622'}
                       className="flex gap-2 items-center text-md text-gray-300 cursor-pointer">
                        <Phone size={20} color={"rgb(0, 132, 209)"}/>
                    </a>
                    <button className="lg:hidden" onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}>
                        <Image
                            className="w-auto"
                            src={Burger}
                            alt="Меню"
                        />
                    </button>
                </nav>


            </div>
        </div>
        {burgerMenuOpen && <BurgerMenu onClose={() => setBurgerMenuOpen(false)} />}
    </div>
}