import Image from "next/image";
import { MorphingText } from "@/components/magicui/morphing-text"; // Named import
import { ReNavbar } from "@/components/magicui/resizable-navbar"; // Named import
import { Vortex } from "@/components/magicui/vortex"; // Named import
import { BackgroundBeams } from "@/components/magicui/background-beams";
import { Clock } from "lucide-react";
import { HyperText } from "@/components/magicui/hypertext";
import Newsroom from "@/components/magicui/newsroom";
import Footer from "@/components/magicui/footer";

export default function Home() {
  return (
    <>

    <ReNavbar />
    
      <div className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-start antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h3 className="relative z-10 text-3xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
           GQICS
          </h3>
          <br></br>
         <h1 className="relative z-10 text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
           General-Quantum-Implementing-Continuem-Systems
          </h1>
        
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10 border-neutral-500 border-2 rounded-2xl px-5 py-5">
            we’re pioneering the next generation of missile technology with the development of GQICS—General Quantum Implementing Continuum Systems. This groundbreaking project is set to redefine modern defense systems by combining quantum mechanics with advanced systems integration. By embedding quantum computing, stealth capabilities, and adaptive intelligence into our missiles, we’re building weapons that evolve in real-time, are nearly invisible to detection, and adapt to shifting battlefield conditions. GQICS is designed to ensure unmatched precision, speed, and security—creating a defense platform that is as dynamic and intelligent as the threats it faces.
          </p>
          <br></br>
          <div className="flex gap-x-4 justify-center">
  <HyperText
    
    className="relative z-20 text-neutral-500 text-lg border-2 border-white inline-flex px-5 py-1 justify-center rounded-2xl"
  >
    Email-Us
  </HyperText>

  <HyperText
     // or another URL
    className="relative z-20 text-neutral-500 text-lg border-2 border-white inline-flex px-5 py-1 justify-center rounded-2xl"
  >
    Schedule-A-Call
  </HyperText>
</div>
<div></div>
        </div>
        <br>
        </br>


        <div>
         <h1 className="relative z-10 text-1xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold border-1 rounded-4xl px-8">
           --About Our Project--
          </h1>
          </div>
          <br>
          </br>
          <div className="text-neutral-500 max-w-2xl mx-auto my-4 text-sm relative z-10 space-y-3">
  
  <ul className="list-disc list-inside space-y-5 px-7 text-center space-x ">
    <li>
      <strong>GQICS (General Quantum Implementing Continuum Systems)</strong> is our flagship defense technology project focused on creating next-generation, AI-driven missile systems with quantum-enhanced decision making.
    </li>
    <li>
      The system uses <strong>quantum computing frameworks</strong> for real-time threat analysis, signal processing, and autonomous mission adaptation—far surpassing traditional digital logic systems in complexity and speed.
    </li>
    <li>
      Leveraging <strong>deep learning models</strong>, GQICS continuously learns from operational data to improve target prediction accuracy, distinguish between decoys and real threats, and adapt to evolving combat environments.
    </li>
    <li>
      Equipped with an <strong>autonomous missile detection and evasion system</strong>, GQICS can detect incoming threats, re-map its trajectory, and deploy countermeasures using onboard AI and sensor fusion.
    </li>
    <li>
      Features a <strong>modular payload architecture</strong> that allows the system to carry and deploy a variety of warheads or electronic warfare modules based on mission objectives.
    </li>
    <li>
      Integrated <strong>stealth technology</strong> using radar-absorbent materials and dynamic electromagnetic profile shifting for minimal detectability across radar and thermal bands.
    </li>
    <li>
      Supports <strong>continuum system intelligence</strong>—a real-time feedback and control loop that adapts flight, target, and response behaviors using multi-sensor inputs and battlefield data streams.
    </li>
    <li>
      Developed using a hybrid tech stack: <strong>TensorFlow + PyTorch for deep learning</strong>, <strong>Qiskit for quantum modeling</strong>, and <strong>Rust/C++</strong> for low-latency onboard control systems.
    </li>
    <li>
      Built with future scalability in mind, GQICS is designed to interface with next-gen defense networks, satellite guidance systems, and real-time command infrastructures.
    </li>
  </ul>


         
        </div>



<Newsroom />


<Footer />



        <BackgroundBeams />
      </div>

     
      <br />
    </>
  );
}
