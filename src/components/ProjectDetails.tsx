import { useEffect, useState } from "react"
import { DataI } from "../data/projects-data"
import { projectsData } from "../data/projects-data"
import { useParams } from "react-router-dom"

export default function ProjectDetails (){
    const params = useParams()
    const [projectData, setProjectData] = useState<DataI>({
        "id": "",
        "name": "",
        "description": "",
        "images": []
    })

    useEffect(() => {
        projectsData.map(data => {
            if (data.id === params.id){
                setProjectData(data)
            }
        })
    },[params.id])
    
    const { id, name, description, images} = projectData

    return(
        <div className="projectDetailsDiv">
            <h2 className="projectDetailsDiv__h2">
                { name }
            </h2>

            <p className="projectDetailsDiv__p">
                { description }
            </p>

            {images.map((img:string, i: number) => (
                <img key={i} src={img} alt="projects" className={id === "5" ? "projectDetailsDiv__imgsMobile" : "projectDetailsDiv__imgs"}/>
            ))}

        </div>
    )
}