import Link from "next/link"
import WorkCards from "./WorkCards"
import WorkCards2 from "./WorkCards2"

const Work = () => {
    return (
        <div className="hidden md:flex h-auto w-full mt-20 md:mt-[150px]">
            <h1 className="tex-3xl md:text-[30px] text-center font-bold">Have a look at some of my work!</h1>
            <div className="flex flex-wrap justify-around w-full h-auto mt-7">
                <div className="w-full pl-7 mb-4 text-sm opacity-50 text-green-500">
                    <h1>UI Design</h1>
                </div>
                <WorkCards endPoint={`/api/home/ui`} colours={'border-green-500 bg-green-500/60'} />
                <div className="w-full pl-7 mb-4 text-sm opacity-50 text-purple-500">
                    <h1>Characters</h1>
                </div>
                <WorkCards2 endPoint={`/api/home/characters`} colours={'border-purple-500 bg-purple-500/60'}  />
            </div>
            <div className="mx-auto text-xl w-max px-6 py-2 rounded-2xl backdrop-blur-sm hover:shadow-xl hover:bg-pink-500 hover:scale-[1.05] duration-75 ease-in-out cursor-pointer border-[0.1px] border-white/20 bg-gray-50/10">
                <Link
                passHref
                href={'/Work'}>
                    <h1>more work</h1>
                </Link>
            </div>
        </div>
    )
}

export default Work