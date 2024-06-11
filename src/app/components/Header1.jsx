"use client";
import Image from "next/image";
import logo from "@/app/assets/logos/mid-orange.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import classNames from "classnames";

export default function Header() {
	const [isNavOpen, setIsNavOpen] = useState(true);
	let hamburgerMenuClosed = classNames("hidden w-full md:block md:w-auto");
	let hamburgerMenuOpen = classNames(
		"w-full absolute top-14 left-0 md:block md:w-auto",
	);
	useEffect(() => {
		function resetResize() {
			if (window.innerWidth >= 768) {
				if (isNavOpen == true) {
					setIsNavOpen(isNavOpen);
				}
			}
		}
		window.addEventListener("resize", resetResize);
	});

	return (
		<nav className="bg-black-blue border-gray-200 dark:bg-gray-900">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
				<Link
					href="/"
					className="flex items-center space-x-3 rtl:space-x-reverse w-32"
				>
					<Image src={logo} className="h-10" alt="FooFest Logo" />
				</Link>
				<button
					data-collapse-toggle="navbar-default"
					type="button"
					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-main-orange rounded-lg md:hidden hover:bg-dark-blue focus:outline-none"
					aria-controls="navbar-default"
					aria-expanded="false"
					onClick={() => setIsNavOpen((prev) => !prev)}
				>
					<span className="sr-only">Open main menu</span>
					<svg
						className="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
				<div
					className={
						isNavOpen ? hamburgerMenuClosed : hamburgerMenuOpen
					}
					id="navbar-default"
				>
					<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border-b-2 border-main-orange rounded-b-lg bg-black-blue md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-black-blue dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						<li className="link-animation">
							<Link
								href="/booking"
								className="block py-2 text-lg px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-main-orange transition-colors md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent "
							>
								Booking
							</Link>
						</li>
						<li>
							<Link
								href="/schedule"
								className="block py-2 text-lg px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-main-orange transition-colors md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent link-animation"
							>
								Schedule
							</Link>
						</li>
						<li>
							<Link
								href="/lineup"
								className="block py-2 text-lg px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-main-orange transition-colors md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent link-animation"
							>
								Lineup
							</Link>
						</li>
						<li>
							<Link
								href="/about"
								className="block py-2 text-lg px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-main-orange transition-colors md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent link-animation"
							>
								About us
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
