import Image from "next/dist/client/image"

const Icons = ({src}) => {
    return (
        <Image
            alt={"Icon"}
            src={src}
            layout={"fill"}
        />
    )
}

export default Icons