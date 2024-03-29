import Carousel from "react-multi-carousel";
import useStore from "../store/projects"
import "react-multi-carousel/lib/styles.css";
import { useNavigate  } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3.5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2.5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 0 },
    items: 1,
  },
};

interface Project {
  image: string;
  name: string;
  subtitle: string;
  readme: string;
  urlName: string;
}

export default function WorkSlider() {
  const {projects} = useStore()
  return (
      <Carousel
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        arrows
      >
        {projects.map((project, i) => (
          <Project project={project} key={i} />
        ))}
      </Carousel>
  )
}
const Project = ({ project }: { project: Project }) => {
  const navigate = useNavigate()
  return (
    <div
      draggable={false}
      className=" aspect-[5/4] group duration-150 bg-white relative mx-2 mx:mx-4 rounded-3xl p-6 overflow-hidden"
    >
      <img
        draggable={false}
        src={project.image}
        className="absolute top-0 left-0 scale-105 rotate-2 group-hover:rotate-0 filter group-hover:brightness-50 group-hover:scale-100 duration-200 object-cover"
      ></img>
      <div 
        onClick={()=>navigate("/projects/"+project.urlName)}
        className="absolute flex gap-4 items-center group-hover:translate-x-0 translate-x-[-400px]  duration-200 bottom-6 cursor-pointer left-6 bg-white p-3 px-6 rounded-3xl shadow-xl">
          <div>
              <h2 className="    text-gray-800 text-md md:text-3xl  drop-shadow-lg ">
                {project.name}
              </h2>
              <p className="text-gray-600 text-xs md:text-md">{project.subtitle}</p>
          </div>
      </div>
    </div>
  );
};
