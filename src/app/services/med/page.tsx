import Head from "next/head";
import Header from "@/components/sections/Header/Header";
import Link from "next/link";
import {ChevronRight} from "@deemlol/next-icons";
import OrderBlock from "@/components/shared/OrderBlock/OrderBlock";
import Footer from "@/components/sections/Footer/Footer";

export default function Med() {
    return <div className="flex flex-col items-center justify-between min-h-screen bg-white">
        <Head>
            <title>Медицинский перевод</title>
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
                        <Link href={'/services/med/'} className={"inline-block text-sm text-gray-500 hover:text-gray-400"}>
                            Медицинский перевод
                        </Link>
                    </nav>
                    <article className="mx-auto">
                        <h2 className="md:text-5xl text-3xl text-left text-gray-900 font-bold">
                            Медицинский перевод
                        </h2>
                        <p className="text-xl text-justify text-gray-500 my-3 md:columns-2 gap-8">
                            <b>
                                Услуги по переводу медицинских и фармацевтических текстов
                            </b>
                            <br/>
                            <br/>
                            Бюро переводов &quot;Параллельный мир&quot; предлагает услуги профессионального перевода текстов по медицине, фармацевтике, биологии и химии.   Мы занимаемся переводами в этих областях с 2007 года и готовы предложить к Вашим услугам весь накопленный опыт, лучших и <b>самых ответственных переводчиков</b>, обладающих профессиональными знаниями в области медицины и фармацевтики наряду с высоким уровнем владения как иностранным, так и родным языком.
                            <br/>
                            <br/>
                            Мы знаем требования нормативных актов Российской Федерации, ЕАЭС, регулирующих органов Евросоюза, США и других стран к документам регистрационных досье на лекарстваенные препараты, отслеживаем и учитываем вносимые в них изменения, используем современную базу терминов, что позволяет качественно выполнять переводы как с иностранных язков на русский, так и наоборот.
                            Предлагаем разумные цены и максимально сжатые сроки перевода документов регистрационных досье, в том числе
                            нормативных документов по качеству
                            сертификатов анализа активных фармацевтических субстанций и вспомогательных веществ
                            периодических отчетов о мониторинге безопасности препаратов (PSUR)
                            описаний производственных процессов
                            досье производственных участков
                            отчетов о доклинических и клинических исследованиях препаратов и сопутствующих документов
                            кратких характеристик лекарственных средств (SMPC), инструкций по медицинскому применению (PIL, PL)
                            отчетов о валидации методов анализа,
                            а также фармакопейных статей уведомлений регуляторных органов отчетов о проведении инспектирования и других документов.
                            <br/>
                            <br/>
                            Мы приложим все усилия, чтобы наше сотрудничество было максимально эффективным.

                        </p>
                    </article>
                </div>
            </section>
            <OrderBlock/>
        </main>
        <Footer/>
    </div>
}