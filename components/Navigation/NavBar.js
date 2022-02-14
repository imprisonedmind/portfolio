import Logo from "../Logo/Logo"
import NavBarElement from "./NavBarElement"
import Text from "../Text/Text"
import NavBarIcon from "./NavBarIcon"
import Link from "next/link"
import { Fragment } from "react/cjs/react.production.min"

const NavBar = () => {
    return (
        <div className="flex justify-between w-full h-[80px] py-[25px] px-[15%]">
            <div className="flex">
                <NavBarElement title={"Home"} link={'/'} />
                <NavBarElement title={"Work"} link={'/Work'}/>
                <NavBarElement title={"Projects"} link={'Projects'} />
                <NavBarElement title={"Words"} link={'words'} />
            </div>
            <div className="flex">
                <a href={"https://dribbble.com/LukeStephens"} target={"_blank"} rel="noreferrer">
                    <NavBarIcon src={"/Icons/dribbble.svg"} />
                </a>
                <a href={"https://www.behance.net/lukestephens"} target={"_blank"} rel="noreferrer">
                    <NavBarIcon src={"/Icons/behance.svg"} />
                </a>
                <a href={"https://za.linkedin.com/in/luke-stephens-za"} target={"_blank"} rel="noreferrer">
                    <NavBarIcon src={"/Icons/linkedin.svg"} />
                </a>

            </div>

        </div>
    )
}

export default NavBar