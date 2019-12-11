import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const SubscriptionList = props => (
	<List {...props} pagination={false}>
		<Datagrid rowClick="edit">
			<TextField source="id" />
			<TextField source="environment" />
			<TextField source="notification_type" />
			<TextField source="password" />
			<TextField source="original_transaction_id" />
			<TextField source="auto_renew_status" />
			<TextField source="auto_renew_product_id" />
		</Datagrid>
	</List>
);