"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <>
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-darkTwo p-6 rounded-lg shadow-lg text-slate-100 relative"
          aria-label="Project Card"
          tabIndex="0"
        >
          <Link href={`/projects/${project.id}`}>
            <div className="flex justify-between">
              <p className="text-xl font-semibold text-slate-100">
                {project.title}
              </p>
              <div className="text-white transition-all transform rotate-45 hidden ease-in-out">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"></path>
                </svg>
              </div>
            </div>
            <p className="mt-3 text-base text-slate-400">
              {project.description}
            </p>
          </Link>
        </div>
      ))}
    </>
  );
}
