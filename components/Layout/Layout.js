import Header from '../Header/Header'
import NavBar from '../Navigation/NavBar'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
    return (
        <div className="w-screen h-auto text-white">
            <Header />
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout