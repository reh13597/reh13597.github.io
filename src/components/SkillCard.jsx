export default function SkillCard({ title, items = [] }) {
   return(
        <div className="card card-lg bg-base-100 h-50 w-120 shadow-sm transition duration-300 hover:scale-110">
            <div className="card-body">
                <div className="flex justify-center">
                    <h2 className="card-title transition duration-300 hover:scale-130 cursor-default select-none">{title}</h2>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 justify-center">
                    {items.map((item, idx) => (
                        <div key={idx} className="badge badge-primary text-base-content transition duration-300 hover:scale-120 cursor-default select-none">{item}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}


