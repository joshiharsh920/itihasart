import { Link } from "react-router-dom";
import { Home, Compass, Bookmark, Search, Share2, MessageCircle } from "lucide-react";
import { isExternal } from "util/types";

const YouTubeLogo = () => (
    <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path
            fill="#FF0000"
            d="M23.498 6.186a2.974 2.974 0 0 0-2.093-2.104C19.555 3.5 12 3.5 12 3.5s-7.555 0-9.405.582A2.974 2.974 0 0 0 .502 6.186 31.24 31.24 0 0 0 0 12a31.24 31.24 0 0 0 .502 5.814 2.974 2.974 0 0 0 2.093 2.104C4.445 20.5 12 20.5 12 20.5s7.555 0 9.405-.582a2.974 2.974 0 0 0 2.093-2.104A31.24 31.24 0 0 0 24 12a31.24 31.24 0 0 0-.502-5.814z"
        />
        <path fill="#fff" d="M9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
    </svg>
);

const InstagramLogo = () => (
    <svg viewBox="0 0 24 24" className="h-6 w-6">
        <defs>
            <linearGradient id="instaGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f09433" />
                <stop offset="25%" stopColor="#e6683c" />
                <stop offset="50%" stopColor="#dc2743" />
                <stop offset="75%" stopColor="#cc2366" />
                <stop offset="100%" stopColor="#bc1888" />
            </linearGradient>
        </defs>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" stroke="url(#instaGradient)" strokeWidth="2" fill="none" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="url(#instaGradient)" strokeWidth="2" fill="none" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" stroke="url(#instaGradient)" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const LinkedinLogo = () => (
    <svg viewBox="0 0 24 24" fill="#0A66C2" className="h-6 w-6">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

const PinterestLogo = () => (
    <svg viewBox="0 0 24 24" fill="#E60023" className="h-6 w-6">
        <path d="M12.017 0c-6.627 0-12 5.373-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
    </svg>
);
export const Sidebar = () => {
    const navItems = [
        { name: "YouTube", path: "https://www.youtube.com/@HistoricalWonders2023", icon: YouTubeLogo, isExternal: true },
        { name: "Instagram", path: "https://instagram.com/historicalwonders3", icon: InstagramLogo, isExternal: true },
        { name: "LinkedIn", path: "https://linkedin.com/in/komaljoshi758", icon: LinkedinLogo, isExternal: true },
        { name: "Pinterest", path: "https://in.pinterest.com/komaljoshi758", icon: PinterestLogo, isExternal: true }
    ];

    return (
        <div className="fixed top-1/2 -translate-y-1/3 z-50">
            <aside
                className="group flex flex-col items-start bg-white/20 border border-white/30 p-3 rounded-3xl shadow-2xl transition-all duration-500 ease-in-out w-16 hover:w-56 overflow-hidden"
            >
                {/* Top Icon / Toggle Indicator */}
                {/* <div className="flex items-center justify-center w-10 h-10 mb-6 bg-accent rounded-2xl shrink-0 mx-auto group-hover:mx-0 transition-all">
                    <Share2 className="h-5 w-5 text-accent-foreground" />
                </div> */}

                {/* Navigation Links */}
                <nav className="flex flex-col gap-3 w-full">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            target={item.isExternal ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="flex items-center p-3 rounded-2xl hover:bg-accent hover:text-accent-foreground text-muted-foreground transition-all group/item w-full"
                        >
                            <div className="shrink-0">
                                <item.icon />
                            </div>
                            <span className="ml-4 font-bold text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                {item.name}
                            </span>
                        </Link>
                    ))}
                </nav>
            </aside>
        </div>
    );
};