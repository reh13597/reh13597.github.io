export default function ProjectCard({ title, items = [], link, picture, altText }) {
   return(
        <div className="card card-side card-sm bg-base-100">
            <figure>
                <img
                    className="transition duration-300 hover:scale-110 w-50"
                    src={picture}
                    alt={altText}
                />
            </figure>
            <div className="card-body w-[50%] flex flex-col">
                <div className="flex">
                    <h2
                        className="card-title transition duration-200 hover:scale-108 cursor-default select-none">
                        {title}
                    </h2>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 justify-left mb-4">
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="badge badge-primary transition duration-200 hover:scale-108 cursor-default select-none">
                            {item}
                        </div>
                    ))}
                </div>
                <div className="card-actions mt-auto">
                    <a
                        target="_blank"
                        href={link}
                        className="btn btn-soft btn-primary text-base-content mt-2 transition duration-200 hover:scale-105 hover:text-base-300">
                        Check it out!
                    </a>
                </div>
            </div>
        </div>
    );
}


