import Text from "../Text/Text"


const Logo = () => {
    return (
        <div className="flex w-[200px] h-full p-2 ">
            <div className="flex w-full h-full m-auto">
                <Text size={'Logo'} style={'leading-[35px]'} value={'Luke Stephens'}/>
            </div>
        </div>
    )
}

export default Logo