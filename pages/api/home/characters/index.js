export default function handler(req, res) {
    res.status(200).json([
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
    ])
}