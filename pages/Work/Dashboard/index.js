import Image from "next/image";
import PageLayout from "../../../components/Layout/PageLayout";

const arr1 = [
    {
        'src': `/Images/portal/0.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/portal/1.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/portal/2.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/portal/3.png`,
        'alt': 'Erin App - Onboard 1'
    },
]

const arr2 = [
    {
        'src': `/Images/portal/7.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/portal/4.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/portal/5.png`,
        'alt': 'Erin App - Onboard 1'
    },
    {
        'src': `/Images/portal/6.png`,
        'alt': 'Erin App - Onboard 1'
    },
]


const Dashboard = () => {
    return(
        <PageLayout>
            <div className=" w-full px-[15%] mt-20">
                {/* hero Section */}
                <div className="grid grid-cols-3">
                    <div className="relative h-[550px] w-auto col-span-1 ">
                        <Image
                            alt="Erin Mobile App"
                            src={'/Images/portal.png'}
                            layout={'fill'}
                            className={'object-cover rounded-3xl backdrop-blur-md bg-gray-100/10'}
                        />
                    </div>
                    <div className="col-span-2 flex flex-col justify-center px-[5%]">
                        <div className="flex justify-between">
                            <h3 className="text-[60px] font-bold text-white mb-8">Portal Dashboard</h3>
                            <div className="h-max w-max mt-[30px] py-1 px-4 border-[1px] border-gray-500 text-white rounded-xl bg-gray-400/10">
                                Client Portal - 2022
                            </div>

                        </div>
                        <h3 className="text-xl text-white leading-[33px] ">
                            {`Active web app for client. `}
                            <br /> <br />
                            {`Dashboard and monitoring portal for managing hardware devices. 
                              Ability to view the 'online' and 'offline' state of reporting devices.
                              Track reported communication between devices. 
                              Global overview of estate and device health.`}
                        </h3>
                    </div>
                </div>

                {/* Brain Storm 1 */}
                <div className="grid grid-cols-2">
                    {arr1.map(item => {
                        return <div
                            key={Math.random(item.length)}
                            className={'relative h-[400px] w-auto col-span-1 m-7'}>
                            <Image
                                alt={item.alt}
                                src={item.src}
                                layout={"fill"}
                                className={'object-fill rounded-3xl'}
                            />
                        </div>
                    })}
                </div>

                {/* Brain Storm 2 */}
                <div className="grid grid-cols-2">
                    {arr2.map(item => {
                        return <div
                            key={Math.random(item.length)}
                            className={'relative h-[400px] w-auto col-span-1 m-7'}>
                            <Image
                                alt={item.alt}
                                src={item.src}
                                layout={"fill"}
                                className={'object-fill rounded-3xl'}
                            />
                        </div>
                    })}
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-4">
                    {arr2.map(item => {
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

export  default Dashboard