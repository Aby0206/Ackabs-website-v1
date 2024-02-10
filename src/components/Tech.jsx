import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import ErrorBoundary from './ErrorBoundary';
const Tech = () => {
  const isMobile = window.innerWidth <= 768;
  const sliceLength = isMobile ? 6 : technologies.length; // Change this to your preferred lengths
  let temp_technologies = technologies.slice(0, sliceLength);
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {temp_technologies.map((technology)=>(
        <div className="w-28 h-28" key={technology.name}>
          <ErrorBoundary>
            <BallCanvas icon={technology.icon} />
          </ErrorBoundary>
        </div>
      ))}

    </div>
  )
}

export default SectionWrapper (Tech, "");