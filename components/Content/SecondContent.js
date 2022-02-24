import Hero from "../Hero/Hero"
import Work from "../Work/Work"


const SecondContent = () => {
    return (
        <div className="relative w-screen h-auto">
            {/* <div id="hero" className="absolute w-screen h-full z-10" /> */}
            <div className="relative w-screen h-auto px-[5%] md:px-[15%]">
                <Hero />
                <Work/>
                {/* <Background/> */}
            </div>
        </div>

    )
}

export default SecondContent