export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    },
    {
      category: "Tools",
      skills: ["Git", "Docker", "REST API", "GraphQL"],
    },
  ]

  return (
    <section id="skills" className="py-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 tracking-tight">Skills</h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="bg-secondary rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-8 tracking-tight">{category.category}</h3>
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-muted-foreground flex items-center gap-3 group font-light">
                    <span className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform" />
                    <span className="group-hover:text-foreground transition-colors">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
