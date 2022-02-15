import Text from "../Text/Text"
import Link from "next/link"

const NavBarElement = ({title, link, colour}) => {
    return (
        <Link
            passHref
            href={link}>
            <div className={`${colour} flex w-max px-4 h-full rounded-md mr-4 cursor-pointer group bg-gray-100/10"`}>
                <Text size={"xs"} style={"m-auto uppercase group-hover:underline"} value={title} />
            </div >
        </Link >
    )
}

export default NavBarElement