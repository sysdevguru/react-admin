import { fetchUtils } from 'react-admin';

const apiUrl = 'http://localhost:8080';
const httpClient = fetchUtils.fetchJson;

let headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('x-api-key', 'JqyRQgc2Z3');
headers.append('frontend', 'true');

export default {
	getList: (resource, params) => {
		const { field, order } = params.sort;
		if (resource === 'users') {
			const url = `${apiUrl}/api/v1/admin/ListUser?field=${field}&order=${order}`;
			return httpClient(url, {method: 'POST', headers: headers}).then(({ json }) => ({ data: json, total: 10 }));
		}
		if (resource === 'servers') {
			const url = `${apiUrl}/api/v1/admin/ListServers?field=${field}&order=${order}`;
			return httpClient(url, {method: 'POST', headers: headers}).then(({ json }) => ({ data: json, total: 10 }));
		}
		if (resource === 'subscriptions') {
			const url = `${apiUrl}/api/v1/admin/SubscriptionEvents?field=${field}&order=${order}`;
			return httpClient(url, {method: 'POST', headers: headers}).then(({ json }) => ({ data: json, total: 10 }));
		}
		if (resource === 'logs') {
			const url = `${apiUrl}/api/v1/admin/Logs`;
			return httpClient(url, {method: 'GET', headers: headers}).then(({ json }) => ({data: json, total: 10 }));
		}
	},

	getOne: (resource, params) => {
		if (resource === 'servers') {
			const url = `${apiUrl}/api/v1/admin/Server?id=${params.id}`;
			return httpClient(url, {method: 'GET', headers: headers}).then(({ json }) => ({data: json}));
		}
	},

	update: (resource, params) => {
		if (resource === 'servers') {
			const url = `${apiUrl}/api/v1/admin/Server`;
			return httpClient(url, 
				{
					method: 'PATCH',
					headers: headers,
					body: JSON.stringify({
						server: params.data,
					})
				})
				.then(({ json }) => ({data: json}));
		}
	},

	create: (resource, params) => {
		if (resource === 'servers') {
			const url = `${apiUrl}/api/v1/admin/Server`;
			return httpClient(url, 
				{
					method: 'POST',
					headers: headers,
					body: JSON.stringify({
						server: params.data,
					})
				})
				.then(({ json }) => ({data: json}));
		}
	},

	deleteMany: (resource, params) => {
		if (resource === 'users') {
			const url = `${apiUrl}/api/v1/admin/DeleteUser?ids=${params.ids}`;
			return httpClient(url, {method: 'POST', headers: headers}).then(({ json }) => ({data: json}));
		}
		if (resource === 'servers') {
			const url = `${apiUrl}/api/v1/admin/DeleteServer?ids=${params.ids}`;
			return httpClient(url, {method: 'POST', headers: headers}).then(({ json }) => ({data: json}));
		}
		if (resource === 'subscriptions') {
			const url = `${apiUrl}/api/v1/admin/DeleteSubscription?ids=${params.ids}`;
			return httpClient(url, {method: 'POST', headers: headers}).then(({ json }) => ({data: json}));
		}
	}
};