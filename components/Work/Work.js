import Link from "next/link"
import WorkCards from "./WorkCards"
import WorkCards2 from "./WorkCards2"

const Work = () => {
    const arr = [
        {
            'src': '/Images/hide.jpg',
            'link': 'https://dribbble.com/shots/17486222-You-caught-me/attachments/12622564?mode=media',
            'alt': 'Blender self portrait hiding'
        },
        {
            'src': '/Images/tpose.jpg',
            'link': 'https://dribbble.com/shots/17486246-T-pose/attachments/12622589?mode=media',
            'alt': 'Blender self portrait T-pose'
        },
        {
            'src': '/Images/read2.jpg',
            'link': 'https://dribbble.com/shots/17486273-Read-a-book/attachments/12622629?mode=media',
            'alt': 'Blender Self Portrait - Read a book!'
        },
        {
            'src': '/Images/skateboard.jpg',
            'link': 'https://dribbble.com/shots/15649429-Dude-with-skateboard/attachments/7442255?mode=media',
            'alt': 'Blender Self Portrait as a Skater'
        },
    ]

    const arr2 = [
        {
            'src': '/Images/portal.png',
            'link': '/testing',
            'alt': 'Portal UI Design'
        },
        {
            'src': '/Images/hyyp.png',
            'link': '/api',
            'alt': 'Alarm App UI Design'
        },
        {
            'src': '/Images/erin.jpg',
            'link': '/api',
            'alt': 'Erin App UI Design'
        },
        {
            'src': '/',
            'link': '/',
            'alt': 'Coming Soon'
        }

    ]

    return (
        <div className="h-auto w-full mt-[150px]">
            <h1 className="text-[30px] text-center font-bold">Have a look at some of my work!</h1>
            <div className="flex flex-wrap justify-around w-full h-auto mt-7">
                <div className="w-full pl-7 mb-4 text-sm opacity-50 text-green-500">
                    <h1>UI Design</h1>
                </div>
                <WorkCards arr={arr2} />
                <div className="w-full pl-7 mb-4 text-sm opacity-50 text-purple-500">
                    <h1>Characters</h1>
                </div>
                <WorkCards2 arr={arr} />
            </div>
            <div className="mx-auto text-xl w-max px-6 py-2 rounded-2xl backdrop-blur-sm hover:shadow-xl hover:bg-blue-500 hover:scale-[1.05] duration-75 ease-in-out cursor-pointer border-[0.1px] border-white/20 bg-gray-50/10">
                <Link
                passHref
                href={'/Work'}>
                    <h1>more work</h1>
                </Link>
            </div>
        </div>
    )
}

export default Work