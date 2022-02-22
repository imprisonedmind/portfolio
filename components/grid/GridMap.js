import Image from "next/image";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json())

const GridMap = ({endPoint}) => {
    const { data, error } = useSWR(endPoint, fetcher)

    if (error) return <div>api error</div>
    if (!data) return <div>loading</div>

    return (
        <div className="grid grid-cols-4">
            {data.map(item => {
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
    )

}

export default GridMap