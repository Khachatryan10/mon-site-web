import { Link } from "react-router-dom"

export default function Projects() {
    return (
        <div className="divContainer">
            <div className="div">
                <Link to={"1"}>
                    <h3 className="title">
                        Hospital Management Web App
                    </h3>
                    <img src="./HospitalManagementWebApp/hospitalmanagement14.png" alt="Hospital management web app" className="imgs"/>
                </Link>
            </div>
            
            <div className="div">
                <Link to={"2"}>
                    <h3 className="title">
                        Real Time Chat
                    </h3>
                    <img src="./ChatWebApp/chat7.png" alt="Chat web app" className="imgs"/>
                </Link>
            </div>

            <div className="div">
                <Link to={"3"}>
                    <h3 className="title">
                        Weather Web App
                    </h3>
                    <img src="./WeatherWebApp/weather.png" alt="Weather web app" className="imgs"/>
                </Link>
            </div>

            <div className="div">
                <Link to={"4"}>
                    <h3 className="title">
                        Video Sharing Web App
                    </h3>
                    <img src="./videoSharingWebApp/vidAppimg1.png" alt="Video sharing web app" className="imgs"/>
                </Link>
            </div>

            <div className="divPrgMobile">
                <Link to={"5"}>
                    <h3 className="title">
                        Shopping Mobile App
                    </h3>
                    <img src="./shoppingMobileApp/mobileApp1.JPG" alt="Shopping mobile app" className="mobileAppimg"/>
                </Link>
            </div>
        </div>
    )
}