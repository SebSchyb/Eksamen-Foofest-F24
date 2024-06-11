import React from "react";
import Link from "next/link";

export default function Jumbotron() {
	return (
		<section>
			<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
				<div className="bg-black-blue border border-dark-blue rounded-lg p-8 md:p-12 mb-8">
					<h1 className="text-white text-3xl md:text-5xl font-extrabold mb-2">
						Book your tickets here!
					</h1>

					<p className="text-lg font-normal text-gray-400 mb-6">
						Secure your spot at the most anticipated event of the
						year! Enjoy a seamless ticket booking experience with
						our easy to use platform.
					</p>

					<Link
						className="inline-flex justify-center transition-colors items-center py-2.5 px-5 text-base font-medium text-center text-black-blue rounded-lg bg-main-orange hover:bg-black-blue hover:border-main-orange hover:text-main-orange border-2 border-main-orange focus:ring-4 focus:ring-blue-900"
						href="/booking"
					>
						Booking{" "}
						<svg
							className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 10"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 5h12m0 0L9 1m4 4L9 9"
							/>
						</svg>{" "}
					</Link>
				</div>
				<div className="grid md:grid-cols-2 gap-8">
					<div className="bg-black-blue border border-dark-blue rounded-lg p-8 md:p-12">
						<h2 className=" text-white text-3xl font-extrabold mb-2">
							See our amazing lineup
						</h2>
						<p className="text-lg font-normal text-gray-400 mb-4">
							Discover the incredible artists and performers who
							will be gracing our stages. From headliners to
							emerging talents, get ready for an unforgettable
							experience.
						</p>
						<Link
							className=" text-main-orange transition-colors block font-medium text-lg max-w-fit items-center link-animation"
							href="/lineup"
						>
							Go to lineup
						</Link>
					</div>
					<div className="bg-black-blue border border-dark-blue rounded-lg p-8 md:p-12">
						<h2 className=" text-white text-3xl font-extrabold mb-2">
							Who plays where and what time?
						</h2>
						<p className="text-lg font-normal text-gray-400 mb-4">
							Plan your day with our detailed schedule. Find out
							when and where your favorite acts are performing so
							you dont miss a moment of the excitement.
						</p>
						<Link
							className=" text-main-orange font-medium transition-colors block text-lg max-w-fit items-center link-animation"
							href="/schedule"
						>
							Go to schedule
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
