import Head from "next/head";
import Header from "@/components/sections/Header/Header";
import Link from "next/link";
import {ChevronRight} from "@deemlol/next-icons";

import OrderBlock from "@/components/shared/OrderBlock/OrderBlock";
import Footer from "@/components/sections/Footer/Footer";

export default function Decoration() {
    return <div className="flex flex-col items-center justify-between min-h-screen bg-white">
        <Head>
            <title>Оформление переводов</title>
        </Head>
        <Header/>
        <main className="bg-white w-full">
            <section className="w-full py-20 px-4 bg-white">
                <div className="container mx-auto md:max-w-6xl">
                    <nav className="flex items-center justify-start gap-1 mb-6">
                        <Link href={'/'} className="inline-block text-sm text-sky-600 hover:text-sky-500">
                            Главная
                        </Link>
                        <span className="inline-block">
                            <ChevronRight size={12} className="stroke-sky-600"/>
                        </span>
                        <Link href={'/services/'} className={"inline-block text-sm text-sky-600 hover:text-sky-500"}>
                            Услуги
                        </Link>
                        <span className="inline-block">
                            <ChevronRight size={12} className="stroke-sky-600"/>
                        </span>
                        <Link href={'/services/decoration/'} className={"inline-block text-sm text-gray-500 hover:text-gray-400"}>
                            Оформление переводов
                        </Link>
                    </nav>
                    <article className="mx-auto">
                        <h2 className="md:text-5xl text-3xl text-left text-gray-900 font-bold">
                            Оформление переводов
                        </h2>
                        <div className="text-xl text-justify text-gray-500 my-3 md:columns-2 gap-8">
                            При выполнении переводов, как правило, выполняется базовая верстка текста перевода в программе Word
                            с обеспечением постраничного соответствия оригиналу («один в один»), со вставкой и подписью
                            рисунков, схем и т.д. Стоимость такой верстки составляет от 30 (простой форматированный
                            текст с небольшим количеством таблиц) до 100 (текст с рисунками, сложными таблицами) рублей.
                            При большом количестве подписей на рисунках, а также низком качестве исходных материалов
                            (например, нераспознаваемый текст) стоимость может увеличиваться.
                            <br/>
                            По желанию заказчика верстка может выполняться в других программах (по согласованию). При этом производится подготовка и импорт графики, воссоздание стилей и элементов оформления документа.
                            <br/>
                            <br/>
                            Заказчику передается:
                            <ul className="list-inside list-disc">
                                <li>
                                    готовый файл документа в формате PDF;
                                </li>
                                <li>
                                    файлы макета в формате программы верстки, файлы рисунков;
                                </li>
                                <li>
                                    контрольная распечатка макета документа в 1 экземпляре (при необходимости).
                                </li>

                            </ul>
                            <br/>
                            Скорость верстки составляет от 10 до 100 страниц в день в зависимости от
                            сложности макета.
                        </div>
                    </article>
                </div>
            </section>
            <OrderBlock/>
        </main>
        <Footer/>
    </div>
}