import Head from "next/head";
import Header from "@/components/sections/Header/Header";
import Link from "next/link";
import {ChevronRight} from "@deemlol/next-icons";
import Footer from "@/components/sections/Footer/Footer";


export default function Scheme() {
    return <div className="flex flex-col items-center justify-between min-h-screen bg-white">
        <Head>
            <title>Контакты</title>
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

                        <Link href={'/scheme/'}
                              className={"inline-block text-sm text-gray-500 hover:text-gray-400"}>
                            Схема работы
                        </Link>
                    </nav>
                    <div className="">
                        <h2 className="md:text-5xl text-3xl text-left text-gray-900 font-bold">
                            Схема работы
                        </h2>
                        <div className="">
                            <article className="md:columns-2 gap-8">

                                <p className="md:text-xl text-sm text-left text-gray-500 my-6">
                                    <b>Как заказать технический и медицинский перевод</b>
                                    <br/>

                                    Исходные материалы:
                                    <br/>
                                    В работу для выполнения <Link href={'/services/tech/'}
                                                                  className="text-sky-600 hover:text-sky-400">технического</Link> и <Link
                                    href={'/services/med/'}
                                    className="text-sky-600 hover:text-sky-400">медицинского</Link> перевода принимаются
                                    документы как в виде твердой копии (на бумаге), так и в электронном. Основное
                                    требование - их пригодность для работы (читаемость текста и качество иллюстраций,
                                    если требуется верстка).
                                </p>
                                <p className="md:text-xl text-sm text-left text-gray-500 my-6">
                                    <b>Форматы исходных файлов:</b>
                                    <br/>
                                </p>
                                <div className="md:text-xl text-sm text-left text-gray-500 my-6">
                                    <ul className="list-inside list-disc">
                                        <li>MS Office DOC, XLS, PPT);</li>
                                        <li>Adobe Acrobat (PDF);</li>
                                        <li>Autoad, Corel Draw (DXF, DWG, DGN, CDR, CMX);</li>
                                        <li>Adobe PageMaker, InDesign,Illustrator (pm65, INDD, AI);</li>
                                        <li>другие (звоните).</li>
                                    </ul>
                                </div>

                                <p className="md:text-xl text-sm text-left text-gray-500 my-6">
                                    <b>Представление переводов</b>
                                    <br/>
                                    Заказчику в обязательном порядке передается:
                                </p>
                                <div className="md:text-xl text-sm text-left text-gray-500 my-6">
                                    <ul className="list-inside list-disc">
                                        <li>текст технического перевода в формате MS Word (.doc), разбитый на страницы в
                                            соответствии с оригиналом;
                                        </li>
                                        <li>текст перевода подписей к рисункам;</li>
                                        <li>оригинал с примечаниями переводчика в печатном виде.</li>
                                    </ul>
                                    <br/>
                                    По требованию заказчика может быть составлен словарь терминов перевода.
                                </div>


                                <div className="md:text-xl text-sm text-left text-gray-500 my-6">
                                    <b>Оформление переводов</b>
                                    <br/>
                                    При выполнении переводов, как правило, выполняется базовая верстка текста перевода в
                                    программе Word с обеспечением постраничного соответствия оригиналу («один в один»),
                                    вставкой и подписью рисунков, схем и т.д. Стоимость такой верстки составляет от 30
                                    (простой форматированный текст с небольшим количеством таблиц) до 100 (текст с
                                    рисунками, сложными таблицами) рублей. При большом количестве подписей на рисунках,
                                    а также низком качестве исходных материалов (например, нераспознаваемый текст)
                                    стоимость может увеличиваться.
                                    <br/>
                                    По желанию заказчика верстка может выполняться в других программах (по
                                    согласованию). При этом производится подготовка и импорт графики, воссоздание стилей
                                    и элементов оформления документа.
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
                                            контрольная распечатка макета документа в 1 экземпляре.
                                        </li>
                                        <li>

                                        </li>
                                    </ul>
                                    <br/>
                                    Скорость верстки может составлять от 10 до 100 страниц в день в зависимости от
                                    сложности макета.
                                </div>

                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
    </div>
}