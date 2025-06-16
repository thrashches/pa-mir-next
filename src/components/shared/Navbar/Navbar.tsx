import styles from "./Navbar.module.scss";
import Image from "next/image";
import Logo from "../../../../public/img/svg/logo.svg";
import {ReactNode} from "react";
import NavLink from "@/components/ui/NavLink/NavLink";


export default function Navbar({ children }: { children?: ReactNode }) {
    return <div className={styles.Navbar}>
        <nav className="backdrop">
            <div className="mx-auto max-w-7xl p-2 sm:p-2 lg:p-2">
                <div className="relative flex h-16 items-center justify-between">

                    <div
                        className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
                    >
                        <div className="flex shrink-0 items-center">
                            <Image
                                className="w-auto"
                                src={Logo}
                                alt="Бюро переводов Параллельный мир"
                            />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex items-center space-x-4 h-100">
                                <div className="lg:flex shrink-0 items-center hidden">
                                    <NavLink to={'/'}>Главная</NavLink>
                                    <NavLink to={'/services'}>Услуги</NavLink>
                                    <NavLink to={'/prices'}>Цены</NavLink>
                                    <NavLink to={'/scheme'}>Схема работы</NavLink>
                                    <NavLink to={'/about'}>О нас</NavLink>
                                    <NavLink to={'/info'}>Информация</NavLink>
                                    <NavLink to={'/contacts'}>Контакты</NavLink>
                                </div>
                            </div>
                        </div>
                        {children}
                    </div>

                </div>
            </div>



        </nav>
    </div>
}