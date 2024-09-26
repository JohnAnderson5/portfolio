import React from "react";

const About = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">About Me</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <p className="lead text-center">
            Hi! I’m <strong>John Anderson</strong>, a Web Developer with over 3
            years of experience delivering secure, scalable, and AI-driven
            applications. My journey has been a blend of backend and full-stack
            development across various industries, optimizing system
            performance, and leveraging data-driven solutions to enhance
            application efficiency.
          </p>

          <p className="text-center">
            I hold a Bachelor of Science in Computer Engineering from
            Pennsylvania State University and am currently pursuing a Master’s
            degree in Artificial Intelligence and Security at Johns Hopkins
            University. My skills span Full Stack Development, AI & Machine
            Learning, Cloud Technologies, API Development, and DevOps.
          </p>

          <p className="text-center">
            Throughout my career, I’ve contributed to high-impact projects,
            including my time at Ford Credit, where I developed and optimized
            performance-critical backend systems, and at Outlier.AI, where I
            improved AI accuracy through cutting-edge reinforcement learning
            techniques.
          </p>

          <p className="text-center">
            I’m proficient in tools and platforms such as Firebase, Kubernetes,
            Jenkins, Splunk, AWS, and H2O.ai, with hands-on experience in system
            monitoring, Unix, Windows, SQL, and automation technologies.
          </p>

          <p className="text-center">
            In my free time, I enjoy working on personal projects like my Lift
            Tracker and Mileage Tracker, and I keep active through weight
            lifting and walking. I’m always excited to learn new technologies
            and further develop my expertise in AI, cloud infrastructure, and
            secure software development.
          </p>

          <div className="text-center mt-4">
            <a href="/projects" className="btn btn-primary mx-2">
              View My Projects
            </a>
            <a href="/contact" className="btn btn-outline-secondary mx-2">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
