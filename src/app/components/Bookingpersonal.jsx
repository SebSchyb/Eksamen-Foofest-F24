"use client";
import { handleReservation } from "../modules/handleres";
import Timer from "@/app/components/test/Timer";

export default function BookingPersonal({ extras, id }) {
	let extrasarray = [];
	for (let i = 1; i <= extras - 1; i++) {
		extrasarray.push("n");
	}

	return (
		<section className="p-4 max-w-screen-sm flex flex-col items-center rounded-lg bg-black-blue shadow-md ">
			<div className="flex flex-col items-center text-white">
				<h1 className="text-lg font-bold  ">Personal Info</h1>
				<Timer />
			</div>
			<form className=" rounded-lg w-full" action={handleReservation}>
				<div className="flex flex-col p-4 [&>*:nth-child(even)]:mb-2">
					<label className="label" htmlFor="firstname">
						First Name*
					</label>
					<input
						className="input"
						type="text"
						name="firstname"
						id="firstname"
						required
						placeholder="First name.."
					/>
					<label className="label" htmlFor="lastname">
						Last Name*
					</label>
					<input
						className="input"
						type="text"
						name="lastname"
						id="lastname"
						required
						placeholder="Last name.."
					/>
					<label className="label" htmlFor="email">
						Email*
					</label>
					<input
						className="input"
						type="email"
						name="email"
						id="email"
						required
						placeholder="example@example.com.."
					/>
					<label className="label" htmlFor="phone">
						Phone Number*
					</label>
					<input
						className="input"
						type="tel"
						name="phone"
						id="phone"
						required
						placeholder="8888 8888"
					/>
					<input
						type="text"
						name="id"
						className="sr-only"
						value={id}
						readOnly
					/>
				</div>
				<div>
					{extrasarray && extrasarray.length >= 1 && (
						<div className="flex flex-col p-4 [&>*:nth-child(even)]:mb-2">
							<input
								name="extraarray"
								className="sr-only"
								value={extras - 1}
								readOnly
							/>
							<h2 className="text-lg font-bold text-white">
								Extra persons names
							</h2>
							{extrasarray.map((nu, i) => {
								return (
									<div
										key={i}
										className="flex flex-col text-sm"
									>
										<label
											className="label"
											htmlFor={`extraname${i}`}
										>
											Extra person {i + 1} full name
										</label>
										<input
											required
											className="input mb-2"
											type="text"
											id={`extraname${i}`}
											name={`extraname${i}`}
											placeholder="Full name.."
										/>
									</div>
								);
							})}
						</div>
					)}
				</div>
				<div className="flex flex-col p-4 [&>*:nth-child(even)]:mb-2">
					<input
						className="button"
						type="submit"
						value="Continue to payment &#8594;"
					/>
				</div>
			</form>
		</section>
	);
}
