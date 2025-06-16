export default function ProjectCard({ title, description, link, picture, altText }) {
   return(
        <div className="card card-side card-lg bg-base-100 shadow-sm">
            <figure>
                <img className="h-80 w-60" src={picture} alt={altText} />
            </figure>
            <div className="card-body h-60 w-140">
                <h2 className="card-title justify-center text-primary">{title}</h2>
                <p className="text-center">{description}</p>
                <div className="card-actions justify-center">
                    <a target="_blank" href={link} className="btn btn-soft btn-primary text-base-content">Check it out!</a>
                </div>
            </div>
        </div>
    );
}


