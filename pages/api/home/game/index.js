export default function handler(req, res) {
    res.status(200).json([
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


    ])
}