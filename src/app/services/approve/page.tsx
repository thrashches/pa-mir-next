import Head from "next/head";
import Header from "@/components/sections/Header/Header";
import Link from "next/link";
import {ChevronRight} from "@deemlol/next-icons";

import OrderBlock from "@/components/shared/OrderBlock/OrderBlock";
import Footer from "@/components/sections/Footer/Footer";

export default function Approve() {
    return <div className="flex flex-col items-center justify-between min-h-screen bg-white">
        <Head>
            <title>Заверение переводов</title>
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
                        <Link href={'/services/approve/'}
                              className={"inline-block text-sm text-gray-500 hover:text-gray-400"}>
                            Заверение переводов
                        </Link>
                    </nav>
                    <article className="mx-auto">
                        <h2 className="md:text-5xl text-3xl text-left text-gray-900 font-bold">
                            Заверение переводов
                        </h2>
                        <div className="text-xl text-justify text-gray-500 my-3 gap-8">
                            Бюро переводов «Параллельный мир» готово выполнить перевод с нотариальным заверением подписи переводчика. Стоимость услуги зависит от расценок нотариальных контор и согласовывается с заказчиком в индивидуальном порядке. Перевод может также бесплатно заверяться штампом бюро переводов. В этом случае плата берется только за распечатку документа (20 рублей за страницу А4).
                        </div>
                    </article>
                </div>
            </section>
            <OrderBlock/>
        </main>
        <Footer/>
    </div>
}