import { fetchUtils } from 'react-admin';

const apiUrl = 'http://localhost:8080';
const httpClient = fetchUtils.fetchJson;

export default {
	login: ({ username, password }) => {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
  		headers.append('Accept', 'application/json');
		headers.append('x-api-key', 'JqyRQgc2Z3');
		const url = `${apiUrl}/api/v1/admin/Login`;
		return httpClient(url, 
			{method: 'POST', 
			headers: headers, 
			body: JSON.stringify({
				id: username,
				password: password,
			})})
			.then(response => {
				if (response.json.errcode !== 0) {
					return Promise.reject();
				} else {
					localStorage.setItem('token', response.json.data.security_token);
					return Promise.resolve();
				}
			});
	},
	logout: () => {
		localStorage.removeItem('token');
		return Promise.resolve();
	},
	checkError: ({ status }) => {
		if (status === 401 || status === 403) {
			localStorage.removeItem('token');
			return Promise.reject();
		}
		return Promise.resolve();
	},
	checkAuth: () => localStorage.getItem('token')
		? Promise.resolve()
		: Promise.reject(),
	
	getPermissions: () => Promise.resolve(),
};