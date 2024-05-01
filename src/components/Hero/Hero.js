import "./hero.css";
import picture from "../../assests/profile.jpeg";

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
               <h1>Hi, I'm Boshra Mahmoudi</h1>  <p>A Full-stack developer who enjoys solving challenging problems in tech.<br/> I have lifelong love for games, puzzles and books.</p>
                <div className="profile_button_container">
                    <button className="profile_btn" onClick={handleCVButtonClick}>Resume</button>
                    <button className="profile_btn"><a href="mailto:gbBoshra@gmail.com" target="_blank" aria-label="Let's Talk" rel="noreferrer" className="profile_link">Let's Talk</a> </button>
                </div>     
            </div>
                {/* <div className="about_link">

                    <button className="about_btn" onClick={handleCVButtonClick}>Resume</button>
                    <button className="about_btn">Projects</button>

                </div> */}


        </section >
    )
}