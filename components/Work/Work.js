import Link from "next/link"
import WorkCards from "./WorkCards"
import WorkCards2 from "./WorkCards2"

const Work = () => {

    const arr = [
        {
            'src': '/Images/hide.jpg',
            'link': 'https://dribbble.com/shots/17486222-You-caught-me/attachments/12622564?mode=media',
            'alt': 'Blender self portrait hiding',
            'desc': '2021 - You caught me!'
        },
        {
            'src': '/Images/tpose.jpg',
            'link': 'https://dribbble.com/shots/17486246-T-pose/attachments/12622589?mode=media',
            'alt': 'Blender self portrait T-pose',
            'desc': '2021 - T Pose'
        },
        {
            'src': '/Images/read2.jpg',
            'link': 'https://dribbble.com/shots/17486273-Read-a-book/attachments/12622629?mode=media',
            'alt': 'Blender Self Portrait - Read a book!',
            'desc': '2021 - Read a book!'
        },
        {
            'src': '/Images/skateboard.jpg',
            'link': 'https://dribbble.com/shots/15649429-Dude-with-skateboard/attachments/7442255?mode=media',
            'alt': 'Blender Self Portrait as a Skater',
            'desc': '2021 - Skater Dude'
        },
    ]
    
    const arr2 = [
        {
            'src': '/Images/portal.png',
            'link': '/testing',
            'alt': 'Portal UI Design',
            'desc': '2022 - Custom Monitoring'
        },
        {
            'src': '/Images/hyyp.png',
            'link': '/api',
            'alt': 'Alarm App UI Design',
            'desc': '2022 - Mobile Alarm App'
        },
        {
            'src': '/Images/erin.jpg',
            'link': '/Work/erin',
            'alt': 'Erin App UI Design',
            'desc': '2020 - Uni Brief'
        },
        {
            'src': '/Images/empty.png',
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
                <WorkCards arr={arr2} colours={'border-green-500 bg-green-500/60'} />
                <div className="w-full pl-7 mb-4 text-sm opacity-50 text-purple-500">
                    <h1>Characters</h1>
                </div>
                <WorkCards2 arr={arr} colours={'border-purple-500 bg-purple-500/60'}  />
            </div>
            <div className="mx-auto text-xl w-max px-6 py-2 rounded-2xl backdrop-blur-sm hover:shadow-xl hover:bg-pink-500 hover:scale-[1.05] duration-75 ease-in-out cursor-pointer border-[0.1px] border-white/20 bg-gray-50/10">
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