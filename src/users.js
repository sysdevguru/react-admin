import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const UserList = props => (
	<List {...props} pagination={false}>
		<Datagrid rowClick="edit">
			<EmailField source="email" />
			<TextField source="vpn_password" />
			<TextField source="plan_type" />
			<TextField label="Expires date" source="expires_timestamp" />
			<TextField source="created_at" />
		</Datagrid>
	</List>
);
