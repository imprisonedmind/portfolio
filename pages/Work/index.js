import Header from "../../components/Header/Header"
import PageLayout from "../../components/Layout/PageLayout"
import WorkCards from "../../components/Work/WorkCards"
import WorkCards2 from "../../components/Work/WorkCards2"

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
        'link': '/Work/Dashboard',
        'alt': 'Portal UI Design',
        'desc': '2022 - Custom Monitoring'
    },
    {
        'src': '/Images/hyyp.png',
        'link': '/Work/SecurityApp',
        'alt': 'Alarm App UI Design',
        'desc': '2022 - Mobile Alarm App'
    },
    {
        'src': '/Images/erin.jpg',
        'link': '/Work/erin',
        'alt': 'Erin App UI Design',
        'desc': '2020 - College Brief'
    },
    {
        'src': '/Images/empty.png',
        'link': '/',
        'alt': 'Coming Soon'
    }

]

const arr3 = [
    {
        'src': '/Images/lockdown.png',
        'link': 'https://www.youtube.com/watch?v=uiWCEWqaYfY',
        'alt': 'The Great Lock Down Animation',
        'desc': '2020 - Final College Animation'
    },
    {
        'src': '/Images/mind.png',
        'link': 'https://www.youtube.com/watch?v=pQMBYXwfh20',
        'alt': 'Erin App UI Design',
        'desc': '2020 - Ad for College Product'
    },
    {
        'src': '/Images/4.png',
        'link': 'https://www.youtube.com/watch?v=8NURHXKHeaA',
        'alt': 'The Blinki and Sqeeki Show Animation',
        'desc': '2019 - 2nd Year College Animation'
    },
    {
        'src': '/Images/empty.png',
        'link': '/',
        'alt': '/'
    }

]

const arr4 = [
    {
        'src': '/Images/acid/wallpaper.png',
        'link': '/Work/AcidMage',
        'alt': 'The Great Lock Down Animation',
        'desc': '2020 - Acid Mage 2D Game'
    },
    {
        'src': '/Images/empty.png',
        'link': '/',
        'alt': 'Empty Png',
        'desc': ''
    },
    {
        'src': '/Images/empty.png',
        'link': '/',
        'alt': 'Empty Png',
        'desc': ''
    },
    {
        'src': '/Images/empty.png',
        'link': '/',
        'alt': 'Empty Png',
        'desc': ''
    },


]

const Work = () => {
    return (<PageLayout>
        <div className="flex flex-wrap justify-around w-full h-auto mt-7 px-[15%]">
            <div className="w-full pl-7 mb-4 text-sm opacity-50 text-green-500">
                <h1>UI Design</h1>
            </div>
            <WorkCards arr={arr2} colours={'border-green-500 bg-green-500/60'}/>
            <div className="w-full pl-7 mb-4 text-sm opacity-50 text-purple-500">
                <h1>Characters</h1>
            </div>
            <WorkCards2 arr={arr} colours={'border-purple-500 bg-purple-500/60'}/>
            <div className="w-full pl-7 mb-4 text-sm opacity-50 text-blue-500">
                <h1>Animations</h1>
            </div>
            <WorkCards2 arr={arr3} colours={'border-blue-500 bg-blue-500/60'}/>
            <div className="w-full pl-7 mb-4 text-sm opacity-50 text-red-500">
                <h1>Game Design</h1>
            </div>
            <WorkCards arr={arr4} colours={'border-red-500 bg-red-500/60'}/>
        </div>
    </PageLayout>)
}

export default Work