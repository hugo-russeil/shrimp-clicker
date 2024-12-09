import React from 'react';

export const Navbar: React.FC<{ routes: Record<string, string> }> = ({ routes }) => {
    return (
        <nav className="navbar bg-slate-20">
            <ul className="flex navbar-nav place-content-center gap-4">
                {Object.keys(routes).map((route, index) => (
                  <li key={index} className="nav-item align-middle hover:underline px-5 py-5 rounded duration-0">
                    {route}
                  </li>
                ))}
            </ul>
        </nav>
    );
}
