import Translates from "@/components/sections/Translates/Translates";
import Footer from "@/components/sections/Footer/Footer";
import Header from "@/components/sections/Header/Header";
import Head from "next/head";

export default function Page() {
    return <div className="flex flex-col items-center justify-between min-h-screen bg-white">
        <Head>
            <title>Контакты</title>
        </Head>
        <Header/>
        <main>
            <Translates/>

        </main>
        <Footer/>
    </div>
}