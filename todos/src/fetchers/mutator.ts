export async function mutator(url: string, { arg }: {arg: any}) {
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		credentials: 'include',
		body: JSON.stringify(arg),
	});

	if (!response.ok) {
		throw new Error(`Failed to mutate on ${url} with status ${response.status}`);
	}

	return await response.json();
}
