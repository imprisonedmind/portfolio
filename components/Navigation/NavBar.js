import NavBarElement from "./NavBarElement"
import NavBarIcon from "./NavBarIcon"
import {useEffect, useState} from "react"
import Router, {useRouter} from "next/router"

const NavBar = () => {
    const [colour, setColour] = useState()
    const router = useRouter()

    useEffect(() => {
        if (router.asPath.includes('Work')) {
            setColour('bg-green-500')
        }
    }, [])

    return (
        <div className="flex justify-center sm:justify-between w-full h-[80px] py-[25px] sm:px-[5%] md:px-[15%]">
            <div className="flex justify-evenly w-full sm:w-auto">
                <NavBarElement title={"Home"} link={'/'} colour={router.asPath == '/' ? 'bg-blue-500' : 'bg-gray-100/10'} />
                <NavBarElement title={"Work"} link={'/Work'} colour={router.asPath.includes('/Work') ? 'bg-pink-500' : 'bg-gray-100/10'} />
                <NavBarElement title={"Projects"} link={'/Projects'} colour={router.asPath.includes('/Projects') ? 'bg-green-500' : 'bg-gray-100/10'} />
                <NavBarElement title={"Words"} link={'/Words'} colour={router.asPath == '/Words' ? 'bg-orange-500' : 'bg-purple-100/10'} />
            </div>
            <div className="hidden sm:flex justify-evenly w-auto">
                <a href={"https://dribbble.com/LukeStephens"} target={"_blank"} rel="noreferrer">
                    <NavBarIcon src={"/Icons/dribbble.svg"} />
                </a>
                <a href={"https://www.behance.net/lukestephens"} target={"_blank"} rel="noreferrer">
                    <NavBarIcon src={"/Icons/behance.svg"} />
                </a>
                <a href={"https://za.linkedin.com/in/luke-stephens-za"} target={"_blank"} rel="noreferrer">
                    <NavBarIcon src={"/Icons/linkedin.svg"} />
                </a>
                <a href={"https://github.com/imprisonedmind"} target={"_blank"} rel="noreferrer">
                    <NavBarIcon src={"/Icons/github.svg"} />
                </a>

            </div>

        </div>
    )
}

export default NavBar