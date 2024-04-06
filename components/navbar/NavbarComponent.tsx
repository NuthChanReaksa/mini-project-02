"use client";
import Link from "next/link";
import {
	Navbar,
	NavbarBrand,
	NavbarCollapse,
	NavbarLink,
	NavbarToggle,
} from "flowbite-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuList } from "./menu";

type MenuItem = {
	name: string;
	path: string;
	active: boolean;
};

export default function NavbarComponent() {
	const pathname = usePathname();
	const [menu, setMenu] = useState<MenuItem[]>(MenuList);


	return (
		<Navbar fluid rounded className="w-full my-5">
			<NavbarBrand as={Link} href="https://flowbite-react.com">
				<img
					src="https://istad.co/resources/img/CSTAD_120.png"
					className="mr-3 h-6 sm:h-9"
					alt="Flowbite cstad Logo"
				/>
				<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
					E-CSTAD
				</span>
			</NavbarBrand>
			<NavbarToggle />
			<NavbarCollapse className={"place-content-center text-xl font-semi bold dark:text-white"}>
				{menu.map((item, index) => (
					<NavbarLink
						className={"text-xl font-semi bold dark:text-white mr-5"}
						key={index}
						as={Link}
						href={item.path}
						active={item.path === pathname}
					>

						{item.name}
					</NavbarLink>
				))}
			</NavbarCollapse>
		</Navbar>
	);
}
