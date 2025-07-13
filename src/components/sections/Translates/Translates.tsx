import Feature from "@/components/shared/Feature/Feature";


export default function Translates() {


    return <section className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:justify-around gap-6 py-10">
            <Feature
                title={"Технический"}
                text={"Перевод руководств по эксплуатации, инструкций пользователя, чертежей и другой технической документации, с сохранением точности терминологии"}
                icon={(process.env.NEXT_PUBLIC_BASE_PATH||"") + "/img/svg/features/tech.svg"}
            />
            <Feature
                title={"Юридический"}
                text={"Перевод договоров, соглашений, законодательных актов учредительных и других правовых документов с обеспечением юридической точности и соответствия оригиналу"}
                icon={(process.env.NEXT_PUBLIC_BASE_PATH||"") + "/img/svg/features/jur.svg"}
            />
            <Feature
                title={"Медицинский/фармацевтический перевод"}
                text={"Перевод регистрационных досье, инструкций по медицинскому применению лекарственных средств, фармакопейных статей, отчетов о клинических исследованиях и других документов медицинской/фармацевтический тематики"}
                icon={(process.env.NEXT_PUBLIC_BASE_PATH||"") + "/img/svg/features/med.svg"}
            />
        </div>
    </section>
}