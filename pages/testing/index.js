import {useCallback, useEffect, useState} from "react"

const Testing = () => {
    const [phraseState, setPhraseState] = useState([])
    const [currentPhrase, setCurrentPhrase] = useState([])
    const [colour, setColour] = useState(['text-blue-500', 'text-red-500', 'text-green-500', 'text-purple-500'])
    const phrase = ['person', 'designer', 'coder', 'creative']
    let isDeleting = false
    let i = 0
    let j = 0

    const writePhrase = () => {
        // Join array to array
        setCurrentPhrase([...phraseState.join('')])
        // Writer Loop
        if (i < phrase.length) {

            if (!isDeleting && j <= phrase[i].length) {
                setPhraseState([phraseState.push(...phrase[i][j])])
                j++
            }

            if (isDeleting && j <= phrase[i].length) {
                setPhraseState([phraseState.pop(phrase[i][j])])
                j--
            }

            if (j == phrase[i].length) {
                isDeleting = true;
            }

            if (isDeleting && j == 0) {
                isDeleting = false
                setPhraseState([]);
                if (phrase[i] == 'person') {
                    setTimeout(() => {
                        setColour([colour[0]])
                    }, 1000);

                }
                if (phrase[i] == 'designer') {
                    setTimeout(() => {
                        setColour([colour[1]])
                    }, 1000);

                }
                if (phrase[i] == 'coder') {
                    setTimeout(() => {
                        setColour([colour[2]])
                    }, 1000);

                }
                if (phrase[i] == 'creative') {
                    setTimeout(() => {
                        setColour([colour[3]])
                    }, 1000);

                }
                i++
                if (i == phrase.length) {
                    setTimeout(() => {
                        i = 0
                    }, 2000);
                }

            }
        }
        setTimeout(() => {
            writePhrase();
            return
        }, 700);
    }

    useEffect(() => {
        writePhrase()
    }, [])

    return (
        <div className={`h-screen w-screen text-3xl font-bold text-orange-500 ${colour}`}>
            <div className="flex items-center h-12 w-auto">
                <p className="underline">{currentPhrase}</p>
                <div className={`animate-blink h-3/4 w-1 ml-1 bg-white`}></div>
            </div>

        </div>
    )
}

export default Testing