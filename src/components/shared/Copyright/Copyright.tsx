import styles from "./Copyright.module.scss";
import Link from "next/link";


export default function Copyright() {
    return <section className={styles.Copyright}>
        <div>
            <p className="text-md text-gray-400">
                © Бюро переводов Параллельный мир 2006-2025
            </p>
            <p className="text-sm text-gray-400 mt-5">
                Работа c сайтом регламентируется <Link href={'/'} className="text-blue-300 hover:text-white">Офертой</Link> и <br/>
                <Link href={'/'} className="text-blue-300 hover:text-white">Политикой конфиденциальности</Link>
            </p>
        </div>
    </section>
}