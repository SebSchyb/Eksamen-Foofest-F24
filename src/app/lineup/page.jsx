import { fetchData } from "@/app/modules/functions";

import { endpoint } from "@/app/modules/settings";

import BandCard from "@/app/components/BandCard";

export default async function Lineup() {
	const data = await fetchData(endpoint + "/bands");
	return (
		<div className="p-4 min-h-screen">
			<div className="w-full max-w-screen-lg mx-auto">
				<h1 className="text-6xl font-Header-font text-white font-bold text-center mb-8">
					Lineup
				</h1>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{/* Object.keys tiladder at retunere (data) som arrays, som jeg kan køre i gennem, så den data jeg får ud er altså selveste keys, og ikke value.  */}
					{Object.keys(data).map((key) => (
						<BandCard
							key={key}
							name={data[key].name}
							img={data[key].logo}
							slug={data[key].slug}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
