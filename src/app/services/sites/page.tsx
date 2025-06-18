import Head from "next/head";
import Header from "@/components/sections/Header/Header";
import Link from "next/link";
import {ChevronRight} from "@deemlol/next-icons";

import OrderBlock from "@/components/shared/OrderBlock/OrderBlock";
import Footer from "@/components/sections/Footer/Footer";

export default function Sites() {
    return <div className="flex flex-col items-center justify-between min-h-screen bg-white">
        <Head>
            <title>Перевод сайтов</title>
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
                        <Link href={'/services/sites/'} className={"inline-block text-sm text-gray-500 hover:text-gray-400"}>
                            Перевод сайтов
                        </Link>
                    </nav>
                    <article className="mx-auto">
                        <h2 className="md:text-5xl text-3xl text-left text-gray-900 font-bold">
                            Перевод сайтов
                        </h2>
                        <div className="text-xl text-justify text-gray-500 my-3 md:columns-2 gap-8">
                            <b>
                                Перевод веб-страниц
                            </b>
                            <br/>
                            <br/>
                            По данным специализированных компаний, за период с 2006 по 2025 год количество сайтов во всемирной сети увеличилось со 100 миллионов до 1 миллиарда. Ежедневно в Интернет появляется 28 тысяч новых сайтов. Активными из них являются примерно 18 %. Статистика говорит о том, что из общего числа посетителей веб-сайтов Рунета россияне составляют чуть более 50 %. Еще около 10% - жители стран СНГ. Из оставшихся 40% подавляющее большинство приходится на США и страны Европы.
                            <br/>
                            Это позволяет сделать вывод, что версия сайта (или хотя бы его основных страниц) на иностранном языке позволяет привлечь внимание дополнительных посетителей из-за рубежа. Многие российские компании это понимают, поэтому заказы по переводу сайтов на иностранные языки (в первую очередь на английский) возникают достаточно часто.
                            <br/>
                            Бюро переводов «Параллельный мир» выполняет переводы веб-сайтов с иностранных языков и на иностранные языки. Этот вид услуг имеет свою специфику. Интернет-ресурсы потенциально могут иметь колоссальную аудиторию. Естественно, некачественно переведенный сайт будет играть роль антирекламы.
                            <br/>
                            При переводе сайтов перед переводчиком могут возникать самые разнообразные задачи: например, передача уникального стиля, свойственного рекламным и художественным текстам или перевод технической информации. Требования к качеству предъявляются самые высокие, и далеко не каждый переводчик в состоянии их выполнить. Самый надежный вариант - поручить перевод или редактирование текста перевода web-сайта носителю языка. Это существенно повышает стоимость работы. Перевод сайта, выполненный носителем языка, стоит не менее 20 долларов за страницу.
                            <br/>
                            Если бюджет ограничен, а перевести свой веб-сайт на иностранный язык надо во что бы то ни стало, нужно сделать хотя бы базовый перевод, поскольку информация на иностранном языке, пусть даже и подготовленная не носителем языка,  уже лучше, чем ничего. Если перевод сайта, выполнен грамотно и аккуратно, он будет правильно понят и оценен.
                            <br/>
                            Просим отнестись с пониманием к тому, что для точной оценки стоимости перевода Вашего сайта нам может потребоваться как минимум список его страниц. В случае если таких страниц более 20, мы попросим предоставить их нам в текстовом формате (DOC, TXT).

                        </div>
                    </article>
                </div>
            </section>
            <OrderBlock/>
        </main>
        <Footer/>
    </div>
}