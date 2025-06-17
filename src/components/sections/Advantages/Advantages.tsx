import styles from "./Advantages.module.scss";
import Advantage from "@/components/shared/Advantage/Advantage";
import Image from "next/image";


export default function Advantages() {
    const advantages: Array<{
        title: string,
        text: string,
    }> = [
        {
            title: "Опыт",
            text: "Работаем с 2006 года. За это время удалось собрать и сохранить профессиональную команду переводчиков."
        },
        {
            title: "Качество",
            text: "Мы обеспечиваем качественный перевод при скорости 500 страниц в неделю и более"
        },
        {
            title: "Сроки",
            text: "Неукоснительное соблюдение сроков — ни одного нарушения даже в самых сложных и масштабных проектах."
        },
        {
            title: "Цены",
            text: "По соотношению цена/качество наше предложение одно из лучших в Москве."
        }
    ]

    return <section className={styles.Advantages}>
        <div className="container mx-auto md:max-w-6xl">
            <article className="md:max-w-[600px] lg:max-w-[600px]">
                <h2 className="md:text-5xl text-3xl text-left text-gray-900 font-bold">
                    Наши преимущества
                </h2>
                <p className="text-xl text-left text-gray-500 my-3">
                    Каждый проект проходит строгую проверку, чтобы обеспечить точность и соответствие вашим требованиям.
                </p>
            </article>
            <div className="md:grid md:grid-cols-2 gap-8 flex flex-col-reverse items-center">
                <div className="grid grid-cols-2 gap-4">
                    {advantages.map((a) => <Advantage key={a.title} title={a.title} text={a.text}/>)}
                </div>
                <div className="relative w-full h-full md:min-h-auto min-h-[100vw]">
                    <Image src={(process.env.NEXT_PUBLIC_BASE_PATH||"") + "/img/png/advantages.png"}
                           alt={"Наши преимущества"} fill={true} objectFit={'contain'}/>
                </div>
            </div>
        </div>

    </section>
}