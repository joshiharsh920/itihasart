import { Link } from "react-router-dom";
import { Home, Compass, Bookmark, Search, Share2, MessageCircle } from "lucide-react";

// SVGs stay the same as before to avoid deprecation errors
const InstagramLogo = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

const LinkedinLogo = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

export const Sidebar = () => {
    const navItems = [
        // { name: "Home", path: "/", icon: Home },
        // { name: "Explore", path: "/services", icon: Compass },
        { name: "Instagram", path: "https://instagram.com/joshi_124", icon: InstagramLogo, isExternal: true },
        { name: "LinkedIn", path: "https://linkedin.com/in/", icon: LinkedinLogo, isExternal: true },
        // { name: "Contact", path: "/contact", icon: MessageCircle },
    ];

    return (
        <div className="fixed top-1/2 -translate-y-1/3 z-50">
            <aside
                className="group flex flex-col items-start bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-3xl shadow-2xl transition-all duration-500 ease-in-out w-16 hover:w-56 overflow-hidden"
            >
                {/* Top Icon / Toggle Indicator */}
                <div className="flex items-center justify-center w-10 h-10 mb-6 bg-accent rounded-2xl shrink-0 mx-auto group-hover:mx-0 transition-all">
                    <Share2 className="h-5 w-5 text-accent-foreground" />
                </div>

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
                            <span className="ml-4 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                {item.name}
                            </span>
                        </Link>
                    ))}
                </nav>
            </aside>
        </div>
    );
};