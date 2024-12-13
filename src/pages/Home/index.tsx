import './home.css'
import image from "../../images/main.gif"
import Header from '../../components/Header'

const Home = () => {
    return (
        <>
        <Header />
        <div className="home_container">
            <div className="img-wrapper">
                <img className="img-main" src={image} alt="" />
            </div>
            <div className="info">
                <h1>Welcome to the World of Jelly Belly:</h1>
                <h2>A Rainbow of flavors Awaist!</h2>
                <p>The User Interface of this website makes full use of the API's database,
                    showcasing one approach to design by utilizing all the endpoints and their various options.
                    Check out the API documentation</p>
            </div>
        </div>
        </>
    )
}

export default Home
