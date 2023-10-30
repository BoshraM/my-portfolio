import "./projects.css";
import { AiFillGithub } from "react-icons/ai";

// Define an array of project data


export const Project = ({ img, title, liveLink, githubLink, date }) => (
    <div className="project_container">
        <img src={img} alt={title} className="project_img" />
        <a href={liveLink} target="_blank" className="project_link" rel="noreferrer" aria-label="icons to navigate to project demo">
            {title}
        </a>
        <p>{date}</p>
        <a href={githubLink} target="_blank" rel="noreferrer" aria-label="icons to navigate to github repository">
            <AiFillGithub className="icon" />
        </a>
        <details></details>
    </div>
);