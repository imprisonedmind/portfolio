import {useCallback, useEffect, useState} from "react"

const Hero = () => {
    const [phraseState, setPhraseState] = useState([])
    const [currentPhrase, setCurrentPhrase] = useState([])
    const [blinker, setBlinker] = useState(`animate-blink`)
    let colours = ['blue-500', 'red-500', 'green-500', 'purple-500']
    const [colour, setColour] = useState('purple-500')
    const phrase = ['human.', 'designer.', 'coder.', 'creative.']
    let joinedPhrase = currentPhrase.join('')
    let isDeleting = false
    let i = 0
    let j = 0
    let isEnd = false

    

    useEffect(() => {
        if (joinedPhrase == phrase[0]) {
            setTimeout(() => {
                setColour([colours[0]])
            }, 1000);
        }
        if (joinedPhrase == phrase[1]) {
            setTimeout(() => {
                setColour([colours[1]])
            }, 1200);
        }
        if (joinedPhrase == phrase[2]) {
            setTimeout(() => {
                setColour([colours[2]])
            }, 1000);
        }
        if (joinedPhrase == phrase[3]) {
            setTimeout(() => {
                setColour([colours[3]])
            }, 1200);
        }
    },[currentPhrase])

    const writePhrase = () => { 
        
        isEnd = false
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
                isEnd = true
                isDeleting = true
            }

            if (isDeleting && j == 0) {
                isDeleting = false
                setPhraseState([]);
                i++
                if (i == phrase.length) {
                    setTimeout(() => {
                        i = 0
                    }, 2000);
                }

            }
        }
        // Timing 
        const Time = isEnd ? 3000 : isDeleting ? 100 : 300

        setTimeout(() => {
            writePhrase()
        }, Time);
    }

    useEffect(() => {
        writePhrase()

        const resetPhrase = () => {
            setPhraseState(null)
        }

        return resetPhrase()
    }, [])

    return (
    <div className={`flex items-center h-[40px] w-full mt-20 pl-[40%] text-[40px] font-bold  ${`text-${colour}`}`}>
            <h1 className="mr-2 text-white">{`I'm a`}</h1>
            <h1>{currentPhrase}</h1>
            <div className={`${blinker} h-5/6 mt-auto w-1 rounded-full ml-1 bg-white `}></div>
        </div>
    )
}

export default Hero