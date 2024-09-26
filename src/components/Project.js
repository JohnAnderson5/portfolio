import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Project.css"; // Optional: for custom styling if needed

function Project({ title, description, link }) {
  const projectId = link.split("/").pop(); // Extract the project id from the GitHub link (or create your own ID system)

  return (
    <div className="card mb-4">
      {/* {image && <img src={image} className="card-img-top" alt={title} />} */}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{description}</p>
        {/* Use Link component to navigate to the detailed project page */}
        <Link to={`/projects/${projectId}`} className="btn btn-primary">
          View Project
        </Link>
      </div>
    </div>
  );
}

export default Project;
