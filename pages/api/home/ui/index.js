export default function handler(req, res){
    res.status(200).json([
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

    ])
}