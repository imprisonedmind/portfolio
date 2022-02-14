import Image from "next/image"
import React, { useEffect, useState, useCallback } from "react"
import Link from "next/link"
import Text from "../Text/Text"
import { motion } from "framer-motion"

const Spotify = ({ showTracks, setShowTracks }) => {
    const [album, setAlbum] = useState()

    const fetchTracks = useCallback(async () => {
        const response = await fetch('/api/CurrentlyPlaying')
        const data = await response.json()
        setAlbum(data)
    }, [setAlbum])

    useEffect(() => {
        fetchTracks()
    }, [])

    useEffect(() => {
        setInterval(() => {
            fetchTracks()
        }, 30 * 1000);

        const clearAlbum = () => {
            setAlbum(null)
        }

        return clearAlbum()
    }, [setAlbum])


    return (<div className="w-full">
        {/* Top Tracks */}
        <Text size={"font-thin"} style={"text-md mb-2 opacity-50"} value={`I'm Listening to`} />
        {/* Currently Playing */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, type: 'tween' }}>
            {album ? <div className="flex w-max rounded-md backdrop-blur-xl bg-gray-900/20 p-4">
                <div className="relative h-12 w-12">
                    <Image
                        alt={album.name}
                        src={album.isPlaying ? album.albumImageUrl : `/icons/spotify.svg`}
                        layout="fill"
                        className="rounded-full"
                    />
                </div>
                {album.isPlaying ? <a className="cursor-pointer" rel="noreferrer" target={"_blank"} href={album.songUrl}>
                    <div className="flex flex-col ml-4">
                        <p className="my-auto text-2xl  ">{album.title}</p>
                        <p className="text-xs">{`${album.artist} - ${album.album}`}</p>
                    </div>
                </a> : <div onClick={() => setShowTracks(!showTracks)} className="flex flex-col ml-4 cursor-pointer">
                    <p className="my-auto text-2xl  ">Nothing Right now</p>
                    <p className="text-xs">But you can check out my top tracks!</p>
                </div>}
            </div> :
                <div className="flex h-20 w-[300px] rounded-md backdrop-blur-xl bg-gray-900/20">
                    <div className="flex-shrink-0 h-12 w-12 m-auto ml-4 animate-pulse backdrop-blur-xl bg-gradient-to-r from-slate-50/10 to-white/20 rounded-full" />
                    <div className="flex flex-col justify-evenly h-full w-full px-4 py-1 ">
                        <div className="h-6 w-full animate-pulse backdrop-blur-xl bg-gradient-to-r from-slate-50/10 to-white/20 rounded-full" />
                        <div className="h-4 w-full animate-pulse backdrop-blur-xl bg-gradient-to-r from-slate-50/10 to-white/20 rounded-full" />

                    </div>
                </div>}
        </motion.div>

    </div>
    )
}

export default Spotify