"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

async function getProject(id) {
  const res = await fetch("/projects.json");
  const projects = await res.json();
  return projects.find((p) => p.id.toString() === id);
}

export default function ProjectPage({ params }) {
  const [project, setProject] = useState(null);

  useEffect(() => {
    getProject(params.id).then(setProject);
  }, [params.id]);

  if (!project) return <div>Loading...</div>;

  return (
    <main className="pb-24 lg:pb-24 text-slate-50">
      <section className="mx-auto max-w-lg px-12 sm:px-0">
        <div className="mt-10 lg:mt-20 xl:mt-24 slide-in-bottom">
          <Link
            href="/"
            className="text-sm font-bold flex gap-3 items-center mb-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-semibold mt-6">
            {project.title}
          </h1>

          {project.images && project.images.length > 0 && (
            <div className="mt-8">
              <Carousel showThumbs={false} showStatus={false}>
                {project.images.map((image, index) => (
                  <div key={index}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={500}
                      height={300}
                      objectFit="cover"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          )}

          <p className="text-gray-400 text-lg tracking-wide mt-8">
            {project.fullDescription}
          </p>
          <hr className="my-5 opacity-30"></hr>
          <h2 className="font-bold text-xl">Technologies utilisées :</h2>
          <div className="flex mt-5 gap-3 flex-wrap">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-darkTwo px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <hr className="my-5 opacity-30"></hr>
          <h2 className="font-bold text-xl">Concepts clés :</h2>
          <ul className="flex flex-col gap-3 text-gray-400 pt-3">
            {project.concepts.map((concept, index) => (
              <li key={index}>
                <span className="text-slate-50 font-bold">- </span>
                {concept}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
