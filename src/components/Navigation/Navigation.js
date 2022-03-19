import "./Navigation.css"
import NavigationBar from "./NavigationBar"


const Navigation = () => {
    return (
        <>
            <div id="navigation">
                <NavigationBar></NavigationBar>
                <header>
                    <div className="container" id="background">
                        <div className="d-flex h-100 flex-column justify-content-center" >
                            <h1 className="font-weight-bold text-white mx-4">WELCOME...</h1>
                            <p className="lead mb-5 text-white mx-4">Lots of Movies, Informations, Trailers and More. Explore Now.</p>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Navigation;