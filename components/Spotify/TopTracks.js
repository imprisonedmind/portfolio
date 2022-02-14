import { XIcon } from "@heroicons/react/solid"
import { useEffect, useCallback, useState } from "react"
import Image from "next/image"
import { PlayIcon } from "@heroicons/react/solid"
import { AnimatePresence } from "framer-motion"
import { motion } from "framer-motion"

const TopTracks = ({ showTracks, setShowTracks }) => {
    const [tracks, setTracks] = useState()
    const fetchTop = async () => {
        const response = await fetch('/api/TopTracks')
        const data = await response.json()
        setTracks(data)
    }

    const loadArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    useEffect(() => {
        console.log('fetching')
        fetchTop()
    }, [])

    return (
        <div onClick={() => setShowTracks(!showTracks)} className="absolute items-center flex justify-center top-0 w-screen h-screen z-50 bg-slate-900/20">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3, type: 'tween' }}
                className="absolute w-1/2 h-5/6 m-auto rounded-xl shadow-xl backdrop-blur-xl bg-gray-300/20 z-60">
                {/* nav Close */}
                <nav className="flex justify-between h-10 py-2 pl-4 w-full">
                    <h1>Spoty Top Tracks</h1>
                    <div onClick={() => setShowTracks(!showTracks)} className="h-8 w-8 p-2 mr-2 cursor-pointer bg-gray-300/10 rounded-full my-auto">
                        <XIcon />
                    </div>
                </nav>
                {tracks ? <div className="flex flex-wrap justify-evenly w-full h-[calc(100%-40px)] overflow-y-scroll">
                    {tracks.tracks.map(track => {
                        return <div key={Math.random(track.length)} className="flex w-1/4 h-[300px] py-4 mx-2">
                            <a href={track.songUrl} rel="noreferrer" target={"_blank"} className="hover:scale-[108%] duration-300 transition-ease-in-out relative flex group cursor-pointer flex-col items-center justify-center w-full mx-auto p-4 rounded-md bg-gray-200/10">
                                <div className="relative">
                                    <Image
                                        alt={track.title}
                                        src={track.img}
                                        height={200}
                                        width={200}
                                        className="rounded-md shadow-md"
                                    />
                                </div>
                                <div className="absolute bottom-16 left-6 h-8 w-8 -mt-7 rounded-full">
                                    <Image
                                        alt={'spotify'}
                                        src={'/icons/spotify.svg'}
                                        height={200}
                                        width={200}
                                        className="  shadow-xl"
                                    />
                                </div>
                                <div className="flex flex-col items-center w-full">
                                    <p className="w-full text-center truncate ml-4">{track.title}</p>
                                    <p className="text-xs">{track.artist}</p>
                                </div>


                            </a>
                        </div>
                    })}</div> :
                    <div className="flex flex-wrap justify-evenly w-ful px-4 overflow-y-hidden h-[calc(100%-40px)]">
                        {loadArray.map(item => {
                            return <div key={item.length} className="animate-pulse relative flex group cursor-pointer flex-col items-center justify-start w-1/4 h-1/3 m-4 p-4 rounded-md bg-gray-200/10">
                                <div className="w-full h-3/4 rounded-md bg-gray-50/10 backdrop-blur-md"/>
                                <div className="w-full h-1/4 mt-2 rounded-md bg-gray-50/10 backdrop-blur-md"/>
                                <p className="hidden">{item}</p>
                            </div>
                        })}
                    </div>
                }
            </motion.div>
        </div>
    )
}

export default TopTracks