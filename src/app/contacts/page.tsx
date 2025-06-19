import {ChevronRight, Mail, Phone} from "@deemlol/next-icons";
import Footer from "@/components/sections/Footer/Footer";
import Header from "@/components/sections/Header/Header";
import Head from "next/head";
import Link from "next/link";

export default function Contacts() {
    return <div className="flex flex-col items-center justify-between min-h-screen bg-white">
        <Head>
            <title>Контакты</title>
        </Head>
        <Header/>
        <main className="w-full flex-grow" style={{
            background: 'radial-gradient(50.00% 50.00% at 50% 50%,rgba(247, 248, 249, 0),rgb(247, 248, 249) 100%)'
        }}>
            <section className="w-full py-20 px-4">
                <div className="container mx-auto md:max-w-6xl">
                    <nav className="flex items-center justify-start gap-1 mb-6">
                        <Link href={'/'} className="inline-block text-sm text-sky-600 hover:text-sky-500">
                            Главная
                        </Link>
                        <span className="inline-block">
                            <ChevronRight size={12} className="stroke-sky-600"/>
                        </span>

                        <Link href={'/contacts/'}
                              className={"inline-block text-sm text-gray-500 hover:text-gray-400"}>
                            Контакты
                        </Link>
                    </nav>
                    <div className="md:grid md:grid-cols-2 gap-8 mb-auto">
                        <div className="flex flex-col gap-10 md:max-w-xl">
                            <article className="md:max-w-[600px]">
                                <h2 className="md:text-5xl text-3xl text-left text-gray-900 font-bold">
                                    Контакты
                                </h2>
                                <p className="md:text-xl text-sm text-left text-gray-500 my-3">
                                    Работаем в режиме электронного офиса.
                                </p>
                            </article>
                            <div className="grid grid-cols-2 gap-8">
                                <div className="flex flex-col items-start gap-4">
                                    <div
                                        className="flex items-center justify-center w-12 h-12 rounded-full bg-sky-600 text-white">
                                        <Mail className="w-6 h-6"/>
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900">Email</h4>
                                    <a href="mailto:p-mir@mail.ru"
                                       className="md:text-xl text-sm text-gray-500 cursor-pointer">
                                        p-mir@mail.ru,
                                    </a>
                                    <a href="mailto:svetlana@pa-mir.ru"
                                       className="md:text-xl text-sm text-gray-500 cursor-pointer">
                                        svetlana@pa-mir.ru
                                    </a>
                                </div>
                                <div className="flex flex-col items-start gap-4">
                                    <div
                                        className="flex items-center justify-center w-12 h-12 rounded-full bg-sky-600 text-white">
                                        <Phone className="w-6 h-6"/>
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900">Телефон</h4>
                                    <a href="tel:+74952269622"
                                       className="md:text-xl text-sm text-gray-500 cursor-pointer">
                                        +7 (495) 226-9-622
                                    </a>

                                </div>
                            </div>
                            <article className="pl-8 border-l-sky-600 border-l-4">
                                <p className="md:text-xl text-sm text-left text-gray-500 my-3">
                                    <b>Внимание!</b> Личные документы (паспорта, свидетельства о&nbsp;рождении,
                                    справки &nbsp;и&nbsp;т.п.) не&nbsp;переводим!
                                </p>
                            </article>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>


            </section>

        </main>
        <Footer/>
    </div>
}