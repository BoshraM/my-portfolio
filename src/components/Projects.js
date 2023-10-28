import React from "react";
import "./projects.css";
import { Project } from "./Project";


const projectsData = [
    {
        img: require("../assests/cyf-progress-tracker.png"),
        title: "CYF PROGRESS Tracker",
        liveLink: "https://starter-kit-j8jj.onrender.com/",
        githubLink: "https://github.com/BoshraM/ldn9-Ctrl-Shift-Learn",
    },
    {
        img: require("../assests/full-stack.png"),
        title: "Video Recommendation",
        liveLink: "https://fullstack-assesment-egxj.onrender.com/",
        githubLink: "https://github.com/BoshraM/Full-Stack-Project-Assessment",
    },
    {
        img: require("../assests/node-farm.png"),
        title: "Node Farm",
        liveLink: "https://node-farm-boshram.glitch.me/",
        githubLink: "https://github.com/BoshraM/my-complete-node-bootcamp",
    },
    {
        img: require("../assests/node-farm.png"),
        title: "Node Farm",
        liveLink: "https://node-farm-boshram.glitch.me/",
        githubLink: "https://github.com/BoshraM/my-complete-node-bootcamp",
    },
];
export const Projects = () => {
    return (
        <div className="projects">
            <h1 className="project_title">PROJECTS</h1>
            <div className="projects_container">

                {projectsData.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>

        </div>

    );
};