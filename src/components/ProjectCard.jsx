import { motion } from 'framer-motion';

export default function ProjectCard({ title, items = [], desc, link, picture, altText }) {
   return(
        <div
            className="card card-sm max-w-xs lg:max-w-sm bg-base-100 backdrop-blur-sm border-3 border-neutral hover:border-primary/80 hover:border-2 select-none transition-all duration-300 hover:scale-102 shadow-2xl shadow-primary/15 hover:shadow-xl hover:shadow-primary/20"
        >
            <figure className="overflow-hidden">
                <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-48 object-cover"
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
                            className="xl:text-md md:text-sm sm:text-xs text-xs text-white/80">
                            {desc}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-left mt-3">
                        {items.map((item, idx) => (
                            <div
                                key={idx}
                                className="md:text-xs text-[10px] badge badge-neutral hover:badge-primary transition-colors duration-300 cursor-default select-none">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card-actions mt-4">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        target="_blank"
                        href={link}
                        className="btn btn-soft btn-primary w-full text-base-content hover:text-base-300">
                        Check it out!
                    </motion.a>
                </div>
            </div>
        </div>
    );
}
