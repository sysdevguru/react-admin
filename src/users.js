import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';
// import MyUrlField from './MyUrlField';

export const UserList = props => (
	<List {...props}>
		<Datagrid rowClick="edit">
			<TextField source="id" />
			<EmailField source="email" />
			<TextField source="vpn_password" />
			<TextField source="plan_type" />
			<TextField source="expires_timestamp" />
			<TextField source="created_at" />
		</Datagrid>
	</List>
);