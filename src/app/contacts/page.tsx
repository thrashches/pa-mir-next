import { Mail } from "@deemlol/next-icons";
import Footer from "@/components/sections/Footer/Footer";
import Header from "@/components/sections/Header/Header";
import Head from "next/head";
import Link from "next/link";
import {ChevronRight} from "@deemlol/next-icons";

export default function Page() {
    return <div className="flex flex-col items-center justify-between min-h-screen bg-white">
        <Head>
            <title>Контакты</title>
        </Head>
        <Header/>
        <main className="w-full" style={{
            background: 'radial-gradient(50.00% 50.00% at 50% 50%,rgba(247, 248, 249, 0),rgb(247, 248, 249) 100%)'
        }}>
            <section className="container mx-auto py-20 px-4">
                <nav className="flex items-center justify-start gap-1 mb-6">
                    <Link href={'/'} className="inline-block text-sm text-sky-600 hover:text-sky-500">
                        Главная
                    </Link>
                    <span className="inline-block">
                            <ChevronRight size={12} className="stroke-sky-600"/>
                        </span>

                    <Link href={'/contacts/'}
                          className={"inline-block text-sm text-gray-500 hover:text-gray-400"}>
                        Кнтакты
                    </Link>
                </nav>
                <div>
                    <article className="md:max-w-[600px]">
                        <h2 className="md:text-5xl text-3xl text-left text-gray-900 font-bold">
                            Контакты
                        </h2>
                        <p className="text-xl text-left text-gray-500 my-3">
                            Работаем в режиме электронного офиса.
                        </p>
                    </article>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="flex flex-col items-center gap-4">
                            <div
                                className="flex items-center justify-center w-12 h-12 rounded-full bg-sky-600 text-white">
                                <Mail className="w-6 h-6"/>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900">Email</h4>
                        </div>
                    </div>
                </div>
            </section>

        </main>
        <Footer/>
    </div>
}