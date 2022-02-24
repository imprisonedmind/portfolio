import Icons from '../Icons/Icons'

const NavBarIcon = ({ src }) => {
    return (
        <div className="flex w-max px-2  h-full rounded-md sm:ml-4 bg-gray-100/10">
            <div className='relative h-4 w-4 m-auto'>
                <Icons src={src} />
            </div>
        </div>
    )
}

export default NavBarIcon