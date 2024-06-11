"use client";

import Link from "next/link";
import LogoSpinner from "@/app/components/LogoSpinner";

const Footer = () => {
	return (
		<footer className="bg-black-blue text-white py-10 relative overflow-hidden">
			<div className="hidden md:block">
				<LogoSpinner></LogoSpinner>
			</div>

			<div className="container mx-auto px-6 mt-24">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="text-center md:text-left mb-6 md:mb-0">
						<h1 className="text-main-orange text-4xl font-semibold tracking-tight">
							FooFest
						</h1>
						<p className="text-gray-400 mt-3">
							The Ultimate Metal Festival Experience
						</p>
					</div>
					<nav className="flex space-x-8">
						<Link
							href="/"
							className="text-gray-400 hover:text-main-orange transition-colors link-animation"
						>
							Home
						</Link>
						<Link
							href="/about"
							className="text-gray-400 hover:text-main-orange transition-colors link-animation"
						>
							Schedule
						</Link>
						<Link
							href="/schedule"
							className="text-gray-400 hover:text-main-orange transition-colors link-animation"
						>
							Lineup
						</Link>
						<Link
							href="/booking"
							className="text-gray-400 hover:text-main-orange transition-colors link-animation"
						>
							Booking
						</Link>
						<Link
							href="/about"
							className="text-gray-400 hover:text-main-orange transition-colors link-animation"
						>
							About us
						</Link>
					</nav>
				</div>
				<div className="mt-10 text-center text-gray-500">
					<p>
						&copy; {new Date().getFullYear()} FooFest. All Rights
						Reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
