import Link from "next/link";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="pb-24 lg:pb-4 text-slate-50">
      <section className="mx-auto max-w-lg px-12 sm:px-0">
        <div className="mt-10 lg:mt-20 xl:mt-24 slide-in-bottom">
          <div className="text-sm font-bold hidden lg:flex gap-3 items-center">
            <img src="/icons/hello.png" alt="hello emoji" className="h-4 w-4" />
            <p>Bonjour</p>
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold mt-5">
            Moi, c'est <span className="marker">Clément</span>
            <br />
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-2 block">
              Développeur Web.
            </span>
          </h1>
          <div className="flex flex-col sm:flex-row mt-9 gap-3">
            <a
              className="bg-darkTwo  text-slate-50 px-6 py-3  rounded-full capitalize font-medium justify-center flex items-center transform hover:bg-white hover:text-black hover:-translate-y-1 hover:scale-110  transition-all"
              href="https://www.linkedin.com/in/clementfavarel/"
              target="_blank"
            >
              <span className="inline-block mr-2 slide-in-bottom overflow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="feather feather-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </span>
              LinkedIn
            </a>
            <a
              className="bg-darkTwo  text-slate-50 px-6 py-3  rounded-full capitalize font-medium justify-center flex items-center transform hover:bg-white hover:text-black hover:-translate-y-1 hover:scale-110  transition-all"
              href="https://github.com/clementfavarel"
              target="_blank"
            >
              <span className="inline-block mr-2 slide-in-bottom overflow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="feather feather-github"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </span>
              Github
            </a>
            <a
              className="bg-darkTwo  text-slate-50 px-6 py-3  rounded-full capitalize font-medium justify-center flex items-center transform hover:bg-white hover:text-black hover:-translate-y-1 hover:scale-110  transition-all"
              href="mailto:favarel.clmt@gmail.com"
              target="_blank"
            >
              <span className="inline-block mr-2 slide-in-bottom overflow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="feather feather-mail"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </span>
              Mail
            </a>
          </div>
          <p className="text-gray-400 text-lg tracking-wide mt-9">
            Salut, moi c'est Clément, développeur web doté de 2 ans d'expérience
            en React, PHP, MySQL et Docker. A votre service pour des
            applications web performantes.
          </p>
        </div>
        <hr className="my-5 opacity-30"></hr>
        <div className="slide-in-bottom" id="timeline">
          <h2 className="text-2xl font-semibold text-slate-50 mb-5">
            Mon parcours
          </h2>
          <ul className="rs-timeline rs-timeline-align-alternate">
            <li align="alternate" className="rs-timeline-item">
              <span className="rs-timeline-item-tail"></span>
              <span className="rs-timeline-item-dot"></span>
              <div className="rs-timeline-item-content">
                <p className="text-slate-50">2020-2021</p>
                <p className="text-slate-50">Diplômé; Baccalauréat STI2D</p>
                <span className="text-indigo-300 cursor-pointer">
                  @Lycée Militaire Aix-en-Pce
                </span>
              </div>
            </li>
            <li align="alternate" className="rs-timeline-item">
              <span className="rs-timeline-item-tail"></span>
              <span className="rs-timeline-item-dot"></span>
              <div className="rs-timeline-item-content">
                <p className="text-slate-50">05/2022- 06/2022</p>
                <p className="text-slate-50">Stage; Community Manager</p>
                <span className="text-indigo-300 cursor-pointer">
                  @Mairie de Miramas
                  <br />
                  @IUT MMI Toulon
                </span>
              </div>
            </li>
            <li align="alternate" className="rs-timeline-item">
              <span className="rs-timeline-item-tail"></span>
              <span className="rs-timeline-item-dot"></span>
              <div className="rs-timeline-item-content">
                <p className="text-slate-50">06/2022 - 07/2022</p>
                <p className="text-slate-50">Saison; Webmaster</p>
                <span className="text-indigo-300 cursor-pointer">
                  @Mairie de Miramas
                </span>
              </div>
            </li>
            <li align="alternate" className="rs-timeline-item">
              <span className="rs-timeline-item-tail"></span>
              <span className="rs-timeline-item-dot"></span>
              <div className="rs-timeline-item-content">
                <p className="text-slate-50">04/2023 - 06/2023</p>
                <p className="text-slate-50">Stage; Développeur Web</p>
                <span className="text-indigo-300 cursor-pointer">
                  @Marine nationale
                  <br />
                  @IUT MMI Toulon
                </span>
              </div>
            </li>
            <li align="alternate" className="rs-timeline-item">
              <span className="rs-timeline-item-tail"></span>
              <span className="rs-timeline-item-dot"></span>
              <div className="rs-timeline-item-content">
                <p className="text-slate-50">03/2024 - 07/2024</p>
                <p className="text-slate-50">Stage; Développeur DEVOPS</p>
                <span className="text-indigo-300 cursor-pointer">
                  @Marine nationale
                  <br />
                  @IUT MMI Toulon
                </span>
              </div>
            </li>
            <li align="alternate" className="rs-timeline-item">
              <span className="rs-timeline-item-tail"></span>
              <span className="rs-timeline-item-dot"></span>
              <div className="rs-timeline-item-content">
                <p className="text-slate-50">08/2024</p>
                <p className="text-slate-50">Etudiant; BUT MMI</p>
                <span className="text-indigo-300 cursor-pointer">
                  @IUT MMI Toulon
                </span>
              </div>
            </li>
            <li
              align="alternate"
              className="rs-timeline-item rs-timeline-item-last rs-timeline-item-active"
            >
              <span className="rs-timeline-item-tail"></span>
              <span className="rs-timeline-item-dot rs-timeline-item-custom-dot">
                <div className="relative">
                  <div className="bg-indigo-500 flex items-center justify-center p-1 rounded-full mt-2 ml-[1px] scale-125 absolute"></div>
                  <div className="bg-indigo-500 flex items-center justify-center p-1 rounded-full mt-2 ml-[1px] scale-125 animate-ping absolute"></div>
                </div>
              </span>
              <div className="rs-timeline-item-content">
                <p className="text-slate-50">09/2024 - 10/2027</p>
                <p className="text-slate-50">Apprenti Ingénieur</p>
                <span className="text-indigo-300 cursor-pointer">
                  @ISEN Yncrea Med
                  <br />
                  @Marine nationale
                </span>
              </div>
            </li>
          </ul>
        </div>
        <hr className="my-5 opacity-30"></hr>
        <div id="projects">
          <h2 className="text-2xl font-semibold text-slate-50 mb-5">Projets</h2>
          <div className="w-full grid gap-3 grid-cols-1 sm:grid-cols-2">
            <ProjectsSection />
          </div>
        </div>
        <hr className="my-5 opacity-30"></hr>
        <div id="skills">
          <h2 className="text-2xl font-semibold text-slate-50 mb-5">
            Compétences
          </h2>
          <div className="w-full grid gap-3 grid-cols-2 sm:grid-cols-3">
            <div>
              <div
                aria-label="Tech Card"
                className="bg-darkTwo p-6 rounded-lg shadow-lg text-slate-100 relative h-32 flex justify-center items-center flex-col gap-1.5 overflow-hidden hover:bg-darkOne transition-all cursor-pointer"
              >
                <span className="slide-in-right mb-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    role="img"
                    viewBox="0 0 24 24"
                    height="32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title></title>
                    <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"></path>
                  </svg>
                </span>
                <span className="slide-in-left font-semibold text-xs">
                  Next
                </span>
              </div>
            </div>
            <div>
              <div
                aria-label="Tech Card"
                className="bg-darkTwo p-6 rounded-lg shadow-lg text-slate-100 relative h-32 flex justify-center items-center flex-col gap-1.5 overflow-hidden hover:bg-darkOne transition-all cursor-pointer"
              >
                <span className="slide-in-right mb-2">
                  <img
                    src="/icons/mysql.svg"
                    alt="MySQL logo"
                    width={32}
                    height={32}
                  />
                </span>
                <span className="slide-in-left font-semibold text-xs">
                  MySQL
                </span>
              </div>
            </div>
            <div>
              <div
                aria-label="Tech Card"
                className="bg-darkTwo p-6 rounded-lg shadow-lg text-slate-100 relative h-32 flex justify-center items-center flex-col gap-1.5 overflow-hidden hover:bg-darkOne transition-all cursor-pointer"
              >
                <span className="slide-in-right mb-2">
                  <img
                    src="/icons/php.svg"
                    alt="PHP logo"
                    width={32}
                    height={32}
                  />
                </span>
                <span className="slide-in-left font-semibold text-xs">PHP</span>
              </div>
            </div>
            <div>
              <div
                aria-label="Tech Card"
                className="bg-darkTwo p-6 rounded-lg shadow-lg text-slate-100 relative h-32 flex justify-center items-center flex-col gap-1.5 overflow-hidden hover:bg-darkOne transition-all cursor-pointer"
              >
                <span className="slide-in-right mb-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    role="img"
                    viewBox="0 0 24 24"
                    height="32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title></title>
                    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
                  </svg>
                </span>
                <span className="slide-in-left font-semibold text-xs">
                  Tailwind
                </span>
              </div>
            </div>
            <div>
              <div
                aria-label="Tech Card"
                className="bg-darkTwo p-6 rounded-lg shadow-lg text-slate-100 relative h-32 flex justify-center items-center flex-col gap-1.5 overflow-hidden hover:bg-darkOne transition-all cursor-pointer"
              >
                <span className="slide-in-right mb-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    role="img"
                    viewBox="0 0 24 24"
                    height="32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title></title>
                    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"></path>
                  </svg>
                </span>
                <span className="slide-in-left font-semibold text-xs">
                  React
                </span>
              </div>
            </div>
            <div>
              <div
                aria-label="Tech Card"
                className="bg-darkTwo p-6 rounded-lg shadow-lg text-slate-100 relative h-32 flex justify-center items-center flex-col gap-1.5 overflow-hidden hover:bg-darkOne transition-all cursor-pointer"
              >
                <span className="slide-in-right mb-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 640 512"
                    height="32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5.3-.4.5-.8.4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7.1 1.8 1.2 2.1 2.8.1 1 .3 2.7.6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2 1.1.7 2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7.1-.5.2-1.1.2-1.7zm-74.3-124.9l-.8.5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z"></path>
                  </svg>
                </span>
                <span className="slide-in-left font-semibold text-xs">
                  Node
                </span>
              </div>
            </div>
            <div>
              <div
                aria-label="Tech Card"
                className="bg-darkTwo p-6 rounded-lg shadow-lg text-slate-100 relative h-32 flex justify-center items-center flex-col gap-1.5 overflow-hidden hover:bg-darkOne transition-all cursor-pointer"
              >
                <span className="slide-in-right mb-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    role="img"
                    viewBox="0 0 24 24"
                    height="32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title></title>
                    <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"></path>
                  </svg>
                </span>
                <span className="slide-in-left font-semibold text-xs">
                  Express
                </span>
              </div>
            </div>
            <div>
              <div
                aria-label="Tech Card"
                className="bg-darkTwo p-6 rounded-lg shadow-lg text-slate-100 relative h-32 flex justify-center items-center flex-col gap-1.5 overflow-hidden hover:bg-darkOne transition-all cursor-pointer"
              >
                <span className="slide-in-right mb-2">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    height="32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 13h5"></path>
                    <path d="M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3"></path>
                    <path d="M20 8v8"></path>
                    <path d="M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5"></path>
                  </svg>
                </span>
                <span className="slide-in-left font-semibold text-xs">
                  REST
                </span>
              </div>
            </div>
            <div>
              <div
                aria-label="Tech Card"
                className="bg-darkTwo p-6 rounded-lg shadow-lg text-slate-100 relative h-32 flex justify-center items-center flex-col gap-1.5 overflow-hidden hover:bg-darkOne transition-all cursor-pointer"
              >
                <span className="slide-in-right mb-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    role="img"
                    viewBox="0 0 24 24"
                    height="32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title></title>
                    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path>
                  </svg>
                </span>
                <span className="slide-in-left font-semibold text-xs">
                  HTML
                </span>
              </div>
            </div>
            <div>
              <div
                aria-label="Tech Card"
                className="bg-darkTwo p-6 rounded-lg shadow-lg text-slate-100 relative h-32 flex justify-center items-center flex-col gap-1.5 overflow-hidden hover:bg-darkOne transition-all cursor-pointer"
              >
                <span className="slide-in-right mb-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    role="img"
                    viewBox="0 0 24 24"
                    height="32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title></title>
                    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"></path>
                  </svg>
                </span>
                <span className="slide-in-left font-semibold text-xs">CSS</span>
              </div>
            </div>
            <div>
              <div
                aria-label="Tech Card"
                className="bg-darkTwo p-6 rounded-lg shadow-lg text-slate-100 relative h-32 flex justify-center items-center flex-col gap-1.5 overflow-hidden hover:bg-darkOne transition-all cursor-pointer"
              >
                <span className="slide-in-right mb-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    role="img"
                    viewBox="0 0 24 24"
                    height="32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title></title>
                    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path>
                  </svg>
                </span>
                <span className="slide-in-left font-semibold text-xs">
                  Javascript
                </span>
              </div>
            </div>
            <div>
              <div
                aria-label="Tech Card"
                className="bg-darkTwo p-6 rounded-lg shadow-lg text-slate-100 relative h-32 flex justify-center items-center flex-col gap-1.5 overflow-hidden hover:bg-darkOne transition-all cursor-pointer"
              >
                <span className="slide-in-right mb-2">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 50 52"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Laravel</title>
                    <path
                      d="M49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1-.402.694l-9.209 5.302V39.25c0 .286-.152.55-.4.694L20.42 51.01c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1-.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054L.402 39.944A.801.801 0 0 1 0 39.25V6.334c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001l9.61-5.533a.802.802 0 0 1 .8 0l9.61 5.533h.002c.032.02.059.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v20.559l8.008-4.611v-10.51c0-.07.01-.141.028-.208.007-.024.02-.045.028-.068.016-.042.03-.085.052-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l9.611-5.533a.801.801 0 0 1 .8 0l9.61 5.533c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.018.024.04.045.054.071.023.039.036.082.052.124.009.023.022.044.028.068zm-1.574 10.718v-9.124l-3.363 1.936-4.646 2.675v9.124l8.01-4.611zm-9.61 16.505v-9.13l-4.57 2.61-13.05 7.448v9.216l17.62-10.144zM1.602 7.719v31.068L19.22 48.93v-9.214l-9.204-5.209-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-.002-21.481L4.965 9.654 1.602 7.72zm8.81-5.994L2.405 6.334l8.005 4.609 8.006-4.61-8.006-4.608zm4.164 28.764l4.645-2.674V7.719l-3.363 1.936-4.646 2.675v20.096l3.364-1.937zM39.243 7.164l-8.006 4.609 8.006 4.609 8.005-4.61-8.005-4.608zm-.801 10.605l-4.646-2.675-3.363-1.936v9.124l4.645 2.674 3.364 1.937v-9.124zM20.02 38.33l11.743-6.704 5.87-3.35-8-4.606-9.211 5.303-8.395 4.833 7.993 4.524z"
                      fill="rgb(241 245 249)"
                    />
                  </svg>
                </span>
                <span className="slide-in-left font-semibold text-xs">
                  Laravel
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-5 opacity-30"></hr>
        <div id="tools">
          <h2 className="text-2xl font-semibold text-slate-50 mb-5">Outils</h2>
          <div className="w-full grid gap-3 grid-cols-2 sm:grid-cols-3">
            <div>
              <div
                aria-label="Tech Card"
                className="bg-darkTwo p-6 rounded-lg shadow-lg text-slate-100 relative h-32 flex justify-center items-center flex-col gap-1.5 overflow-hidden hover:bg-darkOne transition-all cursor-pointer"
              >
                <span className="slide-in-right mb-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    role="img"
                    viewBox="0 0 24 24"
                    height="32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title></title>
                    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"></path>
                  </svg>
                </span>
                <span className="slide-in-left font-semibold text-xs">
                  VS Code
                </span>
              </div>
            </div>
            <div>
              <div
                aria-label="Tech Card"
                className="bg-darkTwo p-6 rounded-lg shadow-lg text-slate-100 relative h-32 flex justify-center items-center flex-col gap-1.5 overflow-hidden hover:bg-darkOne transition-all cursor-pointer"
              >
                <span className="slide-in-right mb-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    role="img"
                    viewBox="0 0 24 24"
                    height="32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title></title>
                    <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z"></path>
                  </svg>
                </span>
                <span className="slide-in-left font-semibold text-xs">
                  Postman
                </span>
              </div>
            </div>
            <div>
              <div
                aria-label="Tech Card"
                className="bg-darkTwo p-6 rounded-lg shadow-lg text-slate-100 relative h-32 flex justify-center items-center flex-col gap-1.5 overflow-hidden hover:bg-darkOne transition-all cursor-pointer"
              >
                <span className="slide-in-right mb-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    role="img"
                    viewBox="0 0 24 24"
                    height="32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title></title>
                    <path d="m7.806 3.845h2.563v5.126h-2.563zm-1.531 1.65c-.14-.104-.272-.183-.397-.239-.126-.056-.28-.084-.463-.084-.167 0-.298.034-.391.102-.094.067-.141.161-.141.28 0 .092.045.168.135.227.089.06.202.117.337.17.135.054.282.11.439.168.157.057.304.128.439.212.135.083.248.186.337.307.09.121.135.274.135.457 0 .255-.091.471-.272.648s-.435.289-.761.337v.878h-.478v-.866c-.207-.02-.412-.073-.615-.158-.203-.086-.378-.19-.526-.314l.311-.471c.171.115.344.209.519.28.176.072.367.108.574.108.191 0 .335-.036.433-.108.097-.071.146-.167.146-.286 0-.104-.045-.189-.135-.257-.089-.068-.202-.13-.337-.188s-.281-.116-.436-.173c-.155-.058-.3-.129-.436-.212-.135-.084-.247-.184-.337-.302-.09-.117-.134-.266-.134-.445 0-.258.087-.469.262-.633.176-.163.412-.264.711-.304v-.782h.478v.776c.211.024.391.078.54.161.149.084.286.187.409.311zm-2.165-2.442c-.456.244-.813.601-1.057 1.057s-.373.908-.373 2.154v11.472c0 1.246.129 1.698.373 2.154s.601.813 1.057 1.057.908.373 2.154.373h11.472c1.246 0 1.698-.129 2.154-.373s.813-.601 1.057-1.057.373-.908.373-2.154v-11.472c0-1.246-.129-1.698-.373-2.154s-.601-.813-1.057-1.057-.908-.373-2.154-.373h-11.472c-1.246 0-1.698.129-2.154.373zm2.199-2.121h11.382c1.87 0 2.548.195 3.231.56.684.366 1.22.902 1.586 1.586.365.683.56 1.361.56 3.231v11.382c0 1.87-.195 2.548-.56 3.231-.366.684-.902 1.22-1.586 1.586-.683.365-1.361.56-3.231.56h-11.382c-1.87 0-2.548-.195-3.231-.56-.684-.366-1.22-.902-1.586-1.586-.365-.683-.56-1.361-.56-3.231v-11.382c0-1.87.195-2.548.56-3.231.366-.684.902-1.22 1.586-1.586.683-.365 1.361-.56 3.231-.56zm-3.567-.216c-.874.467-1.559 1.152-2.026 2.026-.467.873-.716 1.739-.716 4.128v10.26c0 2.389.249 3.255.716 4.128.467.874 1.152 1.559 2.026 2.026.873.467 1.739.716 4.128.716h10.26c2.389 0 3.255-.249 4.128-.716.874-.467 1.559-1.152 2.026-2.026.467-.873.716-1.739.716-4.128v-10.26c0-2.389-.249-3.255-.716-4.128-.467-.874-1.152-1.559-2.026-2.026-.873-.467-1.739-.716-4.128-.716h-10.26c-2.389 0-3.255.249-4.128.716z"></path>
                  </svg>
                </span>
                <span className="slide-in-left font-semibold text-xs">
                  Terminal
                </span>
              </div>
            </div>
            <div>
              <div
                aria-label="Tech Card"
                className="bg-darkTwo p-6 rounded-lg shadow-lg text-slate-100 relative h-32 flex justify-center items-center flex-col gap-1.5 overflow-hidden hover:bg-darkOne transition-all cursor-pointer"
              >
                <span className="slide-in-right mb-2">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 218 256"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <path
                        d="M170.272109,25.3359387 L147.968109,0.00010893617 L108.800109,0.00010893617 L69.6321088,0.00010893617 L47.3281088,25.3359387 C47.3281088,25.3359387 27.7441088,19.8891302 18.4961088,29.1487047 C18.4961088,29.1487047 44.6081088,26.7886026 53.5841088,41.4040238 C53.5841088,41.4040238 77.7921088,46.0338111 81.0561088,46.0338111 C84.3201088,46.0338111 91.3921088,43.3104068 97.9201088,41.1316834 C104.448109,38.95296 108.800109,38.9371643 108.800109,38.9371643 C108.800109,38.9371643 113.152109,38.95296 119.680109,41.1316834 C126.208109,43.3104068 133.280109,46.0338111 136.544109,46.0338111 C139.808109,46.0338111 164.016109,41.4040238 164.016109,41.4040238 C172.992109,26.7886026 199.104109,29.1487047 199.104109,29.1487047 C189.856109,19.8891302 170.272109,25.3359387 170.272109,25.3359387"
                        id="path-3"
                      ></path>
                    </defs>
                    <g id="starting-collection" stroke="none" fill="none">
                      <g
                        id="Build-Icons"
                        transform="translate(-70.000000, -350.000000)"
                      >
                        <g
                          id="build-icons/Stable"
                          transform="translate(50.000000, 350.000000)"
                        >
                          <g
                            id="Logo"
                            transform="translate(20.114286, 0.000000)"
                          >
                            <path
                              d="M209.984109,61.2848749 L215.968109,46.5784919 C215.968109,46.5784919 208.352109,38.4082791 199.104109,29.1487047 C189.856109,19.8891302 170.272109,25.3359387 170.272109,25.3359387 L147.968109,0.00010893617 L108.800109,0.00010893617 L69.6321088,0.00010893617 L47.3281088,25.3359387 C47.3281088,25.3359387 27.7441088,19.8891302 18.4961088,29.1487047 C9.2481088,38.4082791 1.6321088,46.5784919 1.6321088,46.5784919 L7.6161088,61.2848749 L0.0001088,83.0721089 C0.0001088,83.0721089 22.3993088,168.017811 25.0241088,178.391258 C30.1921088,198.81679 33.7281088,206.714662 48.4161088,217.063598 C63.1041088,227.412534 89.7601088,245.387003 94.1121088,248.110407 C98.4641088,250.833811 103.904109,255.472858 108.800109,255.472858 C113.696109,255.472858 119.136109,250.833811 123.488109,248.110407 C127.840109,245.387003 154.496109,227.412534 169.184109,217.063598 C183.872109,206.714662 187.408109,198.81679 192.576109,178.391258 C195.200365,168.017811 217.600109,83.0721089 217.600109,83.0721089 L209.984109,61.2848749 Z"
                              id="Head"
                              fill="rgb(241 245 249)"
                            ></path>
                            <path
                              d="M164.016109,41.4040238 C164.016109,41.4040238 192.704493,76.1274281 192.704493,83.5487047 C192.704493,90.9699813 189.095597,92.9286536 185.467117,96.7866281 C181.838637,100.644603 165.991373,117.49376 163.956269,119.657232 C161.921165,121.821249 157.684493,125.101862 160.176557,131.006747 C162.668621,136.911632 166.344973,144.425505 162.256813,152.046679 C158.168109,159.667854 151.164109,164.754628 146.676109,163.913641 C142.188109,163.072109 131.648109,157.557215 127.772109,155.038066 C123.896109,152.518917 111.611501,142.374781 111.611501,138.493386 C111.611501,134.612534 124.310093,127.643888 126.655821,126.0605 C129.002637,124.477658 139.703117,118.349454 139.922349,115.944143 C140.141037,113.538288 140.057805,112.832926 136.899885,106.889369 C133.741965,100.945266 128.054989,93.0136238 129.001549,87.7362111 C129.948109,82.459343 139.119949,79.7152409 145.665357,77.2402111 C152.209677,74.765726 164.811437,70.0918196 166.385229,69.3652153 C167.960109,68.6380664 167.553197,67.945777 162.783949,67.4931472 C158.015789,67.0405174 144.483245,65.2419813 138.382285,66.9446536 C132.281325,68.647326 121.858285,71.2378281 121.013997,72.6115132 C120.169709,73.9851983 119.424973,74.0314962 120.292109,78.7702196 C121.158701,83.508943 125.622765,106.24719 126.055789,110.285998 C126.489357,114.324807 127.336909,116.994832 122.987629,117.990509 C118.637805,118.986186 111.316109,120.715003 108.800109,120.715003 C106.284109,120.715003 98.9618688,118.986186 94.6125888,117.990509 C90.2627648,116.994832 91.1103168,114.324807 91.5438848,110.285998 C91.9774528,106.24719 96.4409728,83.508943 97.3081088,78.7702196 C98.1747008,74.0314962 97.4299648,73.9851983 96.5862208,72.6115132 C95.7419328,71.2378281 85.3183488,68.647326 79.2173888,66.9446536 C73.1164288,65.2419813 59.5844288,67.0405174 54.8157248,67.4931472 C50.0470208,67.945777 49.6401088,68.6380664 51.2144448,69.3652153 C52.7887808,70.0918196 65.3905408,74.765726 71.9348608,77.2402111 C78.4797248,79.7152409 87.6521088,82.459343 88.5986688,87.7362111 C89.5452288,93.0136238 83.8577088,100.945266 80.7003328,106.889369 C77.5424128,112.832926 77.4586368,113.538288 77.6778688,115.944143 C77.8965568,118.349454 88.5975808,124.477658 90.9438528,126.0605 C93.2901248,127.643888 105.988173,134.612534 105.988173,138.493386 C105.988173,142.374781 93.7041088,152.518917 89.8281088,155.038066 C85.9521088,157.557215 75.4121088,163.072109 70.9241088,163.913641 C66.4361088,164.754628 59.4321088,159.667854 55.3434048,152.046679 C51.2552448,144.425505 54.9315968,136.911632 57.4231168,131.006747 C59.9151808,125.101862 55.6790528,121.821249 53.6434048,119.657232 C51.6088448,117.49376 35.7610368,100.644603 32.1325568,96.7866281 C28.5040768,92.9286536 24.8957248,90.9699813 24.8957248,83.5487047 C24.8957248,76.1274281 53.5841088,41.4040238 53.5841088,41.4040238 C53.5841088,41.4040238 77.7921088,46.0338111 81.0561088,46.0338111 C84.3201088,46.0338111 91.3921088,43.3104068 97.9201088,41.1316834 C104.448109,38.95296 108.800109,38.9371643 108.800109,38.9371643 C108.800109,38.9371643 113.152109,38.95296 119.680109,41.1316834 C126.208109,43.3104068 133.280109,46.0338111 136.544109,46.0338111 C139.808109,46.0338111 164.016109,41.4040238 164.016109,41.4040238 Z M142.509504,174.227935 C144.28512,175.341263 143.202016,177.439918 141.584704,178.584837 C139.966848,179.729757 118.228064,196.584361 116.118432,198.447169 C114.008256,200.310523 110.908,203.387425 108.8,203.387425 C106.692,203.387425 103.5912,200.310523 101.481568,198.447169 C99.371392,196.584361 77.633152,179.729757 76.015296,178.584837 C74.39744,177.439918 73.31488,175.341263 75.090496,174.227935 C76.866656,173.115152 82.422528,170.306233 90.08912,166.333876 C97.754624,162.362063 107.308896,158.985042 108.8,158.985042 C110.291104,158.985042 119.844832,162.362063 127.511424,166.333876 C135.177472,170.306233 140.733344,173.115152 142.509504,174.227935 Z"
                              id="Face"
                              fill="rgb(51 54 57)"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
                <span className="slide-in-left font-semibold text-xs">
                  Brave
                </span>
              </div>
            </div>
            <div>
              <div
                aria-label="Tech Card"
                className="bg-darkTwo p-6 rounded-lg shadow-lg text-slate-100 relative h-32 flex justify-center items-center flex-col gap-1.5 overflow-hidden hover:bg-darkOne transition-all cursor-pointer"
              >
                <span className="slide-in-right mb-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    role="img"
                    viewBox="0 0 24 24"
                    height="32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title></title>
                    <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"></path>
                  </svg>
                </span>
                <span className="slide-in-left font-semibold text-xs">
                  Figma
                </span>
              </div>
            </div>
            <div>
              <div
                aria-label="Tech Card"
                className="bg-darkTwo p-6 rounded-lg shadow-lg text-slate-100 relative h-32 flex justify-center items-center flex-col gap-1.5 overflow-hidden hover:bg-darkOne transition-all cursor-pointer"
              >
                <span className="slide-in-right mb-2">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="512" cy="512" r="512" fill="rgb(241 245 249)" />
                    <path
                      d="M827.3 461.5c-1.6-1.3-16.1-12.2-46.7-12.2-8.1 0-16.2.6-24.2 2.1-5.9-40.7-39.5-60.5-41-61.4l-8.2-4.8-5.4 7.8c-6.8 10.5-11.7 22-14.6 34.2-5.5 23.2-2.2 45 9.6 63.6-14.2 7.9-37.1 9.9-41.7 10H277c-9.9 0-17.9 8-17.9 17.9-.4 33.1 5.2 66 16.5 97.1 13 34.2 32.4 59.3 57.6 74.7 28.2 17.3 74.1 27.2 126.2 27.2 23.5.1 47-2.1 70.1-6.4 32.1-5.9 63-17.1 91.4-33.2 23.4-13.6 44.5-30.8 62.4-51.1 29.9-33.9 47.8-71.7 61.1-105.2h5.3c32.8 0 53-13.1 64.1-24.1 7.4-7 13.2-15.5 16.9-25l2.3-6.9-5.7-4.3zM312 489.9h50.7c2.4 0 4.4-2 4.4-4.4v-45.1c0-2.4-2-4.4-4.4-4.5H312c-2.4 0-4.4 2-4.4 4.4v45.2c0 2.5 2 4.4 4.4 4.4m69.9 0h50.7c2.4 0 4.4-2 4.4-4.4v-45.1c0-2.4-2-4.4-4.4-4.5h-50.7c-2.5 0-4.5 2-4.5 4.5v45.1c0 2.5 2 4.4 4.5 4.4m70.8.1h50.7c2.4 0 4.4-2 4.4-4.4v-45.1c0-2.4-2-4.4-4.4-4.5h-50.7c-2.4 0-4.4 2-4.4 4.4v45.2c0 2.4 2 4.3 4.4 4.4m70.1 0h50.7c2.4 0 4.4-2 4.5-4.4v-45.1c0-2.5-2-4.5-4.5-4.5h-50.7c-2.4 0-4.4 2-4.4 4.4v45.2c0 2.4 1.9 4.4 4.4 4.4m-141-65h50.7c2.4 0 4.4-2 4.4-4.5v-45.1c0-2.4-2-4.4-4.4-4.4h-50.7c-2.5 0-4.4 2-4.5 4.4v45.1c.1 2.5 2.1 4.5 4.5 4.5m70.9 0h50.7c2.4 0 4.4-2 4.4-4.5v-45.1c0-2.4-2-4.4-4.4-4.4h-50.7c-2.4 0-4.4 2-4.4 4.4v45.1c0 2.5 2 4.5 4.4 4.5m70.1 0h50.7c2.5 0 4.4-2 4.5-4.5v-45.1c0-2.5-2-4.4-4.5-4.4h-50.7c-2.4 0-4.4 2-4.4 4.4v45.1c0 2.5 1.9 4.5 4.4 4.5m0-64.9h50.7c2.5 0 4.5-2 4.5-4.5v-45.2c0-2.4-2-4.4-4.5-4.4h-50.7c-2.4 0-4.4 2-4.4 4.4v45.2c0 2.5 1.9 4.5 4.4 4.5M593.4 490h50.7c2.4 0 4.4-2 4.4-4.4v-45.1c0-2.5-2-4.4-4.4-4.5h-50.7c-2.4 0-4.4 2-4.4 4.4v45.2c0 2.4 2 4.4 4.4 4.4"
                      fill="rgb(51 54 57)"
                    />
                  </svg>
                </span>
                <span className="slide-in-left font-semibold text-xs">
                  Docker
                </span>
              </div>
            </div>
            <div>
              <div
                aria-label="Tech Card"
                className="bg-darkTwo p-6 rounded-lg shadow-lg text-slate-100 relative h-32 flex justify-center items-center flex-col gap-1.5 overflow-hidden hover:bg-darkOne transition-all cursor-pointer"
              >
                <span className="slide-in-right mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 97 97"
                  >
                    <path
                      fill="rgb(241 245 249)"
                      d="M92.71 44.408 52.591 4.291c-2.31-2.311-6.057-2.311-8.369 0l-8.33 8.332L46.459 23.19c2.456-.83 5.272-.273 7.229 1.685 1.969 1.97 2.521 4.81 1.67 7.275l10.186 10.185c2.465-.85 5.307-.3 7.275 1.671 2.75 2.75 2.75 7.206 0 9.958-2.752 2.751-7.208 2.751-9.961 0-2.068-2.07-2.58-5.11-1.531-7.658l-9.5-9.499v24.997c.67.332 1.303.774 1.861 1.332 2.75 2.75 2.75 7.206 0 9.959-2.75 2.749-7.209 2.749-9.957 0-2.75-2.754-2.75-7.21 0-9.959.68-.679 1.467-1.193 2.307-1.537v-25.23c-.84-.344-1.625-.853-2.307-1.537-2.083-2.082-2.584-5.14-1.516-7.698L31.798 16.715 4.288 44.222c-2.311 2.313-2.311 6.06 0 8.371l40.121 40.118c2.31 2.311 6.056 2.311 8.369 0L92.71 52.779c2.311-2.311 2.311-6.06 0-8.371z"
                    />
                  </svg>
                </span>
                <span className="slide-in-left font-semibold text-xs">Git</span>
              </div>
            </div>
            <div>
              <div
                aria-label="Tech Card"
                className="bg-darkTwo p-6 rounded-lg shadow-lg text-slate-100 relative h-32 flex justify-center items-center flex-col gap-1.5 overflow-hidden hover:bg-darkOne transition-all cursor-pointer"
              >
                <span className="slide-in-right mb-2">
                  <svg
                    width="32"
                    height="32"
                    fill="rgb(241 245 249)"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.0"
                    viewBox="0 0 266 312"
                  >
                    <path d="M128.6640625 79.2793c0 1-1 1-1 1h-1c-1 0-1-1-2-2 0 0-1-1-1-2s0-1 1-1l2 1c1 1 2 2 2 3m-18-10c0-5-2-8-5-8 0 0 0 1-1 1v2h3c0 2 1 3 1 5h2m35-5c2 0 3 2 4 5h2c-1-1-1-2-1-3s0-2-1-3-2-2-3-2c0 0-1 1-2 1 0 1 1 1 1 2m-30 16c-1 0-1 0-1-1s0-2 1-3c2 0 3-1 3-1 1 0 1 1 1 1 0 1-1 2-3 4h-1m-11-1c-4-2-5-5-5-10 0-3 0-5 2-7 1-2 3-3 5-3s3 1 5 3c1 3 2 6 2 9v2h1v-1c1 0 1-2 1-6 0-3 0-6-2-9s-4-5-8-5c-3 0-6 2-7 5-2 4-2.4 7-2.4 12 0 4 1.4 8 5.4 12 1-1 2-1 3-2m125 141c1 0 1-.4 1-1.3 0-2.2-1-4.8-4-7.7-3-3-8-4.9-14-5.7-1-.1-2-.1-2-.1-1-.2-1-.2-2-.2-1-.1-3-.3-4-.5 3-9.3 4-17.5 4-24.7 0-10-2-17-6-23s-8-9-13-10c-1 1-1 1-1 2 5 2 10 6 13 12 3 7 4 13 4 20 0 5.6-1 13.9-5 24.5-4 1.6-8 5.3-11 11.1 0 .9 0 1.4 1 1.4 0 0 1-.9 2-2.6 2-1.7 3-3.4 5-5.1 3-1.7 5-2.6 8-2.6 5 0 10 .7 13 2.1 4 1.3 6 2.7 7 4.3 1 1.5 2 2.9 3 4.2 0 1.3 1 1.9 1 1.9m-92-145c-1-1-1-3-1-5 0-4 0-6 2-9 2-2 4-3 6-3 3 0 5 2 7 4 1 3 2 5 2 8 0 5-2 8-6 9 0 0 1 1 2 1 2 0 3 1 5 2 1-6 2-10 2-15 0-6-1-10-3-13-3-3-6-4-10-4-3 0-6 1-9 3-2 3-3 5-3 8 0 5 1 9 3 13 1 0 2 1 3 1m12 16c-13 9-23 13-31 13-7 0-14-3-20-8 1 2 2 4 3 5l6 6c4 4 9 6 14 6 7 0 15-4 25-11l9-6c2-2 4-4 4-7 0-1 0-2-1-2-1-2-6-5-16-8-9-4-16-6-20-6-3 0-8 2-15 6-6 4-10 8-10 12 0 0 1 1 2 3 6 5 12 8 18 8 8 0 18-4 31-14v2c1 0 1 1 1 1m23 202c4 7.52 11 11.3 19 11.3 2 0 4-.3 6-.9 2-.4 4-1.1 5-1.9 1-.7 2-1.4 3-2.2 2-.7 2-1.2 3-1.7l17-14.7c4-3.19 8-5.98 13-8.4 4-2.4 8-4 10-4.9 3-.8 5-2 7-3.6 1-1.5 2-3.4 2-5.8 0-2.9-2-5.1-4-6.7s-4-2.7-6-3.4-4-2.3-7-5c-2-2.6-4-6.2-5-10.9l-1-5.8c-1-2.7-1-4.7-2-5.8 0-.3 0-.4-1-.4s-3 .9-4 2.6c-2 1.7-4 3.6-6 5.6-1 2-4 3.8-6 5.5-3 1.7-6 2.6-8 2.6-8 0-12-2.2-15-6.5-2-3.2-3-6.9-4-11.1-2-1.7-3-2.6-5-2.6-5 0-7 5.2-7 15.7v31.1c0 .9-1 2.9-1 6-1 3.1-1 6.62-1 10.6l-2 11.1v.17m-145-5.29c9.3 1.36 20 4.27 32.1 8.71 12.1 4.4 19.5 6.7 22.2 6.7 7 0 12.8-3.1 17.6-9.09 1-1.94 1-4.22 1-6.84 0-9.45-5.7-21.4-17.1-35.9l-6.8-9.1c-1.4-1.9-3.1-4.8-5.3-8.7-2.1-3.9-4-6.9-5.5-9-1.3-2.3-3.4-4.6-6.1-6.9-2.6-2.3-5.6-3.8-8.9-4.6-4.2.8-7.1 2.2-8.5 4.1s-2.2 4-2.4 6.2c-.3 2.1-.9 3.5-1.9 4.2-1 .6-2.7 1.1-5 1.6-.5 0-1.4 0-2.7.1h-2.7c-5.3 0-8.9.6-10.8 1.6-2.5 2.9-3.8 6.2-3.8 9.7 0 1.6.4 4.3 1.2 8.1.8 3.7 1.2 6.7 1.2 8.8 0 4.1-1.2 8.2-3.7 12.3-2.5 4.3-3.8 7.5-3.8 9.78 1 3.88 7.6 6.61 19.7 8.21m33.3-90.9c0-6.9 1.8-14.5 5.5-23.5 3.6-9 7.2-15 10.7-19-.2-1-.7-1-1.5-1l-1-1c-2.9 3-6.4 10-10.6 20-4.2 9-6.4 17.3-6.4 23.4 0 4.5 1.1 8.4 3.1 11.8 2.2 3.3 7.5 8.1 15.9 14.2l10.6 6.9c11.3 9.8 17.3 16.6 17.3 20.6 0 2.1-1 4.2-4 6.5-2 2.4-4.7 3.6-7 3.6-.2 0-.3.2-.3.7 0 .1 1 2.1 3.1 6 4.2 5.7 13.2 8.5 25.2 8.5 22 0 39-9 52-27 0-5 0-8.1-1-9.4v-3.7c0-6.5 1-11.4 3-14.6s4-4.7 7-4.7c2 0 4 .7 6 2.2 1-7.7 1-14.4 1-20.4 0-9.1 0-16.6-2-23.6-1-6-3-11-5-15l-6-9c-2-3-3-6-5-9-1-4-2-7-2-12-3-5-5-10-8-15-2-5-4-10-6-14l-9 7c-10 7-18 10-25 10-6 0-11-1-14-5l-6-5c0 3-1 7-3 11l-6.3 12c-2.8 7-4.3 11-4.6 14-.4 2-.7 4-.9 4l-7.5 15c-8.1 15-12.2 28.9-12.2 40.4 0 2.3.2 4.7.6 7.1-4.5-3.1-6.7-7.4-6.7-13m71.6 94.6c-13 0-23 1.76-30 5.25v-.3c-5 6-10.6 9.1-18.4 9.1-4.9 0-12.6-1.9-23-5.7-10.5-3.6-19.8-6.36-27.9-8.18-.8-.23-2.6-.57-5.5-1.03-2.8-.45-5.4-.91-7.7-1.37-2.1-.45-4.5-1.13-7.1-2.05-2.5-.79-4.5-1.82-6-3.07-1.38-1.26-2.06-2.68-2.06-4.27 0-1.6.34-3.31 1.02-5.13.64-1.1 1.34-2.2 2.04-3.2.7-1.1 1.3-2.1 1.7-3.1.6-.9 1-1.8 1.4-2.8.4-.9.8-1.8 1-2.9.2-1 .4-2 .4-3s-.4-4-1.2-9.3c-.8-5.2-1.2-8.5-1.2-9.9 0-4.4 1-7.9 3.2-10.4s4.3-3.8 6.5-3.8h11.5c.9 0 2.3-.5 4.4-1.7.7-1.6 1.3-2.9 1.7-4.1.5-1.2.7-2.1.9-2.5.2-.6.4-1.2.6-1.7.4-.7.9-1.5 1.6-2.3-.8-1-1.2-2.3-1.2-3.9 0-1.1 0-2.1.2-2.7 0-3.6 1.7-8.7 5.3-15.4l3.5-6.3c2.9-5.4 5.1-9.4 6.7-13.4 1.7-4 3.5-10 5.5-18 1.6-7 5.4-14 11.4-21l7.5-9c5.2-6 8.6-11 10.5-15s2.9-9 2.9-13c0-2-.5-8-1.6-18-1-10-1.5-20-1.5-29 0-7 .6-12 1.9-17s3.6-10 7-14c3-4 7-8 13-10s13-3 21-3c3 0 6 0 9 1 3 0 7 1 12 3 4 2 8 4 11 7 4 3 7 8 10 13 2 6 4 12 5 20 1 5 1 10 2 17 0 6 1 10 1 13 1 3 1 7 2 12 1 4 2 8 4 11 2 4 4 8 7 12 3 5 7 10 11 16 9 10 16 21 20 32 5 10 8 23 8 36.9 0 6.9-1 13.6-3 20.1 2 0 3 .8 4 2.2s2 4.4 3 9.1l1 7.4c1 2.2 2 4.3 5 6.1 2 1.8 4 3.3 7 4.5 2 1 5 2.4 7 4.2 2 2 3 4.1 3 6.3 0 3.4-1 5.9-3 7.7-2 2-4 3.4-7 4.3-2 1-6 3-12 5.82-5 2.96-10 6.55-15 10.8l-10 8.51c-4 3.9-8 6.7-11 8.4-3 1.8-7 2.7-11 2.7l-7-.8c-8-2.1-13-6.1-16-12.2-16-1.94-29-2.9-37-2.9" />
                  </svg>
                </span>
                <span className="slide-in-left font-semibold text-xs">
                  Linux
                </span>
              </div>
            </div>
            <div>
              <div
                aria-label="Tech Card"
                className="bg-darkTwo p-6 rounded-lg shadow-lg text-slate-100 relative h-32 flex justify-center items-center flex-col gap-1.5 overflow-hidden hover:bg-darkOne transition-all cursor-pointer"
              >
                <span className="slide-in-right mb-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    role="img"
                    viewBox="0 0 24 24"
                    height="32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title></title>
                    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"></path>
                  </svg>
                </span>
                <span className="slide-in-left font-semibold text-xs">
                  Chat GPT
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-5 opacity-30"></hr>
        <footer>
          <h3 className="text-xl font-semibold my-3 text-slate-50">
            Merci de votre attention
          </h3>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1S2kM43nwGGfMOIJalTBecyYVlqFBgup1/view?usp=sharing"
            className="bg-darkTwo text-slate-50 px-6 py-3  rounded-full inline-flex items-center transform hover:bg-white hover:text-black hover:-translate-y-1  transition-all duration-300 ease-in-out gap-1 hover:scale-110"
          >
            Voir mon CV
            <span className="inline-block transform rotate-45">
              <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 1024 1024"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"></path>
              </svg>
            </span>
          </a>
        </footer>
      </section>
    </main>
  );
}
