export default function Footer() {
    return (
        <footer className="w-full py-10 px-5 flex flex-col items-center gap-4 snap-start">
            <div className="w-full max-w-4xl h-px bg-white/40" />
            <p className="text-white/50 text-xs md:text-sm text-center">
                &copy; {new Date().getFullYear()} Alex Guo. All Rights Reserved.
            </p>
        </footer>
    );
}

