import Image from "next/image";
import PageLayout from "../../../components/Layout/PageLayout";

const arr = [
    {
        'src': `/Images/hyyp/3.png`,
        'alt': 'Mobile Security App -1'
    },
    {
        'src': `/Images/hyyp/4.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/hyyp/1.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/hyyp/2.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/hyyp/5.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/hyyp/6.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/hyyp/7.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/hyyp/8.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/hyyp/9.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/hyyp/10.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/hyyp/11.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/hyyp/12.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/hyyp/13.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/hyyp/14.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/hyyp/15.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/hyyp/16.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/hyyp/22.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/hyyp/17.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/hyyp/18.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/hyyp/19.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/hyyp/20.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/hyyp/21.png`,
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

const SecurityApp = () => {
    return (
        <PageLayout>
            <div className=" w-full px-[15%] mt-20">
                {/* hero Section */}
                <div className="grid grid-cols-1">
                    <div className="col-span-2 flex flex-col justify-center">
                        <div className="flex justify-between">
                            <h3 className="text-[60px] font-bold text-white mb-8">Mobile Security App</h3>
                            <div
                                className="h-max w-max mt-[30px] py-1 px-4 border-[1px] border-blue-500 text-white rounded-xl bg-blue-400/10">
                                MVP concept - 2022
                            </div>

                        </div>
                        <h3 className="text-xl text-white leading-[33px] ">
                            {`MVP mobile app for a security client.`}
                            <br/> <br/>
                            {`Concept to refactor user experience and interface for an existing security app.
                             Based on competitor market research and quick win solution to boost customer satisfaction.`}
                        </h3>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-4 mt-24">
                    {arr.map(item => {
                        return <div
                            key={Math.random(item.length)}
                            className={'h-[600px] w-auto col-span-1 p-4'}>
                            <div className={`relative h-full w-full`}>
                                <Image
                                    alt={item.alt}
                                    src={item.src}
                                    layout={"fill"}
                                    className={'object-contain'}
                                />
                            </div>

                        </div>
                    })}
                </div>
            </div>
        </PageLayout>
    )
}

export default SecurityApp