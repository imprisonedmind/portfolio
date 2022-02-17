import PageLayout from "../../../components/Layout/PageLayout";
import Image from "next/image";

const arr = [
    {
        'src': `/Images/acid/2.png`,
        'alt': `Second drawing of Character`
    },
    {
        'src': `/Images/acid/3.png`,
        'alt': `Third drawing of Character`
    },
    {
        'src': `/Images/acid/4.png`,
        'alt': `Forth drawing of Character`
    },
    {
        'src': `/Images/acid/5.png`,
        'alt': `Fifth drawing of Character`
    },
    {
        'src': `/Images/acid/6.png`,
        'alt': `First Render`
    },
    {
        'src': `/Images/acid/7.png`,
        'alt': `Second Render`
    },
    {
        'src': `/Images/acid/8.png`,
        'alt': `Third Render`
    },
    {
        'src': `/Images/acid/9.png`,
        'alt': `Forth Render`
    },
]

const arr2 = [
    {
        'src': `/Images/acid/plat/7.png`,
        'alt': `First Platform`
    },
    {
        'src': `/Images/acid/plat/8.png`,
        'alt': `First Platform`
    },
    {
        'src': `/Images/acid/plat/4.png`,
        'alt': `First Platform`
    },
    {
        'src': `/Images/acid/plat/10.png`,
        'alt': `First Platform`
    },
    {
        'src': `/Images/acid/plat/11.png`,
        'alt': `First Platform`
    },
    {
        'src': `/Images/acid/plat/12.png`,
        'alt': `First Platform`
    },
]
const AcidMage = () => {
    return (
        <PageLayout>
            <div className=" w-full px-[15%] mt-20">
                {/* hero Section */}
                <div className="grid grid-cols-3">
                    {/*<div className="relative h-[400px] w-auto col-span-1 ">*/}
                    {/*    <Image*/}
                    {/*        alt="Erin Mobile App"*/}
                    {/*        src={'/Images/acid/wallpaper.png'}*/}
                    {/*        layout={'fill'}*/}
                    {/*        className={'object-cover rounded-3xl backdrop-blur-md bg-gray-100/10'}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    <div className="col-span-3 flex flex-col px-[10%] my-auto">
                        <div className="flex justify-between">
                            <h3 className="text-[60px] font-bold text-white mb-8">Acid Mage</h3>
                            <div
                                className={`h-max w-max mt-[30px] py-1 px-4 border-[1px] border-red-500 
                                text-white rounded-xl bg-red-400/10`}>
                                College Brief - 2020
                            </div>

                        </div>
                        <h3 className="text-xl text-white leading-[33px] ">
                            {`A 2D Plat-former game made in unity. `}
                            <br/> <br/>
                            {`Acid Mage follows the journey of a young girl who has fallen into the dark depths of a 
                              bad acid trip. Her inner most demons now become the game of life as she is tasked 
                              to fight her way past her metamorphosed emotions and climb out of her metaphorical hell 
                              in which she is stuck.
                            `}
                        </h3>
                    </div>
                </div>

                {/* Video */}
                <div className="w-full h-auto px-[10.3%]">
                    <div className="w-full h-[600px] rounded-3xl overflow-hidden mt-20 backdrop-blur-md bg-gray-100/10">
                        <iframe id="ytplayer" type="text/html" width="100%" height="100%"
                                src="https://www.youtube.com/embed/NR02OtOpixo?controls=0&loop=1&modestbranding=1"
                                frameBorder="0" allowFullScreen/>
                    </div>
                </div>

                {/* Main Content */}
                <div className={`flex flex-col w-full h-auto mt-20`}>
                    <h3 className={`ml-10 text-xl opacity-50`}>Character Renders</h3>
                    <div className="grid grid-cols-4">
                        {arr.map(item => {
                            return <div
                                key={Math.random(item.length)}
                                className={'h-[400px] w-auto col-span-1 m-7'}>
                                <div className={`h-full w-full p-7 rounded-3xl backdrop-blur-sm bg-gray-100/10`}>
                                    <div className={`relative w-full h-full`}>
                                        <Image
                                            alt={item.alt}
                                            src={item.src}
                                            layout={"fill"}
                                            className={'object-contain '}
                                        />
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>

                {/*Plat Forms*/}
                <div className={`flex flex-col w-full h-auto mt-16`}>
                    <h3 className={`ml-10 text-xl opacity-50`}>Platform Renders</h3>
                    <div className="grid grid-cols-3">
                        {arr2.map(item => {
                            return <div
                                key={Math.random(item.length)}
                                className={'h-[300px] w-auto col-span-1 m-7'}>
                                <div className={`h-full w-full rounded-3xl backdrop-blur-sm bg-gray-100/10`}>
                                    <div className={`relative w-full h-full`}>
                                        <Image
                                            alt={item.alt}
                                            src={item.src}
                                            layout={"fill"}
                                            className={'object-contain '}
                                        />
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>

            </div>
        </PageLayout>
    )
}

export default AcidMage