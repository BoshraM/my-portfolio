import "./resume.css";
import { AiFillPhone } from "react-icons/ai";

export const Resume = () => {
    return (
        <div className="resume">
            <h1>BOSHRA MAHMOUDI</h1>
            <p>Software Developer</p>

            <ul className="contact-info">
                <li><AiFillPhone className="icon" /> 07930552076</li>
                <li>ESSEX, UK</li>
                <li>gbboshra@gmail.com</li>
                <li>Boshra-Mahmoudi</li>
                <li>BoshraM</li>
            </ul>

            <div className="summary">
                <p>
                    As a Full-stack graduate, I'm passionate about using technology to
                    solve challenges and apply my problem-solving skills. My experience in
                    various projects at Code Your Future has equipped me with the ability
                    to develop solutions and collaborate effectively with fellow
                    developers. I've also honed my communication and technical skills,
                    ensuring success in any work environment.
                </p>
            </div>

            <div className="section">
                <h2>Experience</h2>
                <p>
                    <strong>Full-stack Developer program</strong> | Sep 2022 - present
                    <br />
                    <em>Code Your Future</em> | London, UK
                </p>
                <ul>
                    <li>Completed modules in HTML, CSS, JavaScript, React, Node.js, PostgreSQL, and Lean methodologies.</li>
                    <li>Gained practical experience in cross-functional developer teams.</li>
                    <li>Proficient in modern product development methodologies such as Agile.</li>
                </ul>
            </div>

            <div className="section">
                <h2>KEY PROJECTS</h2>
                <p>
                    <strong>Final Project: CYF Progress Tracker</strong> | Role: Full-stack Developer | Jun - Jul
                    <br />
                    Used Technologies: React, Node.js, Express, PSQL, Migration, Git, Postman, Slack, Google Meet, Miro, Figma
                </p>
                <ul>
                    <li>Acted as a liaison between the product owner and the development team of 4 members, ensuring clear client requirements.</li>
                    <li>Proficiently managed both Front-end and Back-end development, guiding the project from inception to completion.</li>
                    <li>Responsible for GitHub issue management and task allocation, fostering efficient teamwork.</li>
                </ul>

                <p>
                    <strong>Buddy Group Project: EMPOWERED</strong> | Role: Front-end Developer | Dec - Jan
                    <br />
                    Used Technologies: HTML5, CSS3, Slack, Trello
                </p>
                <ul>
                    <li>Active front-end development in the Buddy Group Project.</li>
                    <li>Engaged in daily team meetings, eagerly awaited code reviews, and implemented suggestions.</li>
                    <li>Juggled project commitments with household duties and infant child care.</li>
                </ul>

                <p>
                    <strong>TEAM-AMAZON-CLONE</strong> | Role: Front-end Developer | April
                    <br />
                    Used Technologies: HTML5, CSS3, Javascript, Slack, Trello, Google Meet
                </p>
                <ul>
                    <li>Contributed to a team of 15 people in developing a Front-end website clone of Amazon.</li>
                    <li>Participated in three sub-teams, offering live coding and code explanation to teammates.</li>
                    <li>Actively learned from fellow team members while sharing my skills and knowledge.</li>
                </ul>
            </div>

            <div className="section">
                <h2>Career Break</h2>
                <p>
                    <strong>Relocation and Full-Time Parent</strong> | Dec 2019 - Sep 2022
                </p>
                <p>
                    After relocating to the UK just before the COVID-19 pandemic, I focused on enhancing my language skills, obtaining a UK driving license, and achieving a suitable IELTS score. Concurrently, I explored potential careers and discovered my passion for software development. This drove me to enroll in the Code Your Future course, marking a deliberate shift in my career path.
                </p>
            </div>

            <div className="section">
                <h2>Founder and Entrepreneur(Retail)</h2>
                <p>
                    <strong>Kotali Zhical</strong> | Apr 2017 - Nov 2022
                </p>
                <ul>
                    <li>Built a robust customer network, leading to a 20% sales growth within the first six months of operation.</li>
                    <li>Cultivated customer loyalty and retention, resulting in a significant increase of over 50% in customer base.</li>
                </ul>
            </div>

            <div className="section">
                <h2>Maths Tutor</h2>
                <p>
                    <strong>Self Employed</strong> | Oct 2014 - Aug 2018
                </p>
                <p>
                    Simplified complex mathematical concepts and used engaging, interactive methods to teach methods and strategies for better understanding and comprehension.
                </p>
            </div>

            <div className="section">
                <h2>EDUCATION</h2>
                <p>
                    <strong>Bachelor of Engineering in Urban Development</strong> | 2009 - 2013
                    <br />
                    <em>University of Kurdistan</em> | Sanandaj, Iran
                </p>
                <p>
                    Expert urban engineering graduate specializing in infrastructure planning, sustainability, and technology. Proficient in various tools, including GIS and AutoCAD. Skilled in data collection, analysis, and deriving actionable results.
                </p>
            </div>

            <div className="section">
                <h2>ADDITIONAL INFORMATION</h2>
                <p>Languages: English, Kurdish, Farsi</p>
            </div>
        </div>
    );
};
