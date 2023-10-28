import "./projects.css";
import { AiFillGithub } from "react-icons/ai";

// Define an array of project data


export const Project = ({ img, title, liveLink, githubLink }) => (
    <div className="project_container">
        <img src={img} alt={title} className="project_img" />
        <a href={liveLink} target="_blank" className="project_link" rel="noreferrer">
            {title}
        </a>
        <a href={githubLink} target="_blank" rel="noreferrer">
            <AiFillGithub className="icon" />
        </a>
        <details></details>
    </div>
);