import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export const FAQ = () => {

    const qusList = [
        {
            qus : "Do I need a personal injury report?",
            ans : "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
        },
        {
            qus : "How much is my case worth?",
            ans : "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
        },
        {
            qus : "What should I do right after car accidect",
            ans : "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
        },
        {
            qus : "How much is my case worth?",
            ans : "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
        },
        
    ]

    return (
        <section className=' container mt-[3rem] pb-[2rem] flex items-center justify-between'>
            <div className='w-[50%] h-full flex items-start justify-center flex-col'>
                <h1 className=' text-white text-[2.9rem]'>FAQ</h1>
                <p className=' text-stone-500'>
                    Amet minim mollit non deserunt ullamco <br /> est sit aliqua dolor do amet sint.
                </p>
            </div>
            <div className='w-[50%] h-full'>
            <Accordion type="single" collapsible>
                {qusList.map((ele , index) => (
                    <AccordionItem key={ele.qus} value={`item-${index}`}>
                        <AccordionTrigger>{ele.qus}</AccordionTrigger>
                        <AccordionContent className = "text-stone-500">
                            {ele.ans}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
            </div>
        </section>
    )
}
