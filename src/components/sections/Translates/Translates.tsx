import Feature from "@/components/shared/Feature/Feature";


export default function Translates() {


    return <section className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:justify-around gap-6 py-10">
            <Feature
                title={"Технический"}
                text={"Перевод документации, инструкций, чертежей и другой технической информации с сохранением точности терминологии"}
                icon={(process.env.NEXT_PUBLIC_BASE_PATH||"") + "/img/svg/features/tech.svg"}
            />
            <Feature
                title={"Юридический"}
                text={"Перевод договоров, законов, справок и других правовых документов с соблюдением юридической точности и соответствия оригиналу."}
                icon={(process.env.NEXT_PUBLIC_BASE_PATH||"") + "/img/svg/features/jur.svg"}
            />
            <Feature
                title={"Медицинский"}
                text={"Перевод медицинских документов, включая диагнозы, инструкции, исследования, с учётом профессиональной терминологии."}
                icon={(process.env.NEXT_PUBLIC_BASE_PATH||"") + "/img/svg/features/med.svg"}
            />
        </div>
    </section>
}