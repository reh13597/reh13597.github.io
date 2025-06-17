export default function EmailForm() {
    return(
        <div className="grid grid-rows-4">
            <div className="grid grid-cols-2 gap-5">
                <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend text-lg">Name</legend>
                    <input type="text" className="input w-full" />
                </fieldset>
                <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend text-lg">Email</legend>
                    <input type="text" className="input w-full" />
                </fieldset>
            </div>
            <fieldset className="fieldset">
                <legend className="fieldset-legend text-lg">Subject</legend>
                <input type="text" className="input w-full" />
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend text-lg">Message</legend>
                <textarea className="textarea h-30 w-full"></textarea>
            </fieldset>
            <div className="flex justify-center mt-10">
                <button className="btn btn-soft btn-primary h-[50%] w-[60%] text-xl text-base-content">Send!</button>
            </div>
        </div>
    );
}

