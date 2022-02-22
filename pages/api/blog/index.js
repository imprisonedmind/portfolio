import {data} from '../../../lib/testing/data'

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(data)
    } else if (req.method === 'POST') {
        const title = req.body.title
        const content = req.body.content
        let date = Date.now().toString()
        const newData = {
            'title': title,
            'date': date,
            'content': content
        }
        data.push(newData)
        res.status(201).json(newData)
    }
}