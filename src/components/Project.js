import "./projects.css";
import { AiFillGithub } from "react-icons/ai";

// Define an array of project data


export const Project = ({ img, title, liveLink, githubLink, date,desc }) => (
    <div className="project_container" onClick>
        <div className="project_img_container"> 
               <img src={img} alt={title} className="project_img" />
        </div>
     
     <h3>
          {/* <a href={liveLink} target="_blank" className="project_link" rel="noreferrer" aria-label={title}> */}
            {title}
        {/* </a> */}

     </h3>
      
        <p>{date}</p>
        <details> Read more</details>
        <button className="project_btn">Check out the project</button>
        {/* <a href={githubLink} target="_blank" rel="noreferrer" aria-label="icons to navigate to github repository">
            <AiFillGithub className="icon" />
        </a> */}
        
    </div>
);