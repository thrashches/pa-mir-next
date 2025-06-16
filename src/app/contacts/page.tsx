import Translates from "@/components/sections/Translates/Translates";
import Advantages from "@/components/sections/Advantages/Advantages";
import Footer from "@/components/sections/Footer/Footer";
import Header from "@/components/sections/Header/Header";

export default function Page() {
    return <div className="flex flex-col items-center justify-between min-h-screen bg-white">
        <Header/>
        <main>
            <Translates/>

        </main>
        <Footer/>
    </div>
}