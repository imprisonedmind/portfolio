import Image from "next/image"
import { Fragment } from "react/cjs/react.production.min"
import NavBar from "../Navigation/NavBar"
import Spotify from "../Spotify/Spotify"
import SpotiyTracks from "../Spotify/Spotify"
import TopTracks from "../Spotify/TopTracks"
import Text from "../Text/Text"
import { useState } from "react"
import { AnimatePresence, motion } from 'framer-motion'


const Landing = () => {
    const [showTracks, setShowTracks] = useState()
    const [loaded, setLoaded] = useState(false)

    const loadVariants = {
        initial: { translateY: 300 },
        loaded: { translateY: -150 }
    }

    return (<Fragment>
        <AnimatePresence exitBeforeEnter={true}>
            {showTracks && <TopTracks showTracks={showTracks} setShowTracks={setShowTracks} />}
        </AnimatePresence>
        <div className="flex relative w-screen h-[400px] overflow-hidden shadow-xl bg-slate-900">
            {/* Dude Waving & background elements */}
            <div className="absolute h-[500px] w-[900px] top-[200px] left-[50px] rounded-[100px] rotate-[15deg]  backdrop-blur-xl z-20 bg-slate-400/10" />
            <div className="absolute h-[80px] w-[750px] top-[250px] left-[150px] rounded-[100px] rotate-[15deg] shadow-xl backdrop-blur-xl z-20 bg-slate-400/10" />
            <div className="absolute h-[500px] w-[900px] top-[380px] left-[60px] rounded-[30px] rotate-[15deg] shadow-xl  backdrop-blur-xl z-20 bg-slate-400/10" />
            <motion.div
                variants={loadVariants}
                initial={'initial'}
                animate={loaded ? 'loaded' : 'initial'}
                transition={{ duration: 0.5, type: "ease-in" }}
                className="relative  h-[900px] w-[800px] z-20">
                <Image
                    alt={'Luke Stephens'}
                    src={'/images/dude.png'}
                    layout={'fill'}
                    onLoadingComplete={() => setLoaded(true)}
                />
            </motion.div>
            {/* HI I am container */}
            <div className="flex flex-col justify-center pt-12 h-full w-[300px z-30">
                <div className="flex flex-wrap items-center h-max w-full">
                    <div className="w-full">
                        <Text size={"font-thin"} style={"text-xl opacity-50"} value={'Hi, my name is'} />
                    </div>
                    <h1 className="text-[100px] -mt-7 font-[900] text-gray-200">Luke Stephens</h1>
                </div>
                <Spotify showTracks={showTracks} setShowTracks={setShowTracks} />
            </div>

            {/* Big blur gradient */}
            <div className="absolute w-[1500px] h-[500px] top-[100px] left-[100px] blur-[150px] rotate-[25deg] opacity-50 bg-gradient-to-r from-purple-500 to-cyan-500"></div>
        </div>
    </Fragment>

    )
}

export default Landing