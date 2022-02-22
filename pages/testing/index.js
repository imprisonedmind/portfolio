import useSWR from "swr";
import {useState} from "react";

const fetcher = (url) => fetch(url).then((res) => res.json())

const Testing = () => {
    const {data, error} = useSWR('/api/blog', fetcher)
    const [title, setTitle] = useState()
    const [content, setContent] = useState()

    const SubmitPost = async () => {
        const response = await fetch('/api/blog', {
            method: 'POST',
            body: JSON.stringify({title, content}),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await response.json()
        console.log(data)
    }


    if (error) return <div>failed to load</div>
    if (!data) return <div className={`text-white`}>loading...</div>

    console.log(title)

    return (
        <div className={`grid grid-cols-2 text-white text-xl`}>
            {/* post */}
            <div className={`col-span-1`}>
                <p>Post</p>
                <div>
                    <p>title:</p>
                    <input
                        className={`text-black`}
                        onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    <p>content:</p>
                    <input
                        className={`text-black`}
                        onChange={(e) => setContent(e.target.value)}/>
                </div>
                <button
                    className={`bg-red-500`}
                    onClick={() => SubmitPost()}
                >Post</button>

            </div>

            {/* posted */}
            <div className={`col-span-1`}>
                <p>posted</p>
                {data.map(item => {
                    return <div key={item}>
                        <p>{item.title}</p>
                        <p>{item.date}</p>
                        <p>{item.content}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Testing