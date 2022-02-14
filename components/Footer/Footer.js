const currentDate = new Date().getFullYear()
import Text from './../Text/Text';

const Footer = () => {
    return (
        <footer className="flex items-center justify-center w-screen h-[100px] mt-20">
            <Text size={"xs"} value={`Copyright © ${currentDate}`} />
        </footer>
    )
}

export default Footer