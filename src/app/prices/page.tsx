import Head from "next/head";
import Header from "@/components/sections/Header/Header";
import Link from "next/link";
import {ChevronRight} from "@deemlol/next-icons";

import Footer from "@/components/sections/Footer/Footer";

export default function Prices() {
    return <div className="flex flex-col items-center justify-between min-h-screen bg-white">
        <Head>
            <title>Цены</title>
        </Head>
        <Header/>
        <main className="w-full flex-grow bg-white">
            <section className="w-full py-20 px-4">
                <div className="container mx-auto md:max-w-6xl">
                    <nav className="flex items-center justify-start gap-1 mb-6">
                        <Link href={'/'} className="inline-block text-sm text-sky-600 hover:text-sky-500">
                            Главная
                        </Link>
                        <span className="inline-block">
                            <ChevronRight size={12} className="stroke-sky-600"/>
                        </span>

                        <Link href={'/prices/'}
                              className={"inline-block text-sm text-gray-500 hover:text-gray-400"}>
                            Цены
                        </Link>
                    </nav>
                    <div className="">
                        <h2 className="md:text-5xl text-3xl text-left text-gray-900 font-bold">
                            Цены
                        </h2>
                        <section className="mt-3">
                            <div className="text-gray-500 font-sans">
                                <div className="mb-6">
                                    <h2 className="md:text-xl text-sm font-bold mb-2">
                                        1. Стоимость <a href="http://www.pa-mir.ru/"
                                                        className="text-gray-600 hover:underline">технического и
                                        медицинского перевода</a>. Письменный перевод текста
                                    </h2>

                                    <div className="bg-yellow-50 p-2 mb-4 border-l-4 border-red-500">
                                        <p className="md:text-xl text-sm font-bold">
                                            <span className="text-red-600">Внимание!</span> Указаны цены перевода
                                            <a href="http://www.pa-mir.ru/standard_page.htm"
                                               className="text-gray-600 hover:underline">1 стандартной
                                                страницы</a> (1800 символов, включая пробелы).
                                        </p>
                                        <p className="md:text-xl text-sm font-bold">
                                            Цены на перевод не включают и не облагаются НДС (Упрощенная система
                                            налогообложения)
                                        </p>
                                    </div>

                                    <h3 className="md:text-xl text-sm font-bold mb-2">Стоимость перевода технических
                                        текстов</h3>

                                    <div className="overflow-x-auto mb-6">
                                        <table className="min-w-full border border-gray-300">
                                            <thead>
                                            <tr className="bg-gray-200">
                                                <th className="border border-gray-300 px-3 py-2 text-left md:text-xl text-sm font-bold">Язык</th>
                                                <th className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm font-bold">Цена
                                                    перевода с иностранного языка на русский
                                                </th>
                                                <th className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm font-bold">Цена
                                                    перевода с русского языка на иностранный
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr className="bg-yellow-50">
                                                <td className="border border-gray-300 px-3 py-2 md:text-xl text-sm">Английский</td>
                                                <td className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm">450</td>
                                                <td className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm">500</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 px-3 py-2 md:text-xl text-sm">Немецкий</td>
                                                <td className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm">470</td>
                                                <td className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm">520</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 px-3 py-2 md:text-xl text-sm">Французский,
                                                    итальянский, испанский
                                                </td>
                                                <td className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm">470</td>
                                                <td className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm">520</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 px-3 py-2 md:text-xl text-sm">Китайский,
                                                    японский
                                                </td>
                                                <td className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm">800</td>
                                                <td className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm">1000</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h3 className="md:text-xl text-sm font-bold mb-2">Стоимость перевода юридических
                                        текстов</h3>

                                    <div className="overflow-x-auto mb-6">
                                        <table className="min-w-full border border-gray-300">
                                            <thead>
                                            <tr className="bg-gray-200">
                                                <th className="border border-gray-300 px-3 py-2 text-left md:text-xl text-sm font-bold">Язык</th>
                                                <th className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm font-bold">Цена
                                                    перевода с иностранного языка на русский
                                                </th>
                                                <th className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm font-bold">Цена
                                                    перевода с русского языка на иностранный
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr className="bg-yellow-50">
                                                <td className="border border-gray-300 px-3 py-2 md:text-xl text-sm">Английский</td>
                                                <td className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm">от
                                                    500
                                                </td>
                                                <td className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm">от
                                                    600
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 px-3 py-2 md:text-xl text-sm">Немецкий</td>
                                                <td className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm">от
                                                    600
                                                </td>
                                                <td className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm">от
                                                    700
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 px-3 py-2 md:text-xl text-sm">Французский,
                                                    итальянский, испанский
                                                </td>
                                                <td className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm">от
                                                    600
                                                </td>
                                                <td className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm">от
                                                    700
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 px-3 py-2 md:text-xl text-sm">Стоимость
                                                    перевода носителем языка
                                                </td>
                                                <td className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm"
                                                    colSpan="2">Цена на перевод договорная, звоните
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="mb-4">
                                        <p className="md:text-xl text-sm font-bold">
                                            Минимальный заказ перевода - <span
                                            className="text-red-600">2</span> стандартные страницы.
                                        </p>
                                        <p className="md:text-xl text-sm font-bold">
                                            Предоплата <span className="text-red-600">50%</span> при заказе перевода
                                            более 50 страниц.
                                        </p>
                                    </div>

                                    <div className="bg-yellow-50 p-2 mb-4">
                                        <h3 className="text-center md:text-xl text-sm font-bold mb-2">Поправки к ценам
                                            на перевод:</h3>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="border border-gray-300 p-2">
                                                <h4 className="md:text-xl text-sm font-bold mb-1">Скидки:</h4>
                                                <ul className="list-disc pl-5 md:text-xl text-sm">
                                                    <li>при заказе перевода свыше 100 страниц</li>
                                                    <li>при повторном обращении</li>
                                                    <li>при заказе верстки</li>
                                                </ul>
                                            </div>

                                            <div className="border border-gray-300 p-2">
                                                <h4 className="md:text-xl text-sm font-bold mb-1">Наценки:</h4>
                                                <ul className="list-disc pl-5 md:text-xl text-sm">
                                                    <li><span className="font-bold">10-40%</span> от стоимости перевода
                                                        за срочность (более 50 страниц в неделю)
                                                    </li>
                                                    <li><span className="font-bold">10-30%</span> от стоимости перевода
                                                        при повышенной сложности текста
                                                    </li>
                                                    <li><span className="font-bold">50%</span> цены перевода - за
                                                        литературное редактирование перевода
                                                    </li>
                                                    <li><span className="font-bold">до 50%</span> стоимости при переводе
                                                        перечней деталей, спецификаций
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-red-600 md:text-xl text-sm font-bold mb-6">
                                        Личные документы (паспорта, свидетельства о рождении и т.п.) не переводим!
                                    </p>
                                </div>

                                <div className="mb-6">
                                    <h2 className="md:text-xl text-sm font-bold mb-2">
                                        2. Устный перевод
                                    </h2>
                                    <p className="md:text-xl text-sm mb-4">
                                        Услуги устного переводчика в Москве, а также гида-переводчика оплачиваются из
                                        расчета 3000 руб./2 часа,
                                        2000 руб./час (3-5 часов) или 10000 руб./день (английский язык). Немецкий,
                                        французский языки - наценка 10%.<br/>
                                        Рабочий день = 8 часов + час на обед. Тематика и дата переговоров сообщается по
                                        возможности заранее.<br/>
                                        Услуга предоставляется только на условиях предоплаты 100%.
                                    </p>
                                </div>

                                <div className="mb-6">
                                    <h2 className="md:text-xl text-sm font-bold mb-2">
                                        3. Верстка и допечатная подготовка <a
                                        href="http://www.pa-mir.ru/documentation.htm"
                                        className="text-gray-600 hover:underline">переводов документации</a> (цены за
                                        страницу А4)
                                    </h2>

                                    <div className="overflow-x-auto">
                                        <table className="min-w-full border border-gray-300">
                                            <thead>
                                            <tr className="bg-gray-200">
                                                <th rowSpan="2"
                                                    className="border border-gray-300 px-3 py-2 text-left md:text-xl text-sm font-bold">Уровень
                                                    сложности макета
                                                </th>
                                                <th rowSpan="2"
                                                    className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm font-bold">Программа
                                                    верстки
                                                </th>
                                                <th colSpan="3"
                                                    className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm font-bold">Стоимость
                                                    верстки одной физической страницы, руб.
                                                </th>
                                            </tr>
                                            <tr className="bg-gray-200">
                                                <th className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm font-bold">до
                                                    10 стр.
                                                </th>
                                                <th className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm font-bold">10
                                                    - 50 стр.
                                                </th>
                                                <th className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm font-bold">&gt;50
                                                    стр.
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td rowSpan="2"
                                                    className="border border-gray-300 px-3 py-2 md:text-xl text-sm">Текст
                                                    без рисунков и таблиц
                                                </td>
                                                <td className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm">Word</td>
                                                <td className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm font-bold">50</td>
                                                <td className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm font-bold">40</td>
                                                <td className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm font-bold">30</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm">Другие
                                                    программы
                                                </td>
                                                <td className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm">100</td>
                                                <td className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm">70</td>
                                                <td className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm">40</td>
                                            </tr>
                                            <tr>
                                                <td rowSpan="2"
                                                    className="border border-gray-300 px-3 py-2 md:text-xl text-sm">Текст
                                                    с таблицами и рисунками (инструкции по эксплуатации)
                                                </td>
                                                <td className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm">Word</td>
                                                <td className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm">150</td>
                                                <td className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm">120</td>
                                                <td className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm">100</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm">Другие
                                                    программы
                                                </td>
                                                <td className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm">300</td>
                                                <td className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm">280</td>
                                                <td className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm">250</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 px-3 py-2 md:text-xl text-sm">Текст
                                                    с большим количеством рисунков и подписей на них. (Схемы
                                                    электрооборудования и т.п.)
                                                </td>
                                                <td className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm">Другие
                                                    программы
                                                </td>
                                                <td className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm">500</td>
                                                <td className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm">450</td>
                                                <td className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm">400</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 px-3 py-2 md:text-xl text-sm">Рекламные
                                                    полноцветные материалы, чертежи AutoCad
                                                </td>
                                                <td className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm">Другие
                                                    программы
                                                </td>
                                                <td colSpan="3"
                                                    className="border border-gray-300 px-3 py-2 text-center md:text-xl text-sm">от
                                                    500
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
    </div>
}