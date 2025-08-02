'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";

export default function CookieConsentBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consentGiven = localStorage.getItem('cookieConsent');
        if (consentGiven !== 'true') {
            setVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'false');
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 shadow-lg z-50">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm md:text-base">
                    Мы используем файлы cookie для улучшения работы сайта. Продолжая использовать сайт,
                    вы соглашаетесь с нашей <Link href={"/privacy/"} className="text-blue-300 hover:text-blue-200 underline">
                    Политикой обработки персональных данных
                </Link>.
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={handleDecline}
                        className="px-4 py-2 text-sm bg-gray-600 hover:bg-gray-500 rounded transition-colors duration-300 cursor-pointer"
                    >
                        Отклонить
                    </button>
                    <button
                        onClick={handleAccept}
                        className="px-4 py-2 text-sm bg-sky-600 hover:bg-sky-500 rounded transition-colors duration-300 cursor-pointer"
                    >
                        Принять
                    </button>
                </div>
            </div>
        </div>
    );
}