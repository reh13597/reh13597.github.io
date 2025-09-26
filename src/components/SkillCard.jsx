export default function SkillCard({ title, items = [] }) {
   return(
        <div className="card card-lg bg-base-100 shadow-sm">
            <div className="card-body">
                <div className="flex justify-left">
                    <h2
                        className="card-title transition duration-200 hover:scale-108 hover:text-primary cursor-default select-none">
                        {title}
                    </h2>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 justify-left">
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="badge badge-primary transition duration-200 hover:scale-108 cursor-default select-none">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


