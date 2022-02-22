import {Fragment,useState} from "react"
import Image from "next/image"
import Link from "next/link"
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json())

const WorkCards = ({endPoint, colours}) => {
    const [loaded, setLoaded] = useState(false)
    const { data, error } = useSWR(endPoint, fetcher)

    if (error) return <div>api error</div>
    if (!data) return <div>loading</div>

    return (<Fragment>
        {data.map(item => {
            return <Link
                passHref
                key={Math.random(item.alt.length)}
                href={item.link}>
                <div className={`${!loaded ? `animate-pulse` : null} 
                     relative flex  h-[400px] w-[300px] mx-4 mb-12 
                     cursor-pointer hover:scale-[1.05] duration-200 
                     ease-in-out rounded-3xl overflow-hidden 
                     backdrop-blur-md bg-gray-50/10`}>
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
            </Link>
        })}
    </Fragment>)
}

export default WorkCards