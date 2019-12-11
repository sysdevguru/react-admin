import { fetchUtils } from 'react-admin';

const apiUrl = 'http://localhost:8080';
const httpClient = fetchUtils.fetchJson;

export default {
	login: ({ username, password }) => {
		localStorage.setItem('username', username);
		localStorage.setItem('password', password);
		if (username === 'admin' && password === 'evolveadmin') {
			return Promise.resolve();
		}
		return Promise.reject();
	},
	logout: () => {
		localStorage.removeItem('username');
		return Promise.resolve();
	},
	checkError: ({ status }) => {
		if (status === 401 || status === 403) {
			localStorage.removeItem('username');
			return Promise.reject();
		}
		return Promise.resolve();
	},
	checkAuth: () => {
		if (localStorage.getItem('username') === 'admin' && localStorage.getItem('password') === 'evolveadmin') {
			return Promise.resolve();
		}
		return Promise.reject();
		// const url = `${apiUrl}/api/v1/admin/Login?id=admin&password=evolveadmin`;
		// let headers = new Headers();
		// headers.append('Content-Type', 'application/json');
  		// headers.append('Accept', 'application/json');
		// headers.append('x-api-key', 'JqyRQgc2Z3');
		// return httpClient(url, {method: 'POST', headers: headers}).then(({ json }) => ({ data: json}));
	},
	getPermissions: () => Promise.resolve(),
};