"use client";
import {useRouter} from "next/navigation";

export default function GoToMain() {
    const router = useRouter();

    return <button
        className='rounded-lg bg-sky-600 hover:bg-sky-500 transition-all duration-300 text-center text-white px-4 py-3 w-full sm:max-w-[200px]'
        onClick={() => router.push('/')}
    >
        На главную
    </button>
}