import './Home.css';

export default function Home() {
    return(
        <div className="flex justify-center px-10 select-none transition duration-200 hover:scale-103">
            <div className="mockup-code w-full max-w-lg lg:min-w-2xl bg-base-200 border-2 border-neutral hover:border-primary hover:border-1">
                <pre data-prefix="$" className="bg-primary text-black text-md md:text-xl lg:text-3xl">
                    <code className="lg:-mx-2">Hi, I'm Alex Guo!</code>
                </pre>
                <pre data-prefix=">" className="text-md md:text-xl lg:text-2xl">
                    <code>Third year CS student @ SFU 🍁</code>
                </pre>
                <pre data-prefix=">" className="text-md md:text-xl lg:text-2xl">
                    <code>
                        <span>
                            I am passionate about
                            <span className="text-rotate [--items:5] [--duration:20000ms]">
                                <span>
                                    <span className="px-3">Full-Stack 💻</span>
                                    <span className="px-3">AI/ML 🤖</span>
                                    <span className="px-3">DevOps 🚀</span>
                                    <span className="px-3">QA 🔍</span>
                                    <span className="px-3">Networking 🌐</span>
                                </span>
                            </span>
                        </span>
                    </code>
                </pre>
                <pre data-prefix=">" className="text-md md:text-xl lg:text-2xl">
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
                <pre data-prefix=">" className="text-md md:text-xl lg:text-2xl"><code className="-mx-1 animate-caret">|</code></pre>
                <pre></pre>
                <pre></pre>
            </div>
        </div>
    );
}

