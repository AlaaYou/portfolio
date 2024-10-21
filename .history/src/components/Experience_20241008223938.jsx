import { EXPERIENCES } from "../constants"

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index)=>(
            <div key={index}></div>
        ))}
      </div>
    </div>
  )
}

export default Experience