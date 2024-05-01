import "./projects.css";

export const Project = ({ img, title, liveLink, githubLink, date,desc }) => (
    <div className="project_container">
        <div className="project_img_container"> 
               <img src={img} alt={title} className="project_img" />
        </div>
     
     <h3>
        <a href={liveLink} target="_blank" className="project_link" rel="noreferrer" aria-label={title}>
            {title}
        </a>
     </h3>
      
        <p className="p_date">{date}</p>
        {/* <details>
            <summary>Read more</summary>
             <p></p>
        </details> */}
        <button className="project_btn">Check out the project</button>
        {/* <a href={githubLink} target="_blank" rel="noreferrer" aria-label="icons to navigate to github repository">
            <AiFillGithub className="icon" />
        </a> */}
        
    </div>
);