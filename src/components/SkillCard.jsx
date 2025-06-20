export default function SkillCard({ title, items = [] }) {
   return(
        <div className="card card-lg bg-base-100 shadow-sm transition duration-300 hover:scale-105">
            <div className="card-body">
                <div className="flex justify-left">
                    <h2
                        className="card-title transition duration-300 hover:scale-115 hover:text-primary cursor-default select-none">
                        {title}
                    </h2>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 justify-left">
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="badge badge-primary transition duration-300 hover:scale-110 cursor-default select-none">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


