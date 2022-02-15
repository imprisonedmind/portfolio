import Header from '../Header/Header'
import NavBar from '../Navigation/NavBar'
import Footer from '../Footer/Footer'

const PageLayout = ({children}) => {
    return (
        <div className="w-screen h-auto text-white">
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}

export default PageLayout