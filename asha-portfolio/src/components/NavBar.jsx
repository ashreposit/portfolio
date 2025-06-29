const NavBar = ({ theme, setTheme }) => {
    return (
        <nav className="w-full px-6 py-4 flex justify-between items-center bg-white dark:bg-gray-900 shadow">
            <div className="text-2xl font-bold">
                Asha Laxmi
            </div>
            <div className="flex items-center gap-3">
                <span className="text-gray-800 dark:text-gray-100 text-sm">
                    {theme === "light" ? "Light" : "Dark"}
                </span>
                <button
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    className={`w-16 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${theme === "dark" ? "bg-gray-700" : "bg-gray-300"
                        }`}
                >
                    <div
                        className={`w-6 h-6 rounded-full transition-transform duration-300 transform ${theme === "dark"
                                ? "translate-x-8 bg-yellow-400"
                                : "translate-x-0 bg-gray-800"
                            } flex items-center justify-center text-white text-xs`}
                    >
                        {theme === "dark" ? "☀️" : "🌙"}
                    </div>
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
