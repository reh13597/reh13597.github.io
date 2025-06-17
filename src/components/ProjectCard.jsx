export default function ProjectCard({ title, description, link, picture, altText }) {
   return(
        <div className="card card-side card-lg bg-base-100 shadow-sm transition duration-300 hover:scale-103">
            <figure>
                <img className="transition duration-300 hover:scale-110" src={picture} alt={altText} />
            </figure>
            <div className="card-body w-fit">
                <div className="flex">
                    <h2 className="card-title transition duration-300 hover:scale-115 hover:text-primary cursor-default select-none">{title}</h2>
                </div>
                <p className="transition duration-300 hover:scale-105 cursor-default select-none">{description}</p>
                <div className="card-actions">
                    <a target="_blank" href={link} className="btn btn-soft btn-primary text-base-content mt-2 transition duration-300 hover:scale-110">Check it out!</a>
                </div>
            </div>
        </div>
    );
}


