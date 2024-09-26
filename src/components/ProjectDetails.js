import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const projectData = {
  "lift-tracker": {
    title: "Lift Tracker App",
    description: "A web application to track lifting progress over time.",
    images: ["/images/LiftTracker.png"],
    video: "", // Add a link to your demo video if available
    githubLink: "https://github.com/johnanderson5/lift-tracker",
  },
  "mileage-tracker": {
    title: "Mileage Tracker",
    description: "An app to track mileage for business expenses.",
    images: ["/images/MileageTracker0.png", "/images/MileageTracker1.png"],
    video: "", // Add a link to your demo video if available
    githubLink: "https://github.com/johnanderson5/mileage-tracker",
  },
  "video-lens": {
    title: "Video Lens",
    description: "An app to extract information from YouTube videos.",
    images: ["/images/VideoLens.png"],
    video: "", // Add a link to your demo video if available
    githubLink: "https://github.com/johnanderson5/video-lens",
  },
  transcriber: {
    title: "Transcriber",
    description: "Creates an analysis of .mov files from my iPhone",
    images: ["/images/Transcriber0.png", "/images/Transcriber2.png"],
    video: "", // Add a link to your demo video if available
    githubLink: "https://github.com/johnanderson5/transcriber",
  },
};
function ProjectDetails() {
  const { projectId } = useParams();
  const project = projectData[projectId];
  const navigate = useNavigate(); // Hook for navigating

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div className="container my-5">
      <h1 className="mb-4">{project.title}</h1>

      {/* Check if the project has images and display them */}
      {project.images && project.images.length > 0 && (
        <div className="image-gallery mb-4">
          {project.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${project.title} screenshot ${index + 1}`}
              className="img-fluid mb-2"
              style={{ maxWidth: "50%", height: "auto" }} // Adjust width as needed
            />
          ))}
        </div>
      )}

      <p>{project.description}</p>

      {project.video && (
        <div className="embed-responsive embed-responsive-16by9 mb-4">
          <iframe
            className="embed-responsive-item"
            src={project.video}
            title="Video demo"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <a
        href={project.githubLink}
        className="btn btn-primary mb-3"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub
      </a>
      <br />
      {/* Button to go back to Projects */}
      <button
        onClick={() => navigate("/projects")}
        className="btn btn-secondary"
      >
        Go Back to Projects
      </button>
    </div>
  );
}

export default ProjectDetails;
