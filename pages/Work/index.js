import Header from "../../components/Header/Header"
import PageLayout from "../../components/Layout/PageLayout"
import WorkCards from "../../components/Work/WorkCards"
import WorkCards2 from "../../components/Work/WorkCards2"



const Work = () => {
    return (<PageLayout>
        <div className="flex flex-wrap justify-around w-full h-auto mt-7 px-[5%] md:px-[15%]">
            <div className="w-full pl-7 mb-4 text-sm opacity-50 text-green-500">
                <h1>UI Design</h1>
            </div>
            <WorkCards endPoint={`/api/home/ui`} colours={'border-green-500 bg-green-500/60'}/>
            <div className="w-full pl-7 mb-4 text-sm opacity-50 text-purple-500">
                <h1>Characters</h1>
            </div>
            <WorkCards2 endPoint={`/api/home/characters`} colours={'border-purple-500 bg-purple-500/60'}/>
            <div className="w-full pl-7 mb-4 text-sm opacity-50 text-blue-500">
                <h1>Animations</h1>
            </div>
            <WorkCards2 endPoint={`/api/home/animation`}  colours={'border-blue-500 bg-blue-500/60'}/>
            <div className="w-full pl-7 mb-4 text-sm opacity-50 text-red-500">
                <h1>Game Design</h1>
            </div>
            <WorkCards endPoint={`/api/home/game`}  colours={'border-red-500 bg-red-500/60'}/>
        </div>
    </PageLayout>)
}

export default Work