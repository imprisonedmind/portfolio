import Image from "next/image"
import Text from "../Text/Text"
import {motion} from "framer-motion"
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json())

const Spotify = ({showTracks, setShowTracks}) => {
    const {data, error} = useSWR(`/api/currentlyPlaying`, fetcher)

    if (error) return <div>api error</div>
    if (!data) return <div className="flex h-20 w-[300px] rounded-md backdrop-blur-xl bg-gray-900/20">
        <div className="flex-shrink-0 h-12 w-12 m-auto ml-4 animate-pulse backdrop-blur-xl bg-gradient-to-r from-slate-50/10 to-white/20 rounded-full"/>
        <div className="flex flex-col justify-evenly h-full w-full px-4 py-1 ">
            <div className="h-6 w-full animate-pulse backdrop-blur-xl bg-gradient-to-r from-slate-50/10 to-white/20 rounded-full"/>
            <div className="h-4 w-full animate-pulse backdrop-blur-xl bg-gradient-to-r from-slate-50/10 to-white/20 rounded-full"/>
        </div>
    </div>

    return (<div className="hidden md:flex-col md:flex w-full">
            {/* Top Tracks */}
            <Text size={"font-thin"} style={"text-md mb-2 opacity-50"} value={`I'm Listening to`}/>
            {/* Currently Playing */}
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5, type: 'tween'}}>
                {data && <div className="flex w-max rounded-md backdrop-blur-xl bg-gray-900/20 p-4">
                    <div className="relative h-12 w-12">
                        <Image
                            alt={data.name}
                            src={data.isPlaying ? data.albumImageUrl : `/Icons/spotify.svg`}
                            layout="fill"
                            className="rounded-full"
                        />
                    </div>
                    {data.isPlaying ?
                        <a className="cursor-pointer" rel="noreferrer" target={"_blank"} href={data.songUrl}>
                            <div className="flex flex-col ml-4">
                                <p className="my-auto text-2xl  ">{data.title}</p>
                                <p className="text-xs">{`${data.artist} - ${data.album}`}</p>
                            </div>
                        </a> :
                        <div onClick={() => setShowTracks(!showTracks)} className="flex flex-col ml-4 cursor-pointer">
                            <p className="my-auto text-2xl  ">Nothing Right now</p>
                            <p className="text-xs">But you can check out my top tracks!</p>
                        </div>}
                </div>}
            </motion.div>

        </div>
    )
}

export default Spotify