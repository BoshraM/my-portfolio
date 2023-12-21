import React from "react";
import "./projects.css";
import { Project } from "./Project";


const projectsData =
    [{
        img: require("../assests/cyf-progress-tracker.png"),
        title: "ApplySmart",
        liveLink: "https://applysmartc.onrender.com/",
        githubLink: "https://github.com/Bahare09/ApplySmart",
        date: "In Progress"
    },
    {
        img: require("../assests/cyf-progress-tracker.png"),
        title: "CYF PROGRESS Tracker",
        liveLink: "https://starter-kit-j8jj.onrender.com/",
        githubLink: "https://github.com/BoshraM/ldn9-Ctrl-Shift-Learn",
        date: "JUL 2023"
    },
    {
        img: require("../assests/full-stack.png"),
        title: "Video Recommendation",
        liveLink: "https://fullstack-assesment-egxj.onrender.com/",
        githubLink: "https://github.com/BoshraM/Full-Stack-Project-Assessment",
        date: "JUN 2023"
    },
    {
        img: require("../assests/node-farm.png"),
        title: "Node Farm",
        liveLink: "https://node-farm-boshram.glitch.me/",
        githubLink: "https://github.com/BoshraM/my-complete-node-bootcamp",
        date: "MAY 2023"
    },
    {
        img: require("../assests/buddy project.png"),
        title: "EMPOWERED",
        liveLink: "https://empowered.netlify.app/07-combined-preview/01-home/",
        githubLink: "https://github.com/BoshraM/buddy-group-project",
        date: "DEC 2023"
    },
    {
        img: require("../assests/amazonshop.png"),
        title: "Amazon-Clone",
        liveLink: "https://london9-amazon-clone-50-react-project.netlify.app/",
        githubLink: "https://github.com/ShayanMahnam/team-amazon-clone",
        date: "APR 2023"
    },
    {
        img: require("../assests/hotel-react.png"),
        title: "CYF-Hotel-React",
        liveLink: "https://cyf-boshram-hotel-react.netlify.app/https://cyf-boshram-hotel-react.netlify.app/",
        githubLink: "https://github.com/BoshraM/cyf-hotel-react",
        date: "APR 2023"
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