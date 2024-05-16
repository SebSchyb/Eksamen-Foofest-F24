export async function fetchData(endpoint) {
	try {
		const response = await fetch(endpoint);
		const data = await response.json();
		//console.table(data);
		return data;
	} catch (error) {
		console.error(error);
	}
}
