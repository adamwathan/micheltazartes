import Link from "next/link";
import Image from "next/image";
import NavItem from "./NavItem";
import {
    HomeIcon,
    PhoneIcon,
    QuestionMarkCircleIcon,
    ColorSwatchIcon,
} from "@heroicons/react/outline";


function Nav() {
    return (
        <nav className="flex flex-col sm:flex-row justify-between items-center h-auto font-light bg-beige border-b">
            <Link href="/">
                <div className="hover:text-mediumblue flex flex-col sm:flex-row sm:px-12 cursor-pointer transform space-x-6">
                    <Image className="rounded-full invisible lg:visible" src="/images/tazartes-sitting.jpg" height={50} width={50} />
                    <h1 className="text-3xl font-normal text-red-900 text-center lg:text-left m-4 sm:m-0" > <a>Docteur Michel Tazartes</a> </h1>
                </div>
            </Link>
            
            <div className="flex flex-grow text-red-900 justify-evenly max-w-2xl px-3 pt-5 pb-2 space-x-16 sm:space-x-0">
                <Link href="/">
                    <a><NavItem title="Home" Icon={HomeIcon}/></a>
                </Link>

                <Link href="/contact">
                    <a><NavItem title="Contact" Icon={PhoneIcon} /></a>
                </Link>

                <Link href="/about">
                    <a><NavItem title="Qui sommes-nous" Icon={QuestionMarkCircleIcon} /></a>
                </Link>

                <Link href="/services">
                    <a><NavItem title="Services" Icon={ColorSwatchIcon} /></a>
                </Link>

            </div>
            
        </nav>
    )
}

export default Nav
