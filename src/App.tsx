import "./App.css";

import AWSLogo from "../public/assets/aws.svg";
import DotNetLogo from "../public/assets/dotnet.svg";
import ExpressLogo from "../public/assets/express.svg";
import FlutterLogo from "../public/assets/flutter.svg";
import GitLogo from "../public/assets/git.svg";
import GoLogo from "../public/assets/go.svg";

import JavaLogo from "../public/assets/java.svg";
import JavaScriptLogo from "../public/assets/javascript.svg";
import MySqlLogo from "../public/assets/mysql.svg";
import NginxLogo from "../public/assets/nginx.svg";
import NextJsLogo from "../public/assets/nextjs.svg";
import DockerLogo from "../public/assets/docker.svg";

import PythonLogo from "../public/assets/python.svg";
import ReactLogo from "../public/assets/react.svg";
import SeleniumLogo from "../public/assets/selenium.svg";
import SveleteLogo from "../public/assets/svelte.svg";
import TailwindLogo from "../public/assets/tailwind.svg";
import TypeScriptLogo from "../public/assets/typescript.svg";
import GithubLogo from "../public/assets/github.svg";
import ExternalLogo from "../public/assets/external.svg";

import Navbar from "./navbar";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";
import { useState } from "react";

function App() {
  const skills = [
    {
      name: ".NET",
      image: DotNetLogo,
    },
    {
      name: "AWS",
      image: AWSLogo,
    },
    {
      name: "Docker",
      image: DockerLogo,
    },
    {
      name: "Express",
      image: ExpressLogo,
    },
    {
      name: "Flutter",
      image: FlutterLogo,
    },
    {
      name: "Git",
      image: GitLogo,
    },
    {
      name: "Go",
      image: GoLogo,
    },
    {
      name: "Java",
      image: JavaLogo,
    },
    {
      name: "JavaScript",
      image: JavaScriptLogo,
    },
    {
      name: "MySQL",
      image: MySqlLogo,
    },
    {
      name: "Nginx",
      image: NginxLogo,
    },
    {
      name: "NextJS",
      image: NextJsLogo,
    },
    {
      name: "Python",
      image: PythonLogo,
    },
    {
      name: "React",
      image: ReactLogo,
    },
    {
      name: "Selenium",
      image: SeleniumLogo,
    },
    {
      name: "Svelte",
      image: SveleteLogo,
    },
    {
      name: "Tailwind",
      image: TailwindLogo,
    },
    {
      name: "TypeScript",
      image: TypeScriptLogo,
    },
  ];

  const projects = [
    {
      name: "MindfulScan",
      description:
        "MindfulScan is a GPT-4-powered content moderation tool built with React and Go to identify and flag inappropriate content in real time.",
      madeWith: ["React", "TypeScript", "OpenAI", "Go"],
      github: "https://github.com/ayubh21/MindfulScan",
    },
    {
      name: "PremierStays",
      description:
        "PremierStays is a property rental platform that connects Edmonton landlords and tenants with real-time listings, smart search tools, and seamless communication.",
      madeWith: [
        "NextJS",
        "Go",
        "AWS (S3)",
        "Google Cloud (Maps API)",
        "Firebase (Auth)",
      ],
      github: "",
    },
    {
      name: "webhookgo",
      description:
        "webhookgo is a lightweight Go package for sending messages to Discord via webhooks.",
      madeWith: ["Go"],
      github: "https://github.com/immick00/webhookgo",
    },
    {
      name: "deathswapMC",
      description:
        "Minecraft plugin recreating the classic DeathSwap minigame.",
      madeWith: ["Java", "Paper", "Maven"],
      github: "https://github.com/immick00/deathswapMC",
    },
    {
      name: "RideShare",
      description:
        "Rideshare is a student-focused carpooling alternative that makes commuting easier, cheaper, and more sustainable.",
      madeWith: ["C#", "Razor"],
      github: "",
    },
  ];

  const terminalLines = [
    <TerminalOutput>{"> Mick.contact"}</TerminalOutput>,
    <div className="flex gap-4">
      <p>
        ["
        <a
          href="mailto:isasimick@gmail.com"
          className="text-[#535bf2] hover:underline"
        >
          isasimick@gmail.com
        </a>
        ", "
        <a
          href="https://linkedin.com/in/mickisasi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#535bf2] hover:underline"
        >
          LinkedIn
        </a>
        ", "
        <a
          href="https://github.com/immick00"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#535bf2] hover:underline"
        >
          GitHub
        </a>
        "]
      </p>
    </div>,
  ];

  const [terminalLineData, setTerminalLineData] = useState(terminalLines);

  return (
    <>
      <Navbar />
      <main>
        <article id="about">
          <h2 className="font-bold text-5xl text-center py">
            Hi, I'm Mick <span className="blog-title-emoji">👋</span>
          </h2>
          <div className="bg-[#333333] w-[700px] p-6 rounded-md my-10 mx-auto space-y-4 text-base/6">
            <p>
              I'm a driven full-stack developer and student at NAIT, passionate
              about automation and crafting clean, efficient systems.
            </p>
            <p>
              I thrive on transforming complex ideas into scalable, high-impact
              solutions, with a focus on clarity and performance. Always curious
              and growth-oriented, I enjoy exploring new tools, refining my
              skills, and building software that makes a real difference.
            </p>
            <p>
              Outside of coding, I love playing video games and watching movies.
              It’s how I relax, recharge, and stay creatively inspired.
            </p>
          </div>
        </article>
        <article id="skills">
          <h2 className="font-bold text-5xl text-center">Skills 🛠️</h2>
          {/* <div className="bg-[#333333] w-[700px] p-6 rounded-xl my-16 grid grid-cols-6 gap-4 gap-y-8 mx-auto"> */}
          <div className="bg-[#333333] w-[700px] p-6 rounded-xl my-16 grid grid-cols-6 gap-4 gap-y-8 justify-between mx-auto">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="flex flex-col justify-center items-center"
              >
                <div className="bg-white rounded-2xl mb-1 w-16 h-16 flex justify-center items-center">
                  <img
                    src={skill.image}
                    alt={`${skill.name} logo`}
                    className="w-[65%] h-[65%]"
                  />
                </div>
                <p className="text-center text-white text-md">{skill.name}</p>
              </div>
            ))}
          </div>
        </article>
        <article id="projects">
          <h2 className="font-bold text-5xl text-center">Projects 👩‍💻</h2>
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-[#333333] w-[700px] p-6 rounded-md my-8 mx-auto space-y-4"
            >
              <div className="flex space-x-2 items-center">
                <h2 className="font-semibold text-xl">{project.name}</h2>
                {project.github != "" && (
                  <a href={project.github} className="flex">
                    <img src={GithubLogo} className="w-5 h-5" />
                    <img src={ExternalLogo} className="w-3 h-3" />
                  </a>
                )}
              </div>
              <p className="text-sm">{project.description}</p>
              <div className="flex gap-x-2">
                <h3>Made with: </h3>
                {project.madeWith.map((tool) => (
                  <span className="inline-flex items-center rounded-md bg-indigo-400/10 px-2 py-1 text-sm font-medium text-indigo-400 ring-1 ring-indigo-400/30 ring-inset">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </article>
        <article id="contact" className="pb-8">
          <h2 className="font-bold text-5xl text-center">Contact 📩</h2>
          <div className="w-[700px] rounded-md my-16 mx-auto">
            <Terminal
              name="python3 main.py"
              colorMode={ColorMode.Dark}
              height="200"
              onInput={(input) => {
                console.log("Hello :)");
                if (input == "clear") {
                  setTerminalLineData([]);
                } else {
                  setTerminalLineData([
                    ...terminalLineData,
                    <TerminalOutput>{input}</TerminalOutput>,
                  ]);
                }
              }}
              TopButtonsPanel={() => null}
            >
              {terminalLineData}
            </Terminal>
          </div>
        </article>
        <p className="text-center font-medium pb-4">
          Made by Mick© {new Date().getFullYear()}
        </p>
      </main>
    </>
  );
}

export default App;
