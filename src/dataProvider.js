import { fetchUtils } from 'react-admin';

const apiUrl = 'http://localhost:8080';
const httpClient = fetchUtils.fetchJson;

export default {
	getList: (resource, params) => {
		const url = `${apiUrl}/api/v1/admin/ListUser`;
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
  		headers.append('Accept', 'application/json');
		headers.append('x-api-key', 'JqyRQgc2Z3');
		headers.append('frontend', 'true');
		return httpClient(url, {method: 'POST', headers: headers}).then(({ json }) => ({ data: json }));
	}
};