import Footer from "./components/Footer"
import Header from "./components/Header"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Hero from "./pages/Hero"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"

export const metadata = {
  title: "Portfolio - React Developer",
  description: "A professional portfolio showcasing my work and skills",
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
