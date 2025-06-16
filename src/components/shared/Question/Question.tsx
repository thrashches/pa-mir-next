"use client"

import {ArrowDownCircle, ArrowUpCircle} from "@deemlol/next-icons";

import {JSX, useState} from "react";


type QuestionProps = {
    question: string,
    answer: string,
}

export default function Question(props: QuestionProps): JSX.Element {
    const {question, answer} = props;
    const [isOpen, setIsOpen] = useState(false);

    return <article className="grid grid-cols-6 mx-auto rounded-lg max-w-[750px] bg-gray-50 p-8 my-10">
        <div className="col-start-1 col-end-6">
            <h5 className="text-xl font-bold text-gray-900 text-left">
                {question}
            </h5>
            <p className={`text-md text-left text-gray-500 overflow-hidden transition-all duration-400 ease-in-out ${
                isOpen ? 'max-h-max mt-12 opacity-100' : 'max-h-0 opacity-0'
            }`}>
                {answer}
            </p>
        </div>
        <div className="ml-auto">
            <button className="mt-4 transition-all duration-300" onClick={() => setIsOpen(!isOpen)}>
                {isOpen?
                    <ArrowUpCircle size={24} color="rgb(187, 195, 207)" />:
                    <ArrowDownCircle size={24} color="rgb(187, 195, 207)" />
                }
            </button>
        </div>
    </article>
}