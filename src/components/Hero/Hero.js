import { Link } from "react-scroll"
import "./hero.css"
import picture from "../../assests/IMG_0607.jpg"
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

export const Hero = () => {
    return (
        <section className="hero flex">
            <div className="profile_container flex">
                <div className="img_container">
                    <img src={picture} alt="" className="hero_img" />
                </div>
                <div className="profile_content">
                    <p className="profile_name">Boshra Mahmoudi</p>

                    <p className="profile_role">Software Developer</p>
                    <Link><button className="profile_btn">Hire Me</button></Link>
                </div>
                <div className="hero_socials flex">
                    <AiFillLinkedin className='icon' />
                    <AiFillGithub className="icon" />
                    <AiOutlineMail className='icon' />
                </div>

            </div>
            <div className="about_container">
                <div className="about_content">
                    <h1>About Me</h1>
                    <p>a full-stack developer graduate of Code Your Future, I am passionate about using technology to solve problems and face challenges that allow me to put my problem-solving skills into action. Participating in different projects at Code Your Future has allowed me to develop great solutions and collaborate with other developers while building the communication and technical skills needed to excel in any work environment. This career has allowed me to learn new skills and boost my confidence.</p>
                </div>
                <div className="about_link">
                    <Link><button className="about_btn">Resume</button></Link>
                    <Link><button className="about_btn">Projects</button></Link>

                </div>

            </div>

        </section >
    )
}