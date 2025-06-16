import {JSX} from "react";


type AdvantageProps = {
    title: string;
    text: string;
}


export default function Advantage(props: AdvantageProps): JSX.Element {
    const {title, text} = props;
    return <div className="flex flex-col items-center gap-4 p-4 max-w-xs">
        <h4 className="text-xl text-sky-600 text-center font-bold">
            {title}
        </h4>
        <p className="md:text-md text-sm text-gray-500 text-center">
            {text}
        </p>
    </div>
}