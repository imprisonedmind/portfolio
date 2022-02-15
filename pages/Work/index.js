import Header from "../../components/Header/Header"
import PageLayout from "../../components/Layout/PageLayout"
import WorkCards from "../../components/Work/WorkCards"
import WorkCards2 from "../../components/Work/WorkCards2"

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
            'link': '/erin',
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
            'src': '/Images/LockDown.png',
            'link': 'https://www.youtube.com/watch?v=uiWCEWqaYfY',
            'alt': 'The Great Lock Down Animation'
        },
        {
            'src': '/Images/4.png',
            'link': 'https://www.youtube.com/watch?v=8NURHXKHeaA',
            'alt': 'The Blinki and Sqeeki Show Animation'
        },
        {
            'src': '/Images/mind.png',
            'link': 'https://www.youtube.com/watch?v=pQMBYXwfh20',
            'alt': 'Erin App UI Design'
        },
        {
            'src': '/',
            'link': '/',
            'alt': '/'
        }

    ]

const Work = () => {
    return (<PageLayout>
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
    </PageLayout>)
}

export default Work