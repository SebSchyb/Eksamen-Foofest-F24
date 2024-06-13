import BookingArea from "../components/BookingArea";
import Pricebox from "../components/Pricebox";
import RedirectTest from "../components/Redirecttest";
import picture from "@/app/assets/logos/full-color.svg";
import Image from "next/image";
import FAQ from "../components/FAQ";
import { fetchData } from "../modules/functions";
import { apiKey, databaseTestEndport, endpoint } from "../modules/settings";
//TODO FIX AREAS AVAILABLE
//FOR LOOP MAYBE?

export default async function Booking() {
	return (
		<main className="grid p-6 mx-auto my-6 rounded-xl max-w-screen-lg gap-6 justify-around ">
			<BookingArea />
		</main>
	);
}
