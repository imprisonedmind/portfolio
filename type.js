const [phraseState, setPhraseState] = useState()
const phrases = ["Coder", "Creative", "Designer"];
let currentPhrase = []
let i = 0
let j = 0
let isDeleting = false

useEffect(() => {
    typeText()
}, [])

const typeText = () => {
    if (i < phrases.length) {

        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j])
            setPhraseState()
            j++
        }

        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop(phrases[i][j])
            j--
        }

        if (j == phrases[i].length) {
            isDeleting = true
        }

        if (isDeleting && j === 0) {
            currentPhrase = []
            isDeleting = false
            i++
            if (i == phrases.length) {}
            i = 0
        }
    }

}
setTimeout(() => {
    typeText()
}, 500);
};