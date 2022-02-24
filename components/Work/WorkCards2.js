import {Fragment, useState} from "react"
import Image from "next/image"
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json())

const WorkCards2 = ({endPoint, colours}) => {
    const [loaded, setLoaded] = useState(false)
    const { data, error } = useSWR(endPoint, fetcher)

    if (error) return <div>api error</div>
    if (!data) return <div>loading</div>

    return (<Fragment>
        {data.map(item => {
            return <a
                target={'-_blank'}
                key={Math.random(item.length)}
                href={item.link}
                className={`w-full md:w-auto mx-4 mb-12 `}>
                <div className={`${!loaded ? `animate-pulse` : null} relative flex 
                h-[450px] w-full h-[400px]  md:w-[300px] cursor-pointer hover:scale-[1.05] 
                duration-200 ease-in-out rounded-3xl overflow-hidden backdrop-blur-md bg-gray-50/10`}>
                    <Image
                        alt={item.alt}
                        src={item.src}
                        layout={'fill'}
                        onLoadingComplete={() => setLoaded(true)}
                        className={'object-cover z-10'}
                    />
                    <div className="flex items-center justify-center w-full h-full">
                        {loaded && <h1 className="opacity-10">
                            {`${loaded ? 'Coming Soon!' : ''}`}
                        </h1>}
                    </div>
                    {item.desc && <div className={`absolute flex bottom-4 px-4 left-4 h-[40px] 
                                        w-auto z-10 rounded-xl border-[1px] backdrop-blur-sm 
                                        overflow-hidden shadow-md ${colours}`}>
                        <h3 className="my-auto text-sm">{item.desc}</h3>
                    </div>}
                    <p className="hidden">{item.alt}</p>
                </div>
            </a>
        })}
    </Fragment>)
}

export default WorkCards2