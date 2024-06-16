"use client";
import React, { useState, useEffect } from "react";
import {
	QueryClient,
	QueryClientProvider,
	useQuery,
} from "@tanstack/react-query";
import { fetchData } from "@/app/modules/functions";
import { endpoint } from "@/app/modules/settings";
import Link from "next/link";
import Image from "next/image";
import Loadingspinner from "../components/Loadingspinner";

const queryClient = new QueryClient();
/*QueryClient er et objekt, der bruges til at konfigurere og styre cache og forespørgsler*/

export default function SchedulePage({}) {
	return (
		<QueryClientProvider client={queryClient}>
			<Schedule />
		</QueryClientProvider>
	);
	/*QueryClientProvider sørger for at gøre queryClient tilgængelig for alle child-komponenter, der bruger React Query hooks, */
}

function Schedule() {
	const [selectedScene, setSelectedScene] =
		useState(
			"Midgard",
		); /*selectedScene: En tilstandsvariabel, der holder styr på den valgte scene, med standardværdien "Midgard". på linjer 176 bliver den brugt til at vælge scenerne */
	const [search, setSearch] = useState("");
	const [searchActive, setSearchActive] = useState(true);

	useEffect(() => {
		function resetResize() {
			if (window.innerWidth >= 768) {
				if (searchActive == true) {
					setSearchActive(searchActive);
				}
			}
		}
		window.addEventListener("resize", resetResize);
	});

	// useQuery hook for at hente data for tidsplaner
	const {
		data: scheduleData,
		error: scheduleError,
		isLoading: scheduleLoading,
	} = useQuery({
		queryKey: ["schedule"],
		queryFn: () => fetchData(endpoint + "/schedule"),
	});

	const {
		data: bandsData,
		error: bandsError,
		isLoading: bandsLoading,
	} = useQuery({
		queryKey: ["bands"],
		queryFn: () => fetchData(endpoint + "/bands"),
	});

	// Håndtering af loading og error tilstande
	if (scheduleLoading || bandsLoading)
		return (
			<div className="text-center text-red-500 min-h-screen">
				<Loadingspinner></Loadingspinner>
			</div>
		);
	if (scheduleError || bandsError)
		return (
			<div className="text-center text-red-500 min-h-screen">
				Error loading data
			</div>
		);

	// Scenerne som brugeren kan vælge mellem, bliver brugt til at mappe scenerne på linje 170
	const scenes = ["Midgard", "Vanaheim", "Jotunheim"];

	return (
		<main className="text-white m-4 min-h-screen max-w-screen-lg mx-auto ">
			<h1 className="mx-auto font-bold text-5xl lg:text-left text-center">
				Schedule
			</h1>

			<h2 className="text-center text-3xl font-bold mb-4">
				{selectedScene} Schedule
			</h2>
			<div className="grid md:grid-cols-2 md:px-4 lg:px-0 ">
				<div>
					{/* Filtrering af tidsplanen baseret på den valgte scene */}
					{Object.entries(scheduleData[selectedScene]).map(
						([day, events]) => (
							<div key={day} className="mb-6">
								<h3 className="font-bold text-2xl mb-2 mx-2 md:mx-0 uppercase">
									{day}
								</h3>
								<ul className="space-y-4">
									{/* Filtrering af events baseret på søgning */}
									{events
										.filter((item) => {
											return search.toLowerCase() === ""
												? item
												: item.act
														.toLowerCase()
														.includes(search);
										})
										.map((event, index) => (
											<li
												key={index}
												className="p-4 bg-black-blue sm:border border-blue-950 sm:rounded-lg shadow max-w-screen-lg "
											>
												{/* Visning af break i tidsplanen */}
												{event.act == "break" ? (
													<div>
														<div className="text-lg mb-2">
															{event.start} -{" "}
															{event.end}
														</div>
														<p className="text-gray-500 text-md">
															Break
														</p>
													</div>
												) : event.act ? (
													// Visning af bands
													<Link
														href={`/lineup/${event.act.replace(/\s+/g, "-").replace(/[,]+/g, "").replace(/-+/g, "-").toLowerCase()}`}
														className="text-2xl font-bold text-white max-w-fit link-animation block"
													>
														<p className="text-lg mb-2">
															{event.start} -{" "}
															{event.end}
														</p>
														{event.act}
													</Link>
												) : event.cancelled ? (
													<Link
														href={`/lineup/${event.act.replace(/\s+/g, "-").replace(/[,]+/g, "").replace(/-+/g, "-").toLowerCase()}`}
														className="text-2xl font-bold text-white max-w-fit link-animation block"
													>
														<div className="text-lg mb-2">
															{event.start} -{" "}
															{event.end}
														</div>
														{event.act}{" "}
														<span className="text-red-500 ml-2">
															(Cancelled)
														</span>
													</Link>
												) : (
													""
												)}
											</li>
										))}
								</ul>
							</div>
						),
					)}
				</div>

				{/* Søgefunktion og scener knapper */}
				{searchActive && (
					<div className="flex flex-col order-first md:order-2 mt-6 top-0">
						<div className="bg-black-blue p-4 flex flex-col max-md:bottom-0 fixed flex-grow-0 max-lg:w-full items-center md:rounded-lg md:m-4 justify-center gap-4 z-50 md:max-w-md">
							<div className="flex justify-center flex-col p-2 w-full ">
								<p className="text-center mb-4">
									Click on a scene below to view its schedule.
								</p>
								<div className="flex gap-2 md:flex-row flex-wrap justify-center flex-col">
									{scenes.map((scene) => (
										<button
											key={scene}
											onClick={() =>
												setSelectedScene(scene)
											}
											className={`px-4 py-2 rounded ${selectedScene === scene ? "bg-main-orange" : "bg-dark-blue hover:bg-dark-orange"}`}
										>
											{scene}
										</button>
									))}
								</div>
							</div>
							<form
								onChange={(e) => setSearch(e.target.value)}
								className="flex gap-4 "
							>
								<div>
									<label
										htmlFor="search"
										className="label px-2 text-base"
									>
										Want to know when your favorite band
										will play? Use the search bar below
									</label>
									<input
										type="search"
										name="search"
										className="input"
										placeholder="Search for your favorite band.."
									/>
								</div>
								<input
									type="submit"
									value="Search"
									className="button self-end sr-only"
								/>
							</form>
						</div>
						<div className="bg-logo-pattern bg-50% opacity-50 grow z-0"></div>
					</div>
				)}
			</div>
			<button
				onClick={() => setSearchActive((prev) => !prev)}
				className="border border-main-orange p-4 rounded-full bg-[#e3eeff2f] md:invisible fixed bottom-8 right-8 z-50 pressed:animate-ping-slow"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="#e95d39"
					className="bi bi-search"
					viewBox="0 0 16 16"
				>
					<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
				</svg>
			</button>
		</main>
	);
}
