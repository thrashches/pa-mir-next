import styles from "./HelpWithTranslate.module.scss";
import Button from "@/components/ui/Button/Button";


export default function HelpWithTranslate() {
    return <section className={styles.HelpWithTranslate}>
        <div className="container mx-auto md:max-w-6xl md:flex items-center justify-between">
            <div>
                <article className="md:max-w-[600px] lg:max-w-[600px]">
                    <h2 className="md:text-4xl text-3xl text-left text-gray-900 font-bold">
                        Получите помощь с переводом
                    </h2>
                    <p className="text-xl text-left text-gray-500 my-3">
                        Свяжитесь с нами для бесплатной консультации и узнайте, как мы можем помочь вам.
                    </p>
                </article>
            </div>
            <div className="md:w-auto w-full">
                <Button>Связаться</Button>
            </div>
        </div>
    </section>
}