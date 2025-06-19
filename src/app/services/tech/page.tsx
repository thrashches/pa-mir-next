import Head from "next/head";
import Header from "@/components/sections/Header/Header";
import Link from "next/link";
import {ChevronRight} from "@deemlol/next-icons";
import OrderBlock from "@/components/shared/OrderBlock/OrderBlock";
import Footer from "@/components/sections/Footer/Footer";

export default function Tech() {
    return <div className="flex flex-col items-center justify-between min-h-screen bg-white">
        <Head>
            <title>Технический перевод</title>
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
                        <Link href={'/services/tech/'} className={"inline-block text-sm text-gray-500 hover:text-gray-400"}>
                            Технический перевод
                        </Link>
                    </nav>
                    <article className="mx-auto">
                        <h2 className="md:text-5xl text-3xl text-left text-gray-900 font-bold">
                            Технический перевод
                        </h2>
                        <div className="text-xl text-justify text-gray-500 my-3 md:columns-2 gap-8">
                            <b>
                                Перевод технических и научных текстов
                            </b>
                            <br/>
                            <br/>
                            Технический перевод является приоритетным направлением деятельности бюро переводов «Параллельный мир».
                            <br/>
                            <br/>
                            Под термином&nsbp;&quot;технический перевод&quot; подразумевается перевод текстов технической направленности, в том числе рассчитанных на специалистов: технической документации и инструкций, научных статей, описаний программных изделий, учебников, справочников и других материалов
                            <br/>
                            <br/>
                            Основные принципы нашей работы:

                            <ul className="list-inside list-disc">
                                <li>
                                    подбор под конкретный проект переводчиков с учетом их специализации и опыта работы. При переводе сложных научных и технических текстов предпочтение отдается сотрудникам с высшим специальным (техническим, медицинским, юридическим) образованием
                                </li>
                                <li>
                                    активное взаимодействие с заказчиком по вопросам используемых терминов, стиля и вариантов оформления перевода
                                </li>
                                <li>
                                    обязательная координация работы переводчиков и проверка всех переводимых текстов опытными редакторами
                                </li>
                                <li>
                                    профессиональная верстка переведенного текста «один в один» с оригиналом (в случае необходимости).
                                </li>
                            </ul>

                            Предметом нашей гордости является то, что на протяжении уже нескольких лет клиентами бюро переводов &quot;Параллельный мир&quot; являются крупные промышленные, фармацевтические и торговые компании. Они по достоинству оценили качество наших технических переводов наряду с привлекательными ценами на все виды услуг.
                            <br/><br/>
                            Для детальной оценки стоимости и времени выполнения перевода рекомендуем выслать нам материалы, которые требуется перевести, указав желаемый срок готовности перевода и основные требования к оформлению, либо связаться с нами.


                        </div>
                    </article>
                </div>
            </section>
            <OrderBlock/>
        </main>
        <Footer/>
    </div>
}