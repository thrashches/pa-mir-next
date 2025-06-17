import Button from "@/components/ui/Button/Button";


export default function OrderBlock() {
    return <section className="w-full py-20 px-4 border-t-1 border-dashed border-t-sky-400" style={{
        background: 'radial-gradient(50.00% 50.00% at 50% 50%,rgba(247, 248, 249, 0),rgb(247, 248, 249) 100%)'
    }}>
        <div className="container mx-auto md:max-w-6xl flex md:flex-row flex-col justify-between items-center gap-8">
            <article className="md:max-w-[750px]">
                <h2 className="md:text-5xl text-3xl text-left text-gray-900 font-bold">
                    Заказать расчет перевода
                </h2>
                <p className="text-xl text-left text-gray-500 my-3">
                    Мы работаем «под ключ» с оформлением, максимально приближённым к оригиналу.
                </p>
            </article>
            <div className="md:w-auto w-full">
                <Button>Заказать</Button>
            </div>
        </div>

    </section>
}