import styles from "./CloseBtn.module.scss";
import Close from "../../../../public/img/svg/close.svg";
import Image from "next/image";


type CloseBtnProps = {
    onClick?: () => void;
}

export default function CloseBtn(props: CloseBtnProps) {
    return <button className={styles.CloseBtn}><Image
        className="w-auto"
        src={Close}
        alt="Закрыть"
        onClick={props.onClick}
    /></button>
}