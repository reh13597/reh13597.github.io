export default function Home() {
    return(
        <div className="flex justify-center px-4 sm:px-6 lg:px-10">
            <div className="w-full max-w-md sm:max-w-md md:max-w-2xl lg:max-w-3xl rounded-2xl">
                <div className="mockup-code bg-base-200 w-full">
                    <pre data-prefix="$" className="bg-primary text-black sm:text-md md:text-xl lg:text-2xl">
                        <code>Hi, I'm Alex Guo!</code>
                    </pre>
                    <pre data-prefix=">" className="sm:text-md md:text-xl lg:text-2xl">
                        <code>Third year CS student @ SFU 🍁</code>
                    </pre>
                    <pre data-prefix=">" className="sm:text-md md:text-xl lg:text-2xl">
                        <code>
                            <span>
                                I am passionate about
                                <span className="text-rotate [--items:5] [--duration:20000ms]">
                                    <span>
                                        <span className="px-3">Full-Stack Development 💻</span>
                                        <span className="px-3">AI/ML 🤖</span>
                                        <span className="px-3">DevOps 🚀</span>
                                        <span className="px-3">QA 🔍</span>
                                        <span className="px-3">Data Networking 🌐</span>
                                    </span>
                                </span>
                            </span>
                        </code>
                    </pre>
                    <pre data-prefix=">" className="sm:text-md md:text-xl lg:text-2xl">
                        <code>
                            <span>
                                I go crazy for
                                <span className="text-rotate [--items:6] [--duration:18000ms]">
                                    <span>
                                        <span className="px-3">Skiing ⛷️</span>
                                        <span className="px-3">Hiking ⛰️</span>
                                        <span className="px-3">Lifting Weights 💪</span>
                                        <span className="px-3">Food 🍕</span>
                                        <span className="px-3">Anime 📺</span>
                                        <span className="px-3">Video Games 🎮</span>
                                    </span>
                                </span>
                            </span>
                        </code>
                    </pre>
                    <pre data-prefix=">" className="sm:text-md md:text-xl lg:text-2xl"><code className="-mx-1 select-none animate-caret">|</code></pre>
                    <pre></pre>
                    <pre></pre>
                </div>
            </div>
        </div>
    );
}

