// ProjectShowcase.jsx
import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'GramConnect:- Digital Gram Panchayat Platform',
    status: 'LIVE',
    statusClass: 'status-completed',
    description:
      'MERN-based platform digitizing rural governance with secure login, role-based access, and admin dashboards; enabled certificate applications, grievance redressal, and real-time status tracking.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    image: '/assets/p2.jpg',
    filename: 'gramconnect_platform.project',
    codeLink: 'https://github.com/kesharwaniayush/GramConnect-main.git',
    liveLink: 'https://gram-connect.vercel.app/'
  },
  {
    id: 2,
    title: 'AI-Resume-Analyzer',
    status: 'LIVE',
    statusClass: 'status-completed',
    description:
      'AI Resume Analyzer is a web application that analyzes resumes for ATS compatibility by evaluating keyword relevance, formatting, and alignment with job descriptions using AI-driven scoring, helping users optimize their resumes for better shortlisting outcomes.',
    tech: ['React.js', 'Tailwind CSS', 'Typescript', 'Puter.js'],
    image: '/assets/p3.png',
    filename: 'AI-Resume-Analyzer.project',
    codeLink: 'https://github.com/kesharwaniayush/Hackathon_Hacktoberfest_2025.git',
    liveLink: 'https://hackathon-hacktoberfest-2025.vercel.app/'
  },
  {
    id: 3,
    title: 'LegaliTea AI - Legal Document Analysis Platform',
    status: 'LIVE',
    statusClass: 'status-completed',
    description:
      'LegaliTea AI is an AI-powered legal document analysis platform that transforms complex contracts into clear, actionable insights using Llama 3.3-70B, with multi-language support and a scalable full-stack architecture.',
    tech: ['Typescript', 'React.js', 'Node.js', 'Express.js'],
    image: '/assets/p4.png',
    filename: 'LegaliTeaAI.project',
    codeLink: 'https://github.com/kesharwaniayush/LegaliTeaAI.git',
    liveLink: 'https://legalitea-genai.vercel.app/'
  },
  {
    id: 4,
    title: 'Donor Sync – Blood Bank Management System',
    status: 'LIVE',
    statusClass: 'status-completed',
    description:
      'A comprehensive web-based and webapp platform that connects blood donors directly with hospitals, ensuring quick and efficient blood donation. It manages databases for donors, hospitals, and active donor organizations, streamlining the process and improving healthcare accessibility, with seamless connectivity between Donors, Patients, Hospitals and Organizations.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Google Gemini API'],
    image: '/assets/p5.png',
    filename: 'Donor Sync - blood bank management system.project',
    codeLink: 'https://github.com/kesharwaniayush/Donor-Sync.git',
    liveLink: 'https://github.com/kesharwaniayush/Donor-Sync.git'
  },
  {
    id: 5,
    title: 'To-Do List App',
    description:
      'Developed a To-Do List app enabling users to add, update, delete, and manage tasks efficiently with a clean UI and real-time interaction.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    image: '/assets/p6.webp',
    filename: 'to_do_list.project',
    codeLink: 'https://github.com/kesharwaniayush/TO_DO_LIST.git',
    liveLink: 'https://github.com/kesharwaniayush/TO_DO_LIST.git',
  },
  {
    id: 6,
    title: 'MyPortfolio',
    status: 'Live',
    statusClass: 'status-Live',
    description:
      'A personal portfolio website showcasing my skills, projects, and achievements. Built with React.js, it features a responsive design, interactive elements, and a clean user interface to highlight my work effectively.',
    tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    image: '/assets/p7.png',
    filename: 'myportfolio.project',
    codeLink: 'https://github.com/kesharwaniayush/MyPortfolio.git',
    liveLink: 'https://myportfolio-ayush.vercel.app/'
  },
];

const upcomingProjects = [
  'Full-Stack Blog',
  'React Native App',
  'Portfolio v2.0',
  'Open Source Contribution'
];

export default function ProjectShowcase() {
  return (
    <div className="showcase-container">
      {/* Header Section */}
      <div className="terminal-header">
        <div className="header-top">
          <div className="traffic-lights">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="terminal-title">project_showcase.exe</div>
          <div className="green-indicator"></div>
        </div>

        <div className="header-content">
          <p className="command">$ git log --oneline --projects</p>
          <h1 className="main-title">MY_PROJECTS</h1>
          <p className="subtitle">// Building solutions, one commit at a time</p>
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {/* Card Header */}
            <div className="card-header">
              <div className="card-traffic-lights">
                <div className="card-dot red"></div>
                <div className="card-dot yellow"></div>
                <div className="card-dot green"></div>
              </div>
              <div className="card-title-bar">{project.filename}</div>
              <div className="card-indicator"></div>
            </div>

            {/* Project Image */}
            <div className="card-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="card-image"
              />
              <div className={`status-badge ${project.statusClass}`}>
                {project.status}
              </div>
            </div>

            {/* Card Content */}
            <div className="card-content">
              <div className="project-year">🌐 {project.year} PROJECT</div>

              <p className="command">$ cat project_info.md</p>
              <h2 className="project-title">{project.title}</h2>

              <p className="command">$ cat description.txt</p>
              <p className="project-description">{project.description}</p>

              <p className="command">$ ls technologies/</p>
              <div className="tech-stack">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <p className="command">$ ./deploy.sh</p>
              <div className="button-group">
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-code"
                >
                  📂 Code
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-live"
                >
                  🔗 Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pipeline Section */}
      <div className="pipeline-section">
        <div className="pipeline-header">
          <div className="traffic-lights">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="terminal-title">upcoming_projects.queue</div>
          <div className="green-indicator"></div>
        </div>

        <div className="pipeline-content">
          <p className="command">$ cat upcoming_projects.queue</p>
          <h2 className="pipeline-title">PROJECT_PIPELINE</h2>
          <p className="pipeline-description">
            Currently architecting innovative solutions including a full-stack
            blog platform and a React Native mobile application.
          </p>
          <div className="upcoming-tags">
            {upcomingProjects.map((project, index) => (
              <span key={index} className="upcoming-tag">
                {project}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
