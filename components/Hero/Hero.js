import {useState, useRef, useEffect, useCallback} from 'react'
import TypeWriter from '../TypeWriter/TypeWriter'
import {PauseIcon, PlayIcon} from "@heroicons/react/solid"

const Hero = () => {
    const [loaded, setLoaded] = useState(false)
    const [paused, setPaused] = useState(false)
    const vidSrc = (`/Videos/showreel.mp4`)
    const vid = useRef()

    const handleClick = () => {
        if (vid.current.paused) {
            setPaused(!paused)
            vid.current.play()
        } else {
            setPaused(!paused)
            vid.current.pause()
        }
    }


    const setVideoTime = () => {
        if (vid.current) {
            vid.current.currentTime = 8
            vid.current.play()
        }
    }

    const VideoTimer = () => {
        if (!vid.current.paused) {
            setInterval(() => {
                console.log(Math.round(vid.current.currentTime))
                if ((Math.round(vid.current.currentTime) == 40)) {
                    vid.current.currentTime = 8
                }
            }, 900)
        }
    }

    useEffect(() => {
        setVideoTime()
        const time = setTimeout(() => {
            VideoTimer()
        }, 900);
        
        return clearTimeout(time)
    }, [])



    return (
        <div className={`h-auto  w-full`}>
            <TypeWriter />
            <div className='flex group flex-wrap item-center justify-center w-full h-auto mt-12 px-[5%] md:px-40'>
                <div className='realtive w-full h-[210px] md:h-[500px] rotate-[3deg] rounded-3xl backdrop-blur-sm bg-gray-50/10' />
                <div className='absolute w-5/6 md:w-1/2 h-[200px] md:h-[500px] -rotate-[1deg] rounded-3xl backdrop-blur-sm overflow-hidden bg-gray-50/10'>
                    <video poster={'/Images/showreel.png'} ref={vid} className='w-full h-auto' autoPlay muted>
                        <source src={vidSrc} type={'video/mp4'} />
                    </video> :
                    <div className='w-full h-full animate-pulse bg-gray-50/20'>
                    </div>
                </div>
                <div className='flex w-full h-full -mt-[350px] text-purple-500'>
                    {!paused && <PauseIcon onClick={() => handleClick()} className={`h-[200px] m-auto z-20 opacity-0 scale-80 group-hover:opacity-100 cursor-pointer bg-white rounded-full shadow-2xl`} />}
                    {paused && <PlayIcon onClick={() => handleClick()} className={`h-[200px] m-auto z-20 opacity-0 group-hover:opacity-100 cursor-pointer bg-white rounded-full shadow-2xl`} />}
                </div>

            </div>

        </div>
    )
}

export default Hero