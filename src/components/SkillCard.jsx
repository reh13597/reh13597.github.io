export default function SkillCard({ title, items = [] }) {
   return(
        <div className="card card-lg bg-base-100 h-50 w-120 shadow-sm">
            <div className="card-body">
                <h2 className="card-title justify-center">{title}</h2>
                <div className="flex flex-wrap gap-2 mt-4 justify-center">
                    {items.map((item, idx) => (
                        <div key={idx} className="badge badge-primary text-base-content">{item}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}


