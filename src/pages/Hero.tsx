export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 text-center z-10">
        <div className="mb-8 inline-block">
          <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold tracking-wide">
            Welcome to my portfolio
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance leading-tight tracking-tight">
          Crafting digital{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">experiences</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 text-balance max-w-2xl mx-auto leading-relaxed font-light">
          I build beautiful, performant web applications with React and modern web technologies
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3.5 bg-primary text-primary-foreground rounded-full hover:shadow-lg hover:scale-105 transition-all font-semibold text-sm tracking-wide"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border-2 border-primary text-primary rounded-full hover:bg-primary/5 transition-all font-semibold text-sm tracking-wide"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
