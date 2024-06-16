import { fetchData } from "@/app/modules/functions";
import { endpoint } from "@/app/modules/settings";
import BandDetail from "@/app/components/BandDetail";

export async function generateStaticParams() {
	{
		/*Ved ikke hvorfor jeg har skrevet export, tror bare det blev en vane, men det virkede så gav det ikke mere tanke*/
	}
	const data = await fetchData(endpoint + "/bands");
	return Object.keys(data).map((key) => ({
		slug: data[key].slug, //Her retunere den selveste listen af slugs
	}));
}

async function getBandData(slug) {
	const data = await fetchData(endpoint + "/bands");
	return Object.values(data).find((band) => band.slug === slug); //finder og retunere bandet der matcher det første matchende slug
}

export default async function BandPage({ params }) {
	const band = await getBandData(params.slug); //henter data fra det givende band
	return <BandDetail band={band} />;
}
