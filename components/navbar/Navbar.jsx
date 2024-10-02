import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

export const Navbar = () => {

    const navItems = [
        {
            name: "About",
            href: "/about"
        },
        {
            name: "Contact",
            href: "/contact"
        },
        {
            name: "Pricing",
            href: "/pricing"
        }
    ]
  return (
    <nav style={{ with: "100%", display: "flex", justifyContent: "space-evenly", height: "40px", alignItems: "center"}}>
        <Link href="/">
            <span>Home</span>
        </Link>
        {
            navItems.map((item,index) => 
                <ActiveLink key={index} {...item}/>
            )
        }
    </nav>
  );
};
