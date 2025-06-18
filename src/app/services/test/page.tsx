import Head from "next/head";
import Header from "@/components/sections/Header/Header";
import Link from "next/link";
import {ChevronRight} from "@deemlol/next-icons";
import OrderBlock from "@/components/shared/OrderBlock/OrderBlock";
import Footer from "@/components/sections/Footer/Footer";

export default function Test() {
    return <div className="flex flex-col items-center justify-between min-h-screen bg-white">
        <Head>
            <title>Тестовый перевод</title>
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
                        <Link href={'/services/test/'}
                              className={"inline-block text-sm text-gray-500 hover:text-gray-400"}>
                            Тестовый перевод
                        </Link>
                    </nav>
                    <article className="mx-auto">
                        <h2 className="md:text-5xl text-3xl text-left text-gray-900 font-bold">
                            Тестовый перевод
                        </h2>
                        <div className="text-xl text-justify text-gray-500 my-3 md:columns-2 gap-8">

                            Тестовый перевод – это способ проверки готовности переводчика или бюро переводов к работе с
                            данным конкретным текстом или группой документов, оценки профессионализма и принятия решения
                            о перспективах дальнейшего сотрудничества.
                            <br/>
                            Тестовый перевод может выполняться на следующих условиях:
                            <ul className="list-inside list-disc">
                                <li>
                                    объем тестового фрагмента не должен превышать 1% от документа, который требуется
                                    перевести или 1 стандартной страницы (1800 символов с пробелами);
                                </li>
                                <li>
                                    в случае, если по каким-то причинам наш вариант тестового перевода не устраивает
                                    заказчика, мы просим ознакомить нас с переводом, которому отдано предпочтение;
                                </li>
                                <li>
                                    заказчик обязуется не публиковать или иным способом использовать тестовый перевод
                                    без письменного разрешения бюро переводов «Параллельный мир»
                                </li>
                            </ul>
                            <br/>
                            Для заказа тестового перевода рекомендуется отправлять документ в бюро переводов полностью,
                            указав фрагмент, который требуется перевести, поскольку по небольшому отрывку даже хороший
                            специалист не всегда может выдать то качество, на которое он был бы способен, имея полный
                            вариант.
                            Фрагмент для технического тестового перевода лучше выбирать из разделов общего описания
                            изделия, поскольку такие тексты, с одной стороны, должны быть наиболее понятны пользователю,
                            а с другой – представляют наибольшую сложность для переводчика, ввиду того, что они в
                            наибольшей степени насыщены специальными терминами.


                        </div>
                    </article>
                </div>
            </section>
            <OrderBlock/>
        </main>
        <Footer/>
    </div>
}