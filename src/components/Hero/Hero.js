import "./hero.css";
import picture from "../../assests/PHOTO-2023-10-28-14-44-23.jpg";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

export const Hero = () => {
    const handleCVButtonClick = () => {
        window.open(
            "https://drive.google.com/file/d/1KhgfImbYbRNIbu_CQV7T1fD3WjZkbPC1/view?usp=sharing",
            '_blank',
            'noopener noreferrer'
        );
    };

    return (
        <section className="hero">

                <div className="img_container">
                    <img src={picture} alt="" className="hero_img" />
                </div>
            <div className="description">
               <h1>Hi, I'm Boshra Mahmoudi</h1>  <p>A Full-stack developer who enjoys soving challenging problems in tech. I have lifelong love for games, puzzles and books.</p>
                <button className="profile_btn"><a href="mailto:gbBoshra@gmail.com" target="_blank" aria-label="Let's Talk" rel="noreferrer">Hire Me</a> </button>
                
            </div>
           
                {/* 
                <div className="profile_content">
                    <p className="profile_name">Boshra Mahmoudi</p>

                    <p className="profile_role">Software Developer</p>
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
                <div className="about_content">
                    <h1>About Me</h1>
                   
                </div>
                <div className="about_link">

                    <button className="about_btn" onClick={handleCVButtonClick}>Resume</button>
                    <button className="about_btn">Projects</button> */}

                {/* </div> */}


        </section >
    )
}