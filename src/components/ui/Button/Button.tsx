type ButtonProps = {
    children?: React.ReactNode;
}

export default function Button(props: ButtonProps) {
    const {children} = props;

    return <button className="rounded-lg bg-sky-600 hover:bg-sky-500 transition-all duration-300 text-center text-white px-4 py-3 w-full">
        {children}
    </button>
}