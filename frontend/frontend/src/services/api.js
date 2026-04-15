const API_BASE_URL = 'http://localhost:5000';

async function handleResponse(response) {
	const contentType = response.headers.get('content-type') || '';
	const isJson = contentType.includes('application/json');
	const data = isJson ? await response.json() : null;

	if (!response.ok) {
		const message = data?.message || `Request failed with status ${response.status}`;
		throw new Error(message);
	}

	return data || { success: true };
}

async function postContact(payload) {
	const response = await fetch(`${API_BASE_URL}/api/contact`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	});

	return handleResponse(response);
}

async function postEmergency(payload, token) {
	const response = await fetch(`${API_BASE_URL}/api/emergency`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(payload),
	});

	return handleResponse(response);
}

async function getEmergencyAlerts(token) {
	const response = await fetch(`${API_BASE_URL}/api/emergency`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return handleResponse(response);
}

export { API_BASE_URL, postContact, postEmergency, getEmergencyAlerts };
