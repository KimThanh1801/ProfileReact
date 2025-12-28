import avatar from "../../src/assets/anhCV.png";
export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">About</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 tracking-tight">About Me</h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-light">
              I'm a passionate React developer dedicated to creating intuitive and high-performance web applications.
              With expertise in modern JavaScript, React hooks, and state management, I bring ideas to life with clean,
              maintainable code.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-light">
              Beyond coding, I'm committed to continuous learning, contributing to open-source projects, and exploring
              the latest advancements in web development.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3.5 bg-primary text-primary-foreground rounded-full hover:shadow-lg hover:scale-105 transition-all font-semibold text-sm tracking-wide"
            >
              Let's Connect
            </a>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl" />
            <div className="relative bg-secondary rounded-3xl p-12 flex items-center justify-center min-h-80">
              <img className="text-muted-foreground text-center text-lg font-light" src={avatar} alt="Profile Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
