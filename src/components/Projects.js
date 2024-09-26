import React from "react";
import Project from "./Project";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: "lift-tracker",
    title: "Lift Tracker App",
    description: "A web application to track lifting progress over time.",
    githubLink: "https://github.com/johnanderson5/lift-tracker",
  },
  {
    id: "mileage-tracker",
    title: "Mileage Tracker",
    description: "An app to track mileage for business expenses.",
    githubLink: "https://github.com/johnanderson5/mileage-tracker",
  },
  {
    id: "video-lens",
    title: "Video Lens",
    description: "An app to extract information from YouTube videos.",
    githubLink: "https://github.com/johnanderson5/video-lens",
  },
  {
    id: "transcriber",
    title: "Transcriber",
    description: "An app to extract information from YouTube videos.",
    githubLink: "https://github.com/johnanderson5/transcriber",
  },
];

function Projects() {
  const navigate = useNavigate();

  const handleViewProject = (project) => {
    navigate(`/projects/${project.id}`, { state: project }); // Pass project data as state
  };

  return (
    <div className="container">
      <h1 className="my-4">My Projects</h1>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-6" key={index}>
            <Project
              title={project.title}
              description={project.description}
              link={project.githubLink}
              onViewProject={() => handleViewProject(project)} // Pass project data on click
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
