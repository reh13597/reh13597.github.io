import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills/Skills';
import Alex from './pages/Alex';
import Particles from './components/Particles';
import NowPlayingSpotify from './components/Spotify';
import { motion, useScroll, useSpring } from 'framer-motion';

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
        y: { duration: 1.0 },
        opacity: { duration: 1.0 }
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
        y: { duration: 1.2, ease: "easeOut" },
        opacity: { duration: 1.2, ease: "easeOut" }
    }
  }
};

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="App overflow-x-hidden w-full">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[70] origin-left"
        style={{ scaleX }}
      />

      <div className="fixed inset-0 -z-10">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={12}
          speed={0.05}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* lg+ : fixed top-right corner */}
      <div className="hidden lg:block fixed top-5 right-5 z-[60] w-fit pointer-events-none">
        <div className="pointer-events-auto">
          <NowPlayingSpotify />
        </div>
      </div>

      {/* mobile : centered below navbar */}
      <div className="lg:hidden fixed bottom-5 right-5 z-[60] w-fit pointer-events-none">
        <div className="pointer-events-auto">
          <NowPlayingSpotify />
        </div>
      </div>

      <Navbar />

      <motion.main className="w-full">
        <motion.section
          id="home"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={sectionVariants}
          className="min-h-screen flex items-center justify-center snap-start"
        >
          <Home />
        </motion.section>

        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={sectionVariants}
          className="min-h-screen flex items-center justify-center snap-start"
        >
          <Projects />
        </motion.section>

        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={sectionVariants}
          className="min-h-screen flex items-center justify-center snap-start"
        >
          <Skills />
        </motion.section>

        <motion.section
          id="alex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={sectionVariants}
          className="min-h-screen flex items-start justify-center snap-start"
        >
          <Alex />
        </motion.section>
      </motion.main>

      <Footer />
    </div>
  );
}

export default App;