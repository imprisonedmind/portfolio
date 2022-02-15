import Image from "next/image"
import PageLayout from "../../components/Layout/PageLayout"
import NavBar from '../../components/Navigation/NavBar'

const arr = [
    {
        'src': `/Images/erin/onboard1.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/erin/onboard2.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/erin/onboard3.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/erin/onboard4.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/erin/onboard5.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/erin/onboard6.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/erin/sign1.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/erin/sign2.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/erin/sign3.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/erin/scan1.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/erin/scan2.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/erin/scan3.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/erin/scan4.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/erin/scan5.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/erin/scan6.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/erin/homeScreen.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/erin/menuOpen.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/erin/accEdit.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/erin/accSettings.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/erin/appNoti.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/erin/appStats.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/erin/deviceEdit.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/erin/deviceSettings.png`,
        'alt': 'Erin App - Onboard 1'
    },
]

const arr2 = [
    {
        'src': `/Images/erin/persona1.png`,
        'alt': `Persona 1`
    },
    {
        'src': `/Images/erin/persona2.png`,
        'alt': `Persona 2`
    },
    {
        'src': `/Images/erin/persona3.png`,
        'alt': `Persona 3`
    },

]

const Erin = () => {
    return (
        <PageLayout>
            <div className=" w-full px-[15%] mt-20">
                {/* hero Section */}
                <div className="grid grid-cols-3">
                    <div className="relative h-[550px] w-auto col-span-1 ">
                        <Image
                            alt="Erin Mobile App"
                            src={'/Images/erin/erin-phone2.png'}
                            layout={'fill'}
                            className={'object-cover rounded-3xl backdrop-blur-md bg-gray-100/10'}
                        />
                    </div>
                    <div className="col-span-2 flex flex-col px-[5%]">
                        <div className="flex justify-between">
                            <h3 className="text-[60px] font-bold text-white mb-8">Erin Mobile App</h3>
                            <div className="h-max w-max mt-[30px] py-1 px-2 border-[1px] border-blue-500 text-white rounded-xl bg-blue-400/10">
                                Uni Brief - 2020
                            </div>

                        </div>
                        <h3 className="text-xl text-white leading-[33px] ">
                            {`A mobile application designed for bettering the relationship with device usage.`}
                            <br /> <br />
                            {`3.5 billion humans use cell phones which amounts to 45% of the world population. 
                            The average person that falls into the 45% checks their phone 30 times a week and 
                            spends just over an hour on social media a day, This statistic is linked with a 
                            2.7% more likely hood of mental health issues.`}
                            <br /> <br />
                            {`The Proposed solution is to create a cell phone application that tracks users app
                            screen time along with their emotional triggers via facial recognition and HRV scanning.
                            This will allow for notifications to be pushed to the user about their emotional triggers
                            for the duration of application use. The app will address the issues linked to phone
                            use and mental health issues in the current and the future with invaluable data about
                            how user's applications make them feel.`}
                        </h3>
                    </div>
                </div>

                {/* Video */}
                <div className="w-full h-auto px-[10.3%]">
                    <div className="w-full h-[600px] rounded-3xl overflow-hidden mt-20 backdrop-blur-md bg-gray-100/10">
                        <iframe id="ytplayer" type="text/html" width="100%" height="100%"
                            src="https://www.youtube.com/embed/pQMBYXwfh20?controls=0&loop=1&modestbranding=1"
                            frameBorder="0" allowFullScreen />
                    </div>
                </div>


                {/* Personas */}
                <div className="flex flex-col relative w-full h-auto my-20">
                    {arr2.map(item => {
                        return <div
                            key={Math.random(item.length)}
                            className={'relative w-full h-[400px] my-7'}>
                            <Image
                                alt={item.alt}
                                src={item.src}
                                layout={'fill'}
                                className={'object-contain '}
                            />
                        </div>
                    })}
                </div>

                {/* UserFlow */}
                <div className="relative w-full h-[700px] mb-20">
                    <Image
                        alt="UserFlow"
                        src={'/Images/erin/userflow.png'}
                        layout={"fill"}
                        className={'object-cover rounded-3xl backdrop-blur-md bg-gray-100/10'}
                    />
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-4">
                    {arr.map(item => {
                        return <div
                            key={Math.random(item.length)}
                            className={'relative h-[600px] w-auto col-span-1'}>
                            <Image
                                alt={item.alt}
                                src={item.src}
                                layout={"fill"}
                                className={'object-contain '}
                            />
                        </div>
                    })}
                </div>
            </div>
        </PageLayout>
    )
}

export default Erin