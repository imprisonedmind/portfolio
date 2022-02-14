import {Fragment, useState} from "react"
import Image from "next/image"
import Link from "next/link"

const WorkCards = ({arr}) => {
    const [loaded, setLoaded] =useState(false)

    return (<Fragment>
        {arr.map(item => {
            return <Link
                passHref
                key={Math.random(item.alt.length)}
                href={item.link}>
                <div className={`${!loaded ? `animate-pulse` : null} relative flex  h-[350px] w-[300px] mx-4 mb-12 cursor-pointer hover:scale-[1.05] duration-200 ease-in-out rounded-3xl overflow-hidden backdrop-blur-md bg-gray-50/10`}>
                   <Image
                        alt={item.alt}
                        src={item.src}
                        layout={'fill'}
                        onLoad={() => setLoaded(true)}
                        className={'object-cover z-10'}
                    />
                    <div className="flex items-center justify-center w-full h-full">
                       {loaded && <h1 className="opacity-10">
                           {`${loaded ? 'Coming Soon!' : ''}`}
                           </h1>}
                    </div>
                    <p className="hidden">{item.alt}</p>
                </div>
            </Link>
        })}
    </Fragment>)
}

export default WorkCards