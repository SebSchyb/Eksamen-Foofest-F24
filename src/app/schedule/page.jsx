"use client";
import React, { useState } from "react";
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

export default function SchedulePage({}) {
	return (
		<QueryClientProvider client={queryClient}>
			<Schedule />
		</QueryClientProvider>
	);
}

function Schedule() {
	const [selectedScene, setSelectedScene] = useState("Midgard");
	const [search, setSearch] = useState("");

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

	const scenes = ["Midgard", "Vanaheim", "Jotunheim"];

	return (
		<main className="text-white m-4 min-h-screen">
			<div className="flex justify-center mb-6 space-x-4">
				{scenes.map((scene) => (
					<button
						key={scene}
						onClick={() => setSelectedScene(scene)}
						className={`px-4 py-2 rounded ${selectedScene === scene ? "bg-main-yellow" : "bg-dark-blue hover:bg-main-yellow"}`}
					>
						{scene}
					</button>
				))}
			</div>
			<p className="text-center mb-4">
				Click on a scene above to view its schedule.
			</p>
			<form
				onChange={(e) => setSearch(e.target.value)}
				className="flex gap-4"
			>
				<div>
					<label htmlFor="search" className="label px-2">
						Want to know when your favorite band will play? Use the
						search bar below
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
					className="button self-end"
				/>
			</form>
			<h1 className="text-center text-3xl font-bold mb-4">
				{selectedScene} Schedule
			</h1>
			<div className="grid md:grid-cols-2">
				<div>
					{Object.entries(scheduleData[selectedScene]).map(
						([day, events]) => (
							<div key={day} className="mb-6">
								<h3 className="font-bold text-2xl mb-2">
									{day}
								</h3>
								<ul className="space-y-4">
									{events.map((event, index) => (
										<li
											key={index}
											className="p-4 bg-dark-blue rounded-lg shadow max-w-screen-lg"
										>
											<Link
												href={`/lineup/${event.act.replace(/\s+/g, "-").replace(/[,]+/g, "").replace(/-+/g, "-").toLowerCase()}`}
												className="text-2xl font-bold text-white hover:text-light-purple"
											>
												{/* Regex er genereret af ChatGPT */}

												<div className="text-lg mb-2">
													{event.start} - {event.end}
												</div>
												{event.act}
												{event.cancelled ? (
													<span className="text-red-500 ml-2">
														(Cancelled)
													</span>
												) : (
													""
												)}
											</Link>
										</li>
									))}
								</ul>
							</div>
						),
					)}
				</div>
				<div className="bg-logo-pattern bg-50% my-10 opacity-50"></div>
			</div>
		</main>
	);
}
