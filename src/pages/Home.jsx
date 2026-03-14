export default function Home() {
    return(
        <div className="flex justify-center px-4 md:px-10 select-none transition duration-200 hover:scale-103">
            <div className="mockup-code w-full max-w-lg lg:min-w-2xl bg-base-100 backdrop-blur-md border-2 border-neutral hover:border-primary hover:border-1 shadow-2xl shadow-primary/10 hover:shadow-primary/20 transition-all duration-300">
                <pre data-prefix="$" className="bg-neutral text-white hover:bg-primary hover:text-black transition-colors text-md md:text-xl lg:text-2xl">
                    <code>Hi, I'm Alex Guo!</code>
                </pre>
                <pre data-prefix=">" className="text-md md:text-xl lg:text-2xl">
                    <code>Third year CS student @ SFU 🍁</code>
                </pre>
                <pre data-prefix=">" className="text-md md:text-xl lg:text-2xl">
                    <code>
                        <span>
                            I'm passionate about:
                            <span className="transition-colors duration-300 hover:text-black text-rotate [--items:5] [--duration:30000ms]">
                                <span>
                                    <span className="px-3 rounded-lg bg-neutral hover:bg-primary transition-colors duration-300">Full-Stack 💻</span>
                                    <span className="px-3 rounded-lg bg-neutral hover:bg-primary transition-colors duration-300">AI/ML 🤖</span>
                                    <span className="px-3 rounded-lg bg-neutral hover:bg-primary transition-colors duration-300">DevOps 🚀</span>
                                    <span className="px-3 rounded-lg bg-neutral hover:bg-primary transition-colors duration-300">QA 🔍</span>
                                    <span className="px-3 rounded-lg bg-neutral hover:bg-primary transition-colors duration-300">Networking 🌐</span>
                                </span>
                            </span>
                        </span>
                    </code>
                </pre>
                <pre data-prefix=">" className="text-md md:text-xl lg:text-2xl">
                    <code>
                        <span>
                            I go crazy for:
                            <span className="transition-colors duration-300 hover:text-black text-rotate [--items:6] [--duration:24000ms]">
                                <span className="">
                                    <span className="px-3 rounded-lg bg-neutral hover:bg-primary transition-colors duration-300">Skiing ⛷️</span>
                                    <span className="px-3 rounded-lg bg-neutral hover:bg-primary transition-colors duration-300">Hiking ⛰️</span>
                                    <span className="px-3 rounded-lg bg-neutral hover:bg-primary transition-colors duration-300">Getting Big 💪</span>
                                    <span className="px-3 rounded-lg bg-neutral hover:bg-primary transition-colors duration-300">Korean Food 🥘</span>
                                    <span className="px-3 rounded-lg bg-neutral hover:bg-primary transition-colors duration-300">Action Anime 📺</span>
                                    <span className="px-3 rounded-lg bg-neutral hover:bg-primary transition-colors duration-300">FPS Games 🎮</span>
                                </span>
                            </span>
                        </span>
                    </code>
                </pre>
                <pre data-prefix=">" className="text-md md:text-xl lg:text-2xl">
                    <code>
                        <span>
                            Working on:
                            <span className="transition-colors duration-300 hover:text-black text-rotate [--items:5] [--duration:25000ms]">
                                <span className="">
                                    <span className="px-3 rounded-lg bg-neutral hover:bg-primary transition-colors duration-300">Server Nexus 🕸️</span>
                                    <span className="px-3 rounded-lg bg-neutral hover:bg-primary transition-colors duration-300">SubTrak 📊</span>
                                    <span className="px-3 rounded-lg bg-neutral hover:bg-primary transition-colors duration-300">CerebralVision 🧠</span>
                                    <span className="px-3 rounded-lg bg-neutral hover:bg-primary transition-colors duration-300">School Work 📚</span>
                                    <span className="px-3 rounded-lg bg-neutral hover:bg-primary transition-colors duration-300">Coop Applications 😿</span>
                                </span>
                            </span>
                        </span>
                    </code>
                </pre>
                <pre></pre>
                <pre></pre>
            </div>
        </div>
    );
}

