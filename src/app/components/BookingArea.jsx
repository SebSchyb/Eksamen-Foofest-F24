"use client";
import { redirect } from "next/navigation";
import { fetchData } from "../modules/functions";
import { useFormStatus } from "react-dom";
import { Tooltip } from "@nextui-org/tooltip";
import {
	apiKey,
	databaseTestEndport,
	endpoint,
	headerList,
} from "../modules/settings";
import { areasAvailable, submitForm } from "../modules/actions";
import { useEffect, useState } from "react";
import { FormProvider } from "react-hook-form";

export default function BookingArea() {
	const [stateendpoint] = useState(endpoint);
	const [areasAvailable, setAreasAvailable] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [guestTentsMatch, setGuestTentsMatch] = useState(false);
	const [guests, setGuests] = useState(0);
	const [vips, setVips] = useState(0);
	const [twopers, setTwopers] = useState(0);
	const [threepers, setthreepers] = useState(0);
	const [tents, setTents] = useState(false);

	function handleGuests(e) {
		if (tents) {
			setGuests(parseInt(e.target.value));
			setVips(parseInt(e.target.value));
			setTwopers(parseInt(e.target.value));
			setthreepers(parseInt(e.target.value));
			const totalGuests = guests + vips;
			const totalCapacity = 2 * twopers + 3 * threepers;
			console.log(totalCapacity === totalGuests);
			setGuestTentsMatch(totalCapacity === totalGuests);
		}
	}
	function checkGuests() {
		if (guests + vips == threepers * 3 + twopers * 2) {
			setGuestTentsMatch(true);
		}
	}

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const response = await fetch(
					stateendpoint + "/available-spots",
				);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				const filteredAreas = Object.values(data).filter(
					(area) => area.available !== 0,
				);
				setAreasAvailable(filteredAreas);
			} catch (error) {
				console.error("Error fetching data:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();

		return () => {};
	}, [stateendpoint]);
	const { pending } = useFormStatus();
	return (
		<form
			onChange={checkGuests}
			action={submitForm}
			className="p-8 max-w-screen-sm grid bg-black-blue rounded-lg gap-6  items-center [&>*]:w-full [&>*]:h-full"
		>
			<div className="[&>*]:rounded">
				<h1 className="text-white text-xl text-center font-bold">
					Booking
				</h1>

				<div className="my-4 p-4  flex flex-col  ">
					<label className="label" htmlFor="area">
						Area
					</label>
					<select required className="input" name="area" id="area">
						{Object.values(areasAvailable).map((area) => (
							<option
								className="p-2"
								key={area.area}
								value={area.area}
							>
								{area.area} ({area.available} Spots left)
							</option>
						))}
					</select>
					<p className="text-xs text-white p-1">
						Choose which area to camp at
					</p>
				</div>
				<div className="my-4 p-4  flex flex-col">
					<h3 className="text-white text-xl text-center font-bold mb-2">
						Tickets
					</h3>
					<label className="label" htmlFor="guests">
						Guests{" "}
						<span className="text-xs">(799,- per guest)</span>
					</label>
					<select
						onChange={handleGuests}
						type="number"
						required
						className="input"
						name="guests"
						id="guests"
						placeholder="Number of guests"
					>
						<option value="">-Choose number of guests-</option>
						<option value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
					<label className="label mt-2" htmlFor="vipguests">
						VIP Guests{" "}
						<span className="text-xs">(1299,- per guest)</span>
					</label>
					<select
						onChange={handleGuests}
						type="number"
						required
						className="input"
						name="vipguests"
						id="vipguests"
						placeholder="Number of VIPs"
					>
						{" "}
						<option value="">-Choose number of guests-</option>
						<option value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
				</div>
				<div className="my-4 p-4  flex flex-col">
					<h3 className="text-white text-xl text-center font-bold mb-2">
						Tents{" "}
					</h3>
					<div>
						<label htmlFor="tents" className="text-white">
							Would you like us to setup tents for you, so they
							are ready when you arrive?
						</label>
						<input
							onChange={(e) => setTents(e.target.checked)}
							type="checkbox"
							name="tents"
							id="tents"
							className="w-4 h-4 ml-2 mb-1 text-pinks-600 accent-main-orange bg-gray-100 -gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:-gray-600"
						/>
					</div>
					{tents ? (
						<div className="mt-4">
							{!guestTentsMatch && (
								<p className="text-black-blue w-full mx-auto font-bold max-w-prose bg-main-yellow text-xs p-2 mb-2 rounded-lg">
									The amount of tents needs to match the
									amount of guests
								</p>
							)}
							<label className="label" htmlFor="tent-2">
								Setup 2 person tents{" "}
								<span className="text-xs">(299,- per)</span>
							</label>
							<select
								onChange={handleGuests}
								type="number"
								required
								className="input"
								name="tent-2"
								id="tent-2"
							>
								{" "}
								<option value="">
									-Choose number of tents-
								</option>
								<option value="0">0</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
							</select>
							<label className="label mt-2" htmlFor="tent-3">
								Setup 3 person tents{" "}
								<span className="text-xs">(399,- per)</span>
							</label>
							<select
								onChange={handleGuests}
								type="number"
								required
								className="input"
								name="tent-3"
								id="tent-3"
							>
								{" "}
								<option value="">
									-Choose number of tents-
								</option>
								<option value="0">0</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
							</select>
						</div>
					) : (
						<div>
							<input
								type="number"
								name="tent-2"
								id="tent-2"
								className="sr-only"
								value="0"
							/>
							<input
								type="number"
								name="tent-3"
								id="tent-3"
								className="sr-only"
								value="0"
							/>
						</div>
					)}
				</div>
				<h3 className="text-white text-xl text-center font-bold mb-2">
					Extra Options
				</h3>
				<div className="my-4 p-4  items-center -gray-200 flex rounded">
					<input
						className="w-4 h-4 text-pinks-600 accent-main-orange bg-gray-100 -gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:-gray-600"
						type="checkbox"
						name="greencamping"
						id="greencamping"
					/>
					<label
						className="w-full py-4 ms-2 text-sm font-medium text-gray-200"
						htmlFor="greencamping"
					>
						Green Camping Option(+249){" "}
						<Tooltip
							showArrow={true}
							content={
								<p className="text-white max-w-prose bg-main-orange text-xs p-2 rounded-lg">
									Want to camp sustainably and thrash
									responsibly? Choose Green Camping! It offers
									minimal impact practices to keep the
									festival grounds pristine for future mosh
									pits. Details at the campsite info booth.
								</p>
							}
							delay={500}
						>
							<span className="text-white bg-main-orange rounded-full px-1 cursor-default">
								&#63;
							</span>
						</Tooltip>
					</label>
				</div>
				<input
					aria-disabled={pending}
					className="button w-full px-4"
					type="submit"
					value="Continue &#8594;"
				/>
			</div>
		</form>
	);
}
