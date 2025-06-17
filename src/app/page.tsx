import Footer from "@/components/sections/Footer/Footer";
import MainPageHeader from "@/components/sections/MainPageHeader/MainPageHeader";
import Translates from "@/components/sections/Translates/Translates";
import Advantages from "@/components/sections/Advantages/Advantages";
import Faq from "@/components/sections/Faq/Faq";
import HelpWithTranslate from "@/components/sections/HelpWithTranslate/HelpWithTranslate";
import Head from "next/head";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-between min-h-screen bg-white dark:bg-gray-800">
            <Head>
                <title>Главная</title>
            </Head>
            <MainPageHeader/>
            {/*<Header/>*/}
            <main className="bg-white w-full">
                <Translates/>
                <Advantages/>
                <Faq/>
                <HelpWithTranslate/>
            </main>
            <Footer/>
        </div>
    );
}
