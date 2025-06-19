import Head from "next/head";
import Header from "@/components/sections/Header/Header";
import Link from "next/link";
import {ChevronRight} from "@deemlol/next-icons";
import Footer from "@/components/sections/Footer/Footer";
import Advantages from "@/components/sections/Advantages/Advantages";

export default function About() {
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

                        <Link href={'/about/'}
                              className={"inline-block text-sm text-gray-500 hover:text-gray-400"}>
                            О нас
                        </Link>
                    </nav>
                    <div className="">
                        <h2 className="md:text-5xl text-3xl text-left text-gray-900 font-bold">
                            О нас
                        </h2>
                        <div className="">
                            <article className="md:columns-2 gap-8">

                                <p className="md:text-xl text-sm text-left text-gray-500 my-6">
                                    <b>О бюро переводов</b>
                                    <br/>

                                    Бюро переводов &quot;Параллельный мир&quot; работает на рынке переводческих услуг с
                                    2006 года. Наш основной принцип - добиваться максимального результата в каждом
                                    проекте. С большинством клиентов мы сотрудничаем более 10 лет. Небольшое число
                                    штатных сотрудников и дистанционный способ работы позволяют свести к минимуму
                                    расходы на содержание компании, благодаря чему мы предлагаем достойные условия для
                                    переводчиков и минимальные цены для заказчиков.
                                </p>
                                <p className="md:text-xl text-sm text-left text-gray-500 my-6">
                                    <b>Почему бюро переводов называется &quot;Параллельный мир&quot;?</b>
                                    <br/>

                                    Не секрет, что все переводческие компании пользуются услугами внештатных
                                    переводчиков, для которых эта работа не является основной. Для них это и есть
                                    параллельный мир, в котором они, применяя свои профессиональные знания, одновременно
                                    совершенствуют и знания иностранного языка.
                                </p>
                                <p className="md:text-xl text-sm text-left text-gray-500 my-6">
                                    <b>Наша специализация</b>
                                    <br/>

                                    Бюро переводов &quot;Параллельный мир&quot; специализируется на переводах технических, юридических, медицинских текстов: инструкций, договоров, нормативных актов, регистрационных досье на лекарственные препараты и других материалов, требующих от переводчиков специальных знаний. Основной вид предлагаемых услуг - это письменный перевод текстов с иностранного языка на русский и с русского на иностранный &quot;под ключ&quot; с оформлением, максимально приближенным к оригиналу.
                                </p>
                                <p className="md:text-xl text-sm text-left text-gray-500 my-6">
                                    <b>Как с нами связаться</b>
                                    <br/>

                                    С 2021 года работаем в режиме электронного офиса. Связь по электронной почте и телефону с 9 до 18 часов в будние дни. По срочным заказам на связи 24/7.
                                    <br/>
                                    <Link href={'/contacts/'} className="text-sky-600 hover:text-sky-400">Контактная информация.</Link>
                                </p>

                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <Advantages/>
        </main>
        <Footer/>
    </div>
}