import Head from "next/head";
import Header from "@/components/sections/Header/Header";

import Footer from "@/components/sections/Footer/Footer";
import ArrowLink from "@/components/ui/ArrowLink/ArrowLink";
import OrderBlock from "@/components/shared/OrderBlock/OrderBlock";
import Link from "next/link";
import {ChevronRight} from "@deemlol/next-icons";

export default function Services() {
    return <div className="flex flex-col items-center justify-between min-h-screen bg-white">
        <Head>
            <title>Наши услуги</title>
        </Head>
        <Header/>
        <main className="bg-white w-full">
            <section className="w-full py-20 px-4"
                     style={{
                         background: 'radial-gradient(50.00% 50.00% at 50% 50%,rgba(247, 248, 249, 0),rgb(247, 248, 249) 100%)',
                     }}
            >
                <div className="container mx-auto md:max-w-6xl">
                    <nav className="flex items-center justify-start gap-1 mb-6">
                        <Link href={'/'} className="inline-block text-sm text-sky-600 hover:text-sky-500">
                            Главная
                        </Link>
                        <span className="inline-block">
                            <ChevronRight size={12} className="stroke-sky-600" />
                        </span>
                        <Link href={'/services/'} className={"inline-block text-sm text-gray-500 hover:text-gray-400"}>
                            Услуги
                        </Link>
                    </nav>
                    <article className="md:max-w-[600px]">
                        <h2 className="md:text-5xl text-3xl text-left text-gray-900 font-bold">
                            Наши услуги
                        </h2>
                        <p className="text-xl text-left text-gray-500 my-3">
                            Мы работаем «под ключ» с оформлением, максимально приближённым к оригиналу.
                        </p>
                    </article>
                    <div className="md:grid md:grid-cols-2 gap-8 flex flex-col py-8">
                        <div className="grid grid-cols-6 rounded-lg bg-white drop-shadow-sm p-4">
                            <div className="col-start-1 col-end-5">
                                <h4 className="text-xl font-semibold text-gray-900 text-left">
                                    Медицинский перевод
                                </h4>
                                <p className="text-md text-gray-500 my-3">
                                    Перевод текстов по медицине, фармацевтике, биологии и химии.
                                </p>
                            </div>
                            <div className="col-span-2 flex flex-row items-start justify-end">
                                <ArrowLink to={"/services/med/"}/>
                            </div>
                        </div>
                        <div className="grid grid-cols-6 rounded-lg bg-white drop-shadow-sm p-4">
                        <div className="col-start-1 col-end-5">
                                <h4 className="text-xl font-semibold text-gray-900 text-left">
                                    Технический перевод
                                </h4>
                                <p className="text-md text-gray-500 my-3">
                                    Перевод технических и научных текстов.
                                </p>
                            </div>
                            <div className="col-span-2 flex flex-row items-start justify-end">
                                <ArrowLink to={"/services/tech/"}/>
                            </div>
                        </div>
                        <div className="grid grid-cols-6 rounded-lg bg-white drop-shadow-sm p-4">
                            <div className="col-start-1 col-end-5">
                                <h4 className="text-xl font-semibold text-gray-900 text-left">
                                    Оформление переводов
                                </h4>
                                <p className="text-md text-gray-500 my-3">

                                </p>
                            </div>
                            <div className="col-span-2 flex flex-row items-start justify-end">
                                <ArrowLink to={"/services/decoration/"}/>
                            </div>
                        </div>
                        <div className="grid grid-cols-6 rounded-lg bg-white drop-shadow-sm p-4">
                            <div className="col-start-1 col-end-5">
                                <h4 className="text-xl font-semibold text-gray-900 text-left">
                                    Тестовый перевод
                                </h4>
                                <p className="text-md text-gray-500 my-3">

                                </p>
                            </div>
                            <div className="col-span-2 flex flex-row items-start justify-end">
                                <ArrowLink to={"/services/test/"}/>
                            </div>
                        </div>
                        <div className="grid grid-cols-6 rounded-lg bg-white drop-shadow-sm p-4">
                            <div className="col-start-1 col-end-5">
                                <h4 className="text-xl font-semibold text-gray-900 text-left">
                                    Заверение переводов
                                </h4>
                                <p className="text-md text-gray-500 my-3">
                                </p>
                            </div>
                            <div className="col-span-2 flex flex-row items-start justify-end">
                                <ArrowLink to={"/services/approve/"}/>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <OrderBlock/>
        </main>
        <Footer/>
    </div>
}