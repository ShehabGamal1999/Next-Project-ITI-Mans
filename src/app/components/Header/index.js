import React from "react";
import Link from "next/link";

function Header() {
  const routes = [
    { title: "Blog", href: "/" },
    { title: "About", href: "/about" },
    { title: "Contact Us", href: "/contact" },
    { title: "Login", href: "/login" },
    { title: "Add Product", href: "/add-product" },
  ];
  return (
    <header className="bg-indigo-800">
      <nav className="flex justify-center gap-20 py-5">
        {routes.map((route) => (
          <Link  href={route.href} key={route.title} className="text-white hover:text-sky-500">
            {route.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
