import type { JSX } from "react";

function WorkSection(): JSX.Element {
  return (
    <div className="container mx-auto mt-30 px-15" id="work">
      <h2 className="font-poppins text-primary ml-0.5 text-2xl font-semibold tracking-widest">
        WORK
      </h2>
      <h3 className="text-dark-text font-poppins mt-5 text-4xl font-semibold">
        Portfolio Projects
      </h3>
      <div className="flex space-x-10 overflow-hidden pt-5">
        <div className="flex-2">
          <img
            src="/projects/personal/personal-portfolio-home.png"
            alt="Personal portfolio home screen"
          />
        </div>
        <div className="flex flex-2 flex-col justify-around">
          <div>
            <h4 className="font-poppins text-2xl font-medium">Personal Site</h4>
            <p className="font-inter text-dark-text/90 pt-2 text-lg leading-relaxed">
              A personal website built with React, TypeScript and Tailwind CSS
              to showcase my skills, projects, and experiences.
            </p>
          </div>
          <div>
            <a
              className="font-inter text-dark-text/90 text-md pt-5 leading-relaxed underline hover:no-underline"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Link
            </a>
            <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            <a
              className="font-inter text-dark-text/90 text-md pt-5 leading-relaxed underline hover:no-underline"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>

      <h3 className="text-dark-text font-poppins mt-20 text-4xl font-semibold">
        Professional Experience
      </h3>
      <div className="mt-5">
        <h4 className="font-poppins text-dark-text text-2xl font-medium">
          Software Engineer Intern
        </h4>
        <h5 className="font-poppins text-dark-text/80 text-md pt-1">
          Example Company | 2024 - 2025
        </h5>
        <p className="font-inter text-dark-text/90 pt-2 text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, error
          veritatis. Incidunt in fuga ab ut totam quaerat doloremque inventore
          soluta minus assumenda cumque recusandae, neque eligendi eum harum
          blanditiis.
        </p>
      </div>
      <hr className="border-dark-text/30 my-10 border-t"></hr>
      <div className="mt-5">
        <h4 className="font-poppins text-dark-text text-2xl font-medium">
          Software Engineer Intern
        </h4>
        <h5 className="font-poppins text-dark-text/80 text-md pt-1">
          Example Company | 2024 - 2025
        </h5>
        <p className="font-inter text-dark-text/90 pt-2 text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, error
          veritatis. Incidunt in fuga ab ut totam quaerat doloremque inventore
          soluta minus assumenda cumque recusandae, neque eligendi eum harum
          blanditiis.
        </p>
      </div>

      <h3 className="text-dark-text font-poppins mt-20 text-4xl font-semibold">
        Other Experience / Projects
      </h3>
      <div className="mt-5">
        <h4 className="font-poppins text-dark-text text-2xl font-medium">
          Software Engineer Intern
        </h4>
        <p className="font-inter text-dark-text/90 pt-2 text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, error
          veritatis. Incidunt in fuga ab ut totam quaerat doloremque inventore
          soluta minus assumenda cumque recusandae, neque eligendi eum harum
          blanditiis.
        </p>
      </div>
      <hr className="border-dark-text/30 my-10 border-t"></hr>
      <div className="mt-5">
        <h4 className="font-poppins text-dark-text text-2xl font-medium">
          Software Engineer Intern
        </h4>
        <p className="font-inter text-dark-text/90 pt-2 text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, error
          veritatis. Incidunt in fuga ab ut totam quaerat doloremque inventore
          soluta minus assumenda cumque recusandae, neque eligendi eum harum
          blanditiis.
        </p>
      </div>
    </div>
  );
}

export default WorkSection;
