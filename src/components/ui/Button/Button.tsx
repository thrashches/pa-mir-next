type ButtonProps = {
    children?: React.ReactNode;
    onClick?: () => void;
}

export default function Button(props: ButtonProps) {
    const {children, onClick} = props;

    return <button className="rounded-lg bg-sky-600 hover:bg-sky-500 transition-all duration-300 text-center text-white px-4 py-3 w-full"
        onClick={onClick}
    >
        {children}
    </button>
}