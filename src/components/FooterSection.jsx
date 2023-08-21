import { SectionWrapper } from "../hoc"

const Footer = ()=>{
    return(
        <div className="flex justify-center">
            <div className="text-red">
                <p>Atrributions</p>
                <p><i>Tutorial: JavaScript Mastery on Youtube</i></p>
                <p><i></i></p>
            </div>      
        </div>
    )
}

export default SectionWrapper(Footer, "");