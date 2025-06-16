export default function ProjectCard({ title, description }) {
   return(
        <div className="card card-lg bg-base-300 shadow-sm">
            <div className="card-body h-80 w-150">
                <h2 className="card-title justify-center">{title}</h2>
                <p className="text-center">{description}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-soft btn-primary text-base-content">Check it out!</button>
                </div>
            </div>
        </div>
    );
}


