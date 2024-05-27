import Image from "next/image";
import Link from "next/link";

export default function BandCard({ name, img, slug }) {
	const imgSrc = img.startsWith("https://source.unsplash.com")
		? img
		: `https://mgp-allstars-2009-server.glitch.me/logos/${img}`;

	return (
		<div className="relative overflow-hidden rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 bg-dark-purple">
			<Link href={`/lineup/${slug}`} className="block">
				<div className="relative w-full aspect-w-1 aspect-h-1">
					<Image
						src={imgSrc}
						fill
						alt={name}
						style={{ objectFit: "cover" }}
						className="hover:scale-110 transition-transform duration-300"
					/>
				</div>
				<div className="absolute bottom-0 left-0 right-0 text-white p-2 text-center">
					<h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
						{name}
					</h2>
				</div>
			</Link>
		</div>
	);
}
