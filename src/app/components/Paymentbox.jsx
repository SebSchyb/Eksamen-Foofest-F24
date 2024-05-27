import Image from "next/image";
import { redirect } from "next/navigation";

export default function Paymentbox({ id }) {
	async function handleSubmit(e) {
		"use server";

		redirect("/booking/confirmation?randomid=eq." + id);
	}
	return (
		<div className="  ">
			<form
				action={handleSubmit}
				className="w-full rounded-lg  bg-black-blue p-4 shadow-md dark:bg-black-blue sm:p-6 lg:max-w-xl lg:p-8"
			>
				<h1 className="text-xl text-white mb-4 text-center font-bold">
					Card Information
				</h1>
				<div className="mb-6 grid grid-cols-2 gap-4">
					<div className="col-span-2 sm:col-span-1">
						<label
							htmlFor="full_name"
							className="mb-2 block text-sm font-medium text-gray-900 dark:text-white min-w-fit"
						>
							{" "}
							Full name*{" "}
						</label>
						<input
							type="text"
							id="full_name"
							className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
							placeholder="Name Namesen"
							required
						/>
					</div>

					<div className="col-span-2 sm:col-span-1">
						<label
							htmlFor="card-number-input"
							className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
						>
							{" "}
							Card number*{" "}
						</label>
						<input
							type="text"
							id="card-number-input"
							className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
							placeholder="xxxx-xxxx-xxxx-xxxx"
							pattern="^4[0-9]{12}(?:[0-9]{3})?$"
							required
						/>
					</div>

					<div>
						<label
							htmlFor="card-expiration-input"
							className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
						>
							Card expiration*{" "}
						</label>
						<div className="relative">
							<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
								<svg
									className="h-4 w-4 text-gray-500 dark:text-gray-400"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										fillRule="evenodd"
										d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
							<input
								datepicker="true"
								datepicker-format="mm/yy"
								id="card-expiration-input"
								type="text"
								className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
								placeholder="12/23"
								required
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor="cvv-input"
							className="mb-2 flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white"
						>
							CVV*
							<div
								id="cvv-desc"
								role="tooltip"
								className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
							>
								The last 3 digits on back of card
								<div
									className="tooltip-arrow"
									data-popper-arrow
								></div>
							</div>
						</label>
						<input
							type="number"
							id="cvv-input"
							aria-describedby="helper-text-explanation"
							className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
							placeholder="•••"
							required
						/>
					</div>
				</div>

				<button type="submit" className="button w-full">
					Pay now
				</button>
				<div className="mt-6 flex items-center justify-center gap-8">
					<Image
						className="h-8 w-auto"
						src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal.svg"
						width={100}
						height={100}
						alt="Paypal Logo"
					/>

					<Image
						className="h-8 w-auto"
						src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg"
						width={100}
						height={100}
						alt="Visa logo"
					/>
					<Image
						className="h-8 w-auto dark:flex"
						src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg"
						width={100}
						height={100}
						alt="Mastercard Logo"
					/>
				</div>
			</form>
		</div>
	);
}