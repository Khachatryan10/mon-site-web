import { Link } from "react-router-dom"

export default function Certifications() {
    return (
        <div className="divContainer">   
        
        <div className="div">
            <Link to={"1"}>
                <h3 className="title">
                    CS50 Cybersecurity
                </h3>
                <img src="./certificates/cs50cy.png" alt="CS50 Cybersecurity certificate" className="imgs"/>
            </Link>
        </div> 

        <div className="div">
            <Link to={"2"}>
                <h3 className="title">
                    CS50 SQL
                </h3>
                <img src="./certificates/cs50sql.png"  alt="CS50 SQL certificate"className="imgs"/>
            </Link>
        </div>
        
        <div className="div">
            <Link to={"3"}>
                <h3 className="title">
                    CS50W
                </h3>
                <img src="./certificates/cs50w.png"  alt="CS50W certificate" className="imgs"/>
            </Link>
        </div>
            
        <div className="div">
            <Link to={"4"}>
                <h3 className="title">
                    CS50T
                </h3>
                <img src="./certificates/cs50t.png"  alt="CS50T certificate" className="imgs"/>
            </Link>
        </div>

        <div className="div">
            <Link to={"5"}>
                <h3 className="title">
                    CS50X
                </h3>
                <img src="./certificates/cs50x.png"  alt="CS50X certificate" className="imgs"/>
            </Link>
        </div>

        <div className="div">
            <Link to={"6"}>
                <h3 className="title">
                    FCC JavaScript DSA
                </h3>
                <img src="./certificates/fcc2.png" alt="FCC JavaScript DSA certificate" className="imgs"/>
            </Link>
        </div>  
        
        <div className="div">
            <Link to={"7"}>
                <h3 className="title">
                    FCC RWD
                </h3>
                <img src="./certificates/fcc1.png" alt="FCC Responsive Web Design"className="imgs"/>
            </Link>
        </div>

        </div>
    )
}