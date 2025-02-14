import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { FaCloudUploadAlt } from "react-icons/fa";
import dynamic from "next/dynamic";

// Fix hydration issues by dynamically importing this component
const Works = dynamic(() => Promise.resolve(WorksComponent), { ssr: false });

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link_github,
  source_code_link_deploy,
}) => {
  return (
    // Applying motion effect for animations
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial={false}
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {/* GitHub Repository Link */}
            <div
              onClick={() => window.open(source_code_link_github, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            {/* Deployment Link */}
            <div
              onClick={() => window.open(source_code_link_deploy, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <FaCloudUploadAlt className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        {/* Displaying tags dynamically */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className="text-[14px] text-white">
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

// Works Section - Showcasing Projects
const WorksComponent = () => {
  return (
    <div className="min-h-screen w-full">
      <motion.div variants={textVariant()} initial={false}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and education through real-world
          examples of my work. Each project is briefly described with links to
          code repositories and live demos. It reflects my ability to solve
          complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>

      {/* Mapping through projects to display project cards */}
      <div className="mt-20 flex flex-wrap gap-7 w-full justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "projects");
