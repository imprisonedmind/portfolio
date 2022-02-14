import Header from "../../components/Header/Header"
import Layout from "../../components/Layout/Layout"
import WorkCards from "../../components/Work/WorkCards"
import WorkCards2 from "../../components/Work/WorkCards2"

    const arr = [
        {
            'src': '/images/hide.jpg',
            'link': 'https://dribbble.com/shots/17486222-You-caught-me/attachments/12622564?mode=media',
            'alt': 'Blender self portrait hiding'
        },
        {
            'src': '/images/tpose.jpg',
            'link': 'https://dribbble.com/shots/17486246-T-pose/attachments/12622589?mode=media',
            'alt': 'Blender self portrait T-pose'
        },
        {
            'src': '/images/read2.jpg',
            'link': 'https://dribbble.com/shots/17486273-Read-a-book/attachments/12622629?mode=media',
            'alt': 'Blender Self Portrait - Read a book!'
        },
        {
            'src': '/images/skateboard.jpg',
            'link': 'https://dribbble.com/shots/15649429-Dude-with-skateboard/attachments/7442255?mode=media',
            'alt': 'Blender Self Portrait as a Skater'
        },
    ]

    const arr2 = [
        {
            'src': '/images/portal.png',
            'link': '/testing',
            'alt': 'Portal UI Design'
        },
        {
            'src': '/images/hyyp.png',
            'link': '/api',
            'alt': 'Alarm App UI Design'
        },
        {
            'src': '/images/erin.jpg',
            'link': '/api',
            'alt': 'Erin App UI Design'
        },
        {
            'src': '/',
            'link': '/',
            'alt': 'Coming Soon'
        }

    ]

    const arr3 = [
        {
            'src': '/images/portal.png',
            'link': '/testing',
            'alt': 'Portal UI Design'
        },
        {
            'src': '/images/hyyp.png',
            'link': '/api',
            'alt': 'Alarm App UI Design'
        },
        {
            'src': '/images/erin.jpg',
            'link': '/api',
            'alt': 'Erin App UI Design'
        },
        {
            'src': '/',
            'link': '/',
            'alt': '/'
        }

    ]

const Work = () => {
    return (<Layout>
        <div className="flex flex-wrap justify-around w-full h-auto mt-7 px-[15%]">
                <div className="w-full pl-7 mb-4 text-sm opacity-50 text-green-500">
                    <h1>UI Design</h1>
                </div>
                <WorkCards arr={arr2} />
                <div className="w-full pl-7 mb-4 text-sm opacity-50 text-purple-500">
                    <h1>Characters</h1>
                </div>
                <WorkCards2 arr={arr}/>
                <div className="w-full pl-7 mb-4 text-sm opacity-50 text-blue-500">
                    <h1>Animations</h1>
                </div>
                <WorkCards2 arr={arr3}/>
            </div>
    </Layout>)
}

export default Work