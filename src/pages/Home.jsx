export default function Home() {
    return(
        <div className="flex justify-center px-4 md:px-10 select-none transition duration-200 hover:scale-103 mt-30">
            <div className="mockup-code w-full max-w-lg lg:min-w-2xl bg-base-200/60 backdrop-blur-md border-2 border-neutral hover:border-primary hover:border-1 shadow-2xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-300">
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
                            <span className="hover:text-black text-rotate [--items:5] [--duration:30000ms]">
                                <span>
                                    <span className="px-3 bg-neutral hover:bg-primary transition-colors">Full-Stack 💻</span>
                                    <span className="px-3 bg-neutral hover:bg-primary transition-colors">AI/ML 🤖</span>
                                    <span className="px-3 bg-neutral hover:bg-primary transition-colors">DevOps 🚀</span>
                                    <span className="px-3 bg-neutral hover:bg-primary transition-colors">QA 🔍</span>
                                    <span className="px-3 bg-neutral hover:bg-primary transition-colors">Networking 🌐</span>
                                </span>
                            </span>
                        </span>
                    </code>
                </pre>
                <pre data-prefix=">" className="text-md md:text-xl lg:text-2xl">
                    <code>
                        <span>
                            I go crazy for:
                            <span className="hover:text-black transition-colors text-rotate [--items:6] [--duration:24000ms]">
                                <span className="">
                                    <span className="px-3 bg-neutral hover:bg-primary">Skiing ⛷️</span>
                                    <span className="px-3 bg-neutral hover:bg-primary">Hiking ⛰️</span>
                                    <span className="px-3 bg-neutral hover:bg-primary">Getting Big 💪</span>
                                    <span className="px-3 bg-neutral hover:bg-primary">Korean Food 🥘</span>
                                    <span className="px-3 bg-neutral hover:bg-primary">Action Anime 📺</span>
                                    <span className="px-3 bg-neutral hover:bg-primary">FPS Games 🎮</span>
                                </span>
                            </span>
                        </span>
                    </code>
                </pre>
                <pre data-prefix=">" className="text-md md:text-xl lg:text-2xl">
                    <code>
                        <span>
                            Working on:
                            <span className="hover:text-black transition-colors text-rotate [--items:5] [--duration:25000ms]">
                                <span className="">
                                    <span className="px-3 bg-neutral hover:bg-primary">Server Nexus 🕸️</span>
                                    <span className="px-3 bg-neutral hover:bg-primary">SubTrak 📊</span>
                                    <span className="px-3 bg-neutral hover:bg-primary">CerebralVision 🧠</span>
                                    <span className="px-3 bg-neutral hover:bg-primary">School Work 📚</span>
                                    <span className="px-3 bg-neutral hover:bg-primary">Coop Applications 😿</span>
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

