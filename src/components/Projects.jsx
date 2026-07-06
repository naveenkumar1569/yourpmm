import { projects } from '../data.js'
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section__label">Projects</p>
        <h2 className="section__title">
          Products, launches, and experiments I&rsquo;ve worked on.
        </h2>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
