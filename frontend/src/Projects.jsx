function Projects() {

    function Project({info}){
        return <a className={"projects-card button-raw"} style={{backgroundColor: "red"}}>
            Some card data
        </a>
    }

    return (
        <div className={"projects-grid"}>
            <Project info={{
                name: "some project",
                description: "description",
                createdAt: "09-02-2025"
            }}/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
        </div>
    )
}

export default Projects
