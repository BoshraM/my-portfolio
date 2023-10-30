import "./hero.css";
import picture from "../../assests/PHOTO-2023-10-28-14-44-23.jpg";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

export const Hero = () => {
    const handleCVButtonClick = () => {
        window.open(
            "https://drive.google.com/file/d/1_qVNmCOOTSXd_Zidwh669QMm780MW4Vj/view?usp=drive_link",
            '_blank',
            'noopener noreferrer'
        );
    };

    return (
        <section className="hero">
            <div className="profile_container flex">
                <div className="img_container">
                    <img src={picture} alt="" className="hero_img" />
                </div>
                <div className="profile_content">
                    <p className="profile_name">Boshra Mahmoudi</p>

                    <p className="profile_role">Software Developer</p>
                    <button className="profile_btn">Hire Me</button>
                </div>
                <div className="hero_socials flex">
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

            </div>
            <div className="about_container">
                <div className="about_content">
                    <h1>About Me</h1>
                    <p>I'm a Full-stack developer based in the UK, where I live with my family and energetic son. With a lifelong love for games, puzzles, and books, along with a deep passion for nature, I'm ready to make a tech-powered impact in the world of software development.</p>
                </div>
                <div className="about_link">

                    <button className="about_btn" onClick={handleCVButtonClick}>Resume</button>


                    <button className="about_btn">Projects</button>

                </div>

            </div>

        </section >
    )
}