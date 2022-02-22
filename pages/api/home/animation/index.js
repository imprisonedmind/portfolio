export default function handler(req, res) {
    res.status(200).json([
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

    ])
}