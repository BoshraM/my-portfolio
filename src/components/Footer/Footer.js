import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import "./footer.css"

export const Footer = () => {

    return (
        <section className="footer">

            
                <div className="footer_socials flex">
                    <a href="https://www.linkedin.com/in/boshra-mahmoudi/" target="blank" aria-label="icons to navigate to linkedin">
                        <AiFillLinkedin className='icon' />
                    </a>
                    <a href="https://github.com/BoshraM" target="blank" aria-label="icons to navigate to github">
                        <AiFillGithub className="icon" />
                    </a>
                    <a href="mailto:gbBoshra@gmail.com" target="_blank" aria-label="icons to navigate to email" rel="noreferrer">
                        <AiOutlineMail className='icon' />
                    </a>
            </div>
           
                {/* <div className="resume">
                    <button className="about_btn" onClick={handleCVButtonClick}>Resume</button>
                 </div> */}

        </section >
    )
}