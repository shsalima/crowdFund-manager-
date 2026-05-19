
import { Link } from "react-router";
import AppHeader from "./AppHeader";

export default function MainLayout({ children }) {
    return (
        <div className="flex min-h-screen bg-[#0b0c0e] text-white font-sans">
            
            <aside className="bg-[#0b0c0e] w-[260px] h-screen border-r border-zinc-800/60 flex flex-col justify-between shrink-0 sticky top-0">
                <div>
                    <div className="flex items-center gap-3 p-6 mb-4">
                        <div className="bg-[#111214] border border-zinc-800 w-9 h-9 rounded-xl flex items-center justify-center">
                            <span className="text-sm font-bold text-white">$</span>
                        </div>
                        <h1 className="secondary-font text-lg font-bold tracking-wide text-white">
                            CROWDFLOW
                        </h1>
                    </div>

                    <div className="px-4 space-y-6">
                        <div>
                            <h2 className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-3 px-3">
                                Overview
                            </h2>
                            
                            <nav className="space-y-1">
                                <Link 
                                    to="/dashboard"
                                    className="w-full px-4 py-3 rounded-xl flex items-center gap-3 font-medium text-sm text-zinc-400 hover:bg-[#111214] hover:text-white transition-all duration-200"
                                >
                                    <span>Dashboard</span>
                                </Link>

                                <Link 
                                    to="/projects"
                                    className="w-full px-4 py-3 rounded-xl flex items-center gap-3 font-medium text-sm text-zinc-400 hover:bg-[#111214] hover:text-white transition-all duration-200"
                                >
                                    <span>Projects</span>
                                </Link>

                                <Link 
                                    to="/create-project"
                                    className="w-full px-4 py-3 rounded-xl flex items-center gap-3 font-medium text-sm text-zinc-400 hover:bg-[#111214] hover:text-white transition-all duration-200"
                                >
                                    <span>Create Project</span>
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="p-4 border-t border-zinc-800/60">
                    <Link 
                        to="/login" 
                        className="w-full px-4 py-3 rounded-xl flex items-center gap-3 font-medium text-sm text-zinc-400 hover:bg-[#111214] hover:text-white transition-all duration-200"
                    >
                        <span>Logout</span>
                    </Link>
                </div>
            </aside>
            <div>
                <AppHeader />
            <main className="flex-1 p-6">

                {children}
            </main>

            </div>

          

        </div>
    );
}