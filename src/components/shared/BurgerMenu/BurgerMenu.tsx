import Image from "next/image";
import Logo from "../../../../public/img/svg/logo.svg";
import {Mail, Phone} from "@deemlol/next-icons";
import CloseBtn from "@/components/ui/CloseBtn/CloseBtn";
import NavLink from "@/components/ui/NavLink/NavLink";
import {useEffect} from "react";


type BurgerMenuProps = {
    onClose?: () => void;
}


export default function BurgerMenu(props: BurgerMenuProps) {
    useEffect(() => {
        document.body.classList.add('overflow-hidden');
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    return <div className="absolute inset-0 w-screen h-screen z-50 bg-gray-900 fade-in">
        <div className="flex items-center justify-between p-3">
            <div className="flex shrink-0 items-center max-w-[55vw]">
                <Image
                    className="w-auto"
                    src={Logo}
                    alt="Бюро переводов Параллельный мир"
                />
            </div>
            <div className="flex items-center justify-end gap-3 px-3">
                <a href={'mailto:p-mir@mail.ru'}
                   className="flex gap-2 items-center text-md text-gray-300 cursor-pointer">
                    <Mail size={20} color={"rgb(0, 132, 209)"}/>
                </a>
                <a href={'tel:+74952269622'} className="flex gap-2 items-center text-md text-gray-300 cursor-pointer">
                    <Phone size={20} color={"rgb(0, 132, 209)"}/>
                </a>
                <CloseBtn onClick={props.onClose}/>
            </div>
        </div>
        <div className="flex flex-col justify-between items-center h-[75vh] w-full">
            <nav className="flex flex-col max-h-[75%] w-full overflow-y-auto space-y-1 px-2 pt-6 pb-3">
                        <NavLink to={'/'}>Главная</NavLink>
                        <NavLink to={'/services/'}>Услуги</NavLink>
                        <NavLink to={'/prices/'}>Цены</NavLink>
                        <NavLink to={'/scheme/'}>Схема работы</NavLink>
                        <NavLink to={'/about/'}>О нас</NavLink>
                        <NavLink to={'/info/'}>Информация</NavLink>
                        <NavLink to={'/contacts/'}>Контакты</NavLink>
            </nav>
            <div className="flex justify-center items-center mt-auto mb-8 max-h-[25%]">
                <button className="block rounded-md px-3 py-2 bg-gray-500 text-md text-gray-300 cursor-pointer">
                    Заказать перевод
                </button>
            </div>
        </div>
    </div>
}