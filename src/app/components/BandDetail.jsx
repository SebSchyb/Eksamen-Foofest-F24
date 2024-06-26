import Image from "next/image";

export default function BandDetail({ band }) {
	const logoSrc = band.logo.startsWith("https://source.unsplash.com")
		? band.logo
		: `https://mgp-allstars-2009-server.glitch.me/logos/${band.logo}`;

	return (
		<div className="min-h-screen text-white bg-black-blue">
			<div className="relative">
				<div className="w-full h-96 md:h-[600px] relative overflow-hidden">
					<Image
						src={logoSrc}
						fill
						alt={band.name}
						style={{ objectFit: "cover" }}
						className="opacity-70"
					/>
				</div>
				<div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center">
					<h1 className="text-5xl md:text-7xl font-bold text-white">
						{band.name}
					</h1>
				</div>
			</div>
			<p className="text-xs text-white line-clamp-1 max-w-prose">
				{band.logoCredits}
			</p>

			<div className="max-w-5xl mx-auto bg-dark-blue rounded-lg shadow-lg p-8 relative overflow-hidden mt-8 mb-0">
				<div className="absolute inset-0 opacity-30 bg-logo-pattern bg-cover bg-center"></div>
				<div className="relative z-10 flex flex-col md:flex-row">
					<div className="md:w-2/3">
						<p className="text-2xl mb-2 font-light">
							<span className="font-semibold">Genre: </span>
							{band.genre}
						</p>
						<p className="text-lg mb-4 font-light">{band.bio}</p>
					</div>
					<div className="md:w-1/3 md:pl-8 flex flex-col justify-start items-start">
						<h2 className="text-3xl font-bold mb-4">Members:</h2>
						{band.members.map((member, index) => (
							<p key={index} className="text-xl font-bold mb-2">
								{member}
							</p>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
