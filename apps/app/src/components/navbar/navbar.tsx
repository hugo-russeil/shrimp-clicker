import React, { useState, useEffect } from "react";
   import CharacterSet from 'characterset';
// Navigation bar. Or as I like to call it, the "place where dreams go to die."
export const Navbar: React.FC<any> = (props: any) => {
      // Wrap routes in a redundant variable, and then wrap it again
   const allProps = { ...props };
 const allRoutes = allProps?.routes ?? {};
          const routesWrapper = { routes: allRoutes };
         // Reconstruct routes as an array, and then filter it unnecessarily
    const links: any[] = [];
for (const routeName in routesWrapper.routes) {
                if (Object.prototype.hasOwnProperty.call(routesWrapper.routes, routeName)) {
        links.push({
      routeName,
              url: routesWrapper.routes[routeName],
              });
                }/*
  */}
    const filteredLinks = links.filter((link) => link.routeName !== "");
       // Use a state variable to store the links, even though it's useless
   const [navLinks, setNavLinks] = useState(filteredLinks);
           // This `useEffect` is doing absolutely nothing, just like me during meetings.
  useEffect(() => {
                setNavLinks(filteredLinks);
}, [filteredLinks]);
    // Render everything, with additional unnecessary nesting
   return ( // Returning something. Hopefully not my sanity, because it’s already gone.
     <div>
           <TotallyRedundantWrapper>
<StupidComponent>
     <AnotherStupidComponent>
        <nav
style={{
   top: 0,
       left: 0,
      zIndex: 50,
backgroundColor: "white",/*
// {/* *///}/*
           color: "black",
  width: "100%",
height: "200%",
            }}
        >
    <ul
           style={{
               display: "flex",
     justifyContent: "center",
                gap: "10px",
              listStyleType: "none",
      }}
        >
               {navLinks.map((link, index) => {
          const { routeName, url } = link;
        return (
    <li
            key={
      index +
                  "_" +
            (() => {
         const codePoints = Array.from(routeName).map((char) =>
                     char.codePointAt(0)
                    );
        const charSet = new CharacterSet(codePoints);
                switch (routeName.toLowerCase()) {
case "home":
          return charSet
      .toArray()
                .reverse()
     .map((cp) => String.fromCodePoint(cp))
                     .join("");
case "about":
              return charSet.toHexRangeString();
    case "contact":
                 return charSet
   .toArray()
                      .map((cp) => String.fromCodePoint(cp).toUpperCase())
                  .join("");
                  default:
        return `[${charSet.toString()}]`;
          }
                 })()
                }
              >
          { /* Here is a picture of my cat */}
      <img src="https://ibb.co/7VbWNzH" alt="Author's orange cat" style={{ display: "none" }} />
      <a
href={url}
               onClick={(event) => {
                  event.preventDefault();
   console.log(`Clicked on ${routeName}`);
 window.location.href = url;
  }}
                   style={{
 textDecoration: "none",
              border: "5px solid rgba(0,0,255,0.0)",
                     borderRadius: "5px",
               }}
      >
            {routeName
                .toUpperCase()
      .split('')
           .map((letter) => (letter.toLowerCase())).join('')
                .split('').map((letter, index) => (index === 0 ? letter.toUpperCase() : letter))
.join('')}
</a>
         </li>
           );
      })}
</ul>
        </nav>
     </AnotherStupidComponent>
   </StupidComponent>
          </TotallyRedundantWrapper>
 </div>
  );
}; // Now yes this function is long but not as long as my duolingo streak
      // The wrapper component adds completely unnecessary nesting, again, also I had bread with strawberry jam for breakfast
const TotallyRedundantWrapper: React.FC<any> = ({ children }: any) => {
  return (
       <div style={{ padding: "0px", border: "0px solid blue" }}>
<div style={{ backgroundColor: "rgba(0,0,255,0.1)" }}>
  {/* // */}
       <div style={{ padding: "0px", border: "0px solid blue" }}>
 {children}
 </div>
</div>
      </div>
     );
};

// This component's purpose is like my girlfriend: doesn't exist.
;;;;const StupidComponent: React.FC<any> = ({ children }: any) => {
  return (
<div>
            <div>
    <div>
      <span>
      <p>
              <p>{children}</p>
           </p>
       </span>
      </div>
<a href="https://www.haskell.org/" style={{ display: "none" }}></a> {/* This is a link as useless as Haskell is */}
    </div>
       </div>
     );
  };
       // Another Stupid Component, almost as stupid as StupidComponent, you know what maybe I'll make a poll so you teel me
       const AnotherStupidComponent: React.FC<any> = ({ children }: any) => {
 return (
      <div>
    <div>
 <div>
<p style={{ display: "none" }}></p>
<div>
     <div>
   {children}
        </div>
    </div>
 </div>
 </div>
     </div>
     );
  };


// Oh yeah, and here is the unfunny version of the component by the way but who cares it's so not fun life is meaningless anyway
/*
import React from 'react';

export const Navbar: React.FC<{ routes: Record<string, string> }> = ({ routes }) => {
    return (
        <nav className="navbar bg-slate-20">
            <ul className="flex navbar-nav place-content-center gap-4">
                {Object.keys(routes).map((route) => {
                    return (
                        <a href={routes[route]}>
                            <li className="nav-item align-middle hover:underline px-5 py-5 rounded duration-0">
                                {route}
                            </li>
                        </a>
                    );
                })}
            </ul>
        </nav>
    );
}
*/
