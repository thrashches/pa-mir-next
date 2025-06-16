import Image from "next/image";


type FeatureProps = {
    title: string;
    text: string;
    icon: string;
}


export default function Feature(props: FeatureProps) {
    const { title, text, icon } = props;

    return <article className="flex flex-col items-center gap-4 p-4 md:max-w-xs">
        <div>
            <Image src={icon} alt={title} width={64} height={64} />
        </div>
        <div>
            <h4 className="text-center text-xl font-bold text-gray-900">
                {title}
            </h4>
        </div>
        <div>
            <p className="text-center text-md text-gray-500">
                {text}
            </p>
        </div>
    </article>
}