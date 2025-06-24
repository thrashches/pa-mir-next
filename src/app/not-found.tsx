import Head from "next/head";
import Footer from "@/components/sections/Footer/Footer";
import Header from "@/components/sections/Header/Header";
import GoToMain from "@/components/ui/GoToMain/GoToMain";

export default function NotFound() {
    return <div className="flex flex-col items-center justify-between min-h-screen bg-white dark:bg-gray-800">
        <Head>
            <title>Страница не найдена</title>
        </Head>
        <Header/>
        <main className="bg-white w-full">
            <section className="mx-auto py-20 px-4 w-full container flex flex-col flex-grow gap-20 items-center justify-center">
                <h1 className="text-3xl text-gray-900">404 | Страница не найдена</h1>
                <GoToMain/>
            </section>

        </main>
        <Footer/>
    </div>
}