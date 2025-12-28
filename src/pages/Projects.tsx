import Project_Image from "../assets/Task Management.jpg";
import ECommerce_Image from "../assets/E-Commerce Platform.webp";
import Weather_Image from "../assets/Weather Dashboard.webp";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce application with seamless checkout and real-time inventory management",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: ECommerce_Image,
    },
    {
      title: "Task Management",
      description:
        "Collaborative task management tool with real-time updates and team synchronization features",
      tags: ["React", "Firebase", "Tailwind CSS"],
      image: Project_Image,
    },
    {
      title: "Weather Dashboard",
      description:
        "Weather app with location-based forecasts, interactive maps, and predictive analytics",
      tags: ["React", "API", "Maps", "Charts"],
      image: Weather_Image,
    },
  ];


  return (
    <section id="projects" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 tracking-tight">Projects</h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-background rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="bg-gradient-to-br from-secondary to-secondary/50 rounded-xl h-48 mb-6 flex items-center justify-center border border-border/50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight">{project.title}</h3>
                <p className="text-muted-foreground mb-5 text-sm leading-relaxed font-light">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
