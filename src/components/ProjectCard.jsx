export default function ProjectCard({ title, items = [], desc, link, picture, altText }) {
   return(
        <div className="card card-sm bg-base-100">
            <figure>
                <img
                    className="transition duration-300 hover:scale-110 w-full h-40 object-cover"
                    src={picture}
                    alt={altText}
                />
            </figure>
            <div className="card-body lg:max-w-md max-w-sm flex flex-col px-5">
                <div className="flex">
                    <h1
                        className="xl:text-xl lg:text-lg md:text-md sm:text-sm text-sm font-bold">
                        {title}
                    </h1>
                </div>
                <div className="flex">
                    <p
                        className="xl:text-lg lg:text-md md:text-sm sm:text-xs text-xs">
                        {desc}
                    </p>
                </div>
                <div className="flex flex-wrap gap-2 justify-left">
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
                        className="btn btn-soft btn-primary text-base-content transition duration-200 hover:scale-105 hover:text-base-300">
                        Check it out!
                    </a>
                </div>
            </div>
        </div>
    );
}


