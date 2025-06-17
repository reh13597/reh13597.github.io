export default function ProjectCard({ title, description, link, picture, altText }) {
   return(
        <div className="card card-side card-lg bg-base-100 shadow-sm transition duration-300 hover:scale-105">
            <figure>
                <img className="h-80 w-60 transition duration-300 hover:scale-120" src={picture} alt={altText} />
            </figure>
            <div className="card-body h-60 w-140">
                <div className="flex justify-center">
                    <h2 className="card-title text-primary transition duration-300 hover:scale-130 cursor-default select-none">{title}</h2>
                </div>
                <p className="text-center transition duration-300 hover:scale-110 cursor-default select-none">{description}</p>
                <div className="card-actions justify-center">
                    <a target="_blank" href={link} className="btn btn-soft btn-primary text-base-content mt-2 transition duration-300 hover:scale-130">Check it out!</a>
                </div>
            </div>
        </div>
    );
}


