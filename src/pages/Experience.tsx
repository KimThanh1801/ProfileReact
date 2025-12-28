import { ArrowUpRight, Badge, Link } from "lucide-react"
import { Card, CardContent } from "../components/ui/Card"


const projects = [
  {
    title: "EcoSphere AI",
    description: "An AI-powered environmental monitoring dashboard with real-time data visualization.",
    tags: ["Next.js", "TypeScript", "Tailwind", "OpenAI"],
    image: "/modern-dashboard.png",
  },
  {
    title: "Nova Commerce",
    description: "A headless e-commerce solution built with high-performance metrics in mind.",
    tags: ["React", "Stripe", "Prisma", "PostgreSQL"],
    image: "/ecommerce-mobile-app.png",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container px-4">
        <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Selected Work</h2>
            <p className="mt-4 text-muted-foreground">A curated selection of my latest projects and experiments.</p>
          </div>
          <Link href="#" className="group flex items-center gap-2 text-sm font-medium hover:underline">
            View Archive{" "}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <Card
              key={i}
              className="group overflow-hidden border-white/10 bg-white/5 transition-colors hover:bg-white/[0.08]"
            >
              <CardContent className="p-0">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-white/10 text-[10px] font-semibold tracking-wider uppercase"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="mt-2 text-muted-foreground">{project.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
