'use client'
import Button from "@/components/ui/Button/Button";
import {useRouter} from "next/navigation";


export default function Greeting() {
    const router = useRouter();

    return <section className="flex flex-col items-center justify-center py-20 gap-20 md:max-w-6xl px-2 mx-auto">
        <div className="block rounded-full bg-sky-600 text-white text-xs py-1 px-3">
            Бюро переводов
        </div>
        <div className="">
            <h1 className="text-white font-extrabold md:text-7xl text-4xl text-center">
                Ваш надёжный партнёр в мире переводов
            </h1>
        </div>
        <div>
            <p className="text-gray-400 text-xl text-center">
                Гарантируем высокое качество и соблюдение сроков выполнения заказов.
            </p>
        </div>
        <div className="flex flex-col gap-5 items-center">
            <Button onClick={() => router.push('/contacts/')}>Заказать перевод</Button>
            <p className="text-sm text-gray-400 text-center">
                Ответим на все ваши вопросы.
            </p>
        </div>
        <div>

        </div>
    </section>
}