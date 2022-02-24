import Image from "next/image"
import {Fragment} from "react/cjs/react.production.min"
import Spotify from "../Spotify/Spotify"
import TopTracks from "../Spotify/TopTracks"
import Text from "../Text/Text"
import {useEffect, useLayoutEffect, useRef, useState} from "react"
import {AnimatePresence, motion} from 'framer-motion'


const Landing = () => {
    const [showTracks, setShowTracks] = useState()
    const [loaded, setLoaded] = useState(false)
    const [translate, setTranslate] = useState(0)
    const [w, setW] = useState(null)
    const div = useRef()

    console.log(w)

    useEffect(() => {
        setW(window.innerWidth)
        const handleResize = () => {
            setW(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    },[])

    useEffect(() => {
        if (w < 500) {
            setTranslate(100)
        }
        if (w <= 640) {
            setTranslate(-20)
        }
        if (w >= 640) {
            setTranslate(-60)
        }
        if (w >= 768) {
            setTranslate(20)
        }
        if (w >= 1024) {
            setTranslate(-80)
        }
        if (w >= 1280) {
            setTranslate(-100)
        }
        if (w >= 1536) {
            setTranslate(-150)
        }


    },[w])


    const loadVariants = {
        initial: {translateY: 0},
        loaded: {translateY: translate}
    }

    return (<Fragment>
            <AnimatePresence exitBeforeEnter={true}>
                {showTracks && <TopTracks showTracks={showTracks} setShowTracks={setShowTracks}/>}
            </AnimatePresence>
            <div ref={div} className="flex relative  w-screen h-[150px] md:h-[300px] lg:h-[400px] overflow-hidden shadow-xl bg-slate-900">
                {/* Dude Waving & background elements */}
                <div className={`absolute w-full h-full`}>
                    <div className={`absolute h-[300px] w-[400px] md:h-[400px] md:w-[400px] 
                    lg:h-[500px] lg:w-[600px] xl:w-[800px] mt-20 md:mt-40 lg:mt-60 px-5 
                    rounded-[50px] rotate-[15deg] backdrop-blur-xl z-20 bg-slate-400/10`}>
                        <div className={`h-1/6 w-full rounded-[100px] mt-5 shadow-xl backdrop-blur-xl 
                        bg-slate-400/10`}/>
                        <div className={`h-5/6 w-full rounded-[30px] mt-5 shadow-xl  backdrop-blur-xl 
                        bg-slate-400/10`}/>
                    </div>
                </div>
                <div className="flex justify-center h-full w-1/2 z-20">
                    <div className={`h-full w-full`}>
                        <motion.div variants={loadVariants}
                                    initial={'initial'}
                                    animate={loaded ? 'loaded' : 'initial'}
                                    transition={{duration: 0.5, type: "ease-in"}}
                                    className={`relative h-full w-full`}>
                            <Image
                                alt={'Luke Stephens'}
                                src={'/Images/dude.png'}
                                layout={'responsive'}
                                height={400}
                                width={400}
                                className={`object-contain`}
                                onLoadingComplete={() => setLoaded(true)}
                            />
                        </motion.div>

                    </div>

                </div>
                {/* HI I am container */}
                <div className="flex flex-col justify-evenly h-full w-1/2 z-30">
                    <div className="flex flex-wrap items-center py-12 md:py-0 h-full md:h-max w-full">
                        <div className="w-full">
                            <Text size={"font-thin"} style={"text-sm md:text-xl opacity-50"} value={'Hi, my name is'}/>
                        </div>
                        <h1 className="text-2xl md:text-[40px] lg:text-[60px] xl:text-[80px] lg:mt-4 xl:mt-7 font-bold text-gray-200">Luke Stephens</h1>
                    </div>
                    <Spotify showTracks={showTracks} setShowTracks={setShowTracks}/>
                </div>

                {/* Big blur gradient */}
                <div
                    className="absolute w-[1500px] h-[500px] top-[100px] left-[100px] blur-[150px] rotate-[25deg] opacity-50 bg-gradient-to-r from-purple-500 to-cyan-500"></div>
            </div>
        </Fragment>

    )
}

export default Landing