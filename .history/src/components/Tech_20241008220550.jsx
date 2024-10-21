import { RiReactjsLine } from "react-icons/ri";

const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl ">Technologies</h2>
      <div className="fle flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-50">
            <RiReactjsLine/>
        </div>
      </div>
    </div>
  )
}

export default Tech
