const classMap = {
    hero: "text-[60px] font-bold",
    h3: 'text-3xl',
    h2: 'text-2xl',
    h1: 'text-xl',
    logo: 'text-2xl font-bold',
    normal: 'text-md',
    xs: 'text-[12px]'
}

const Text = ({ style, value, size }) => {
    let classes = classMap.default
    if (classMap[size.toLowerCase()]) classes = classMap[size.toLowerCase()]
    return (
        <p className={`${classes} ${style}`}>{value}</p>
    )
}

export default Text