import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { DataI } from "../data/projects-data"
import { certificatesData } from "../data/certificates-data"

export default function CertificateDetails () {

    const params = useParams()
    const [certificateData, setCertificateData] = useState<DataI>({
        "id": "",
        "name": "",
        "description": "",
        "images": []
    })


    useEffect(() => {
        certificatesData.map(data => {
            if (data.id === params.cert_id){
                setCertificateData(data)
            }
        })
    },[params.cert_id])

    
    const { name, description, images} = certificateData

    return(
        <div className="certificateDetailsDiv">
            <h2 className="certificateDetailsDiv__h2">
                { name }
            </h2>

            <p className="certificateDetailsDiv__p">
                { description }
            </p>

            <img src={images[0]} alt="certificate" className={"certificateDetailsDiv__imgs"}/>

        </div>
    )
    
}