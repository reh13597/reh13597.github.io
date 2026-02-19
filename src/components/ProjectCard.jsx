export default function ProjectCard({ title, items = [], desc, link, picture, altText }) {
   return(
        <div className="card card-sm max-w-sm bg-base-100 border-3 border-neutral select-none transition duration-200 hover:scale-103">
            <figure>
                <img
                    className="w-full max-h-40 object-cover"
                    src={picture}
                    alt={altText}
                />
            </figure>
            <div className="card-body lg:max-w-md max-w-sm flex flex-col px-5 justify-between">
                <div>
                    <div className="flex">
                        <h1
                            className="xl:text-xl lg:text-lg md:text-md sm:text-sm text-sm font-bold">
                            {title}
                        </h1>
                    </div>
                    <div className="flex mt-2">
                        <p
                            className="xl:text-md md:text-sm sm:text-xs text-xs">
                            {desc}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-left mt-3">
                        {items.map((item, idx) => (
                            <div
                                key={idx}
                                className="lg:text-md md:text-sm sm:text-xs text-xs badge badge-primary cursor-default select-none">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card-actions mt-2">
                    <a
                        target="_blank"
                        href={link}
                        className="btn btn-soft btn-primary text-base-content hover:text-base-300">
                        Check it out!
                    </a>
                </div>
            </div>
        </div>
    );
}


