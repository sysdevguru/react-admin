import React from 'react';
import { Datagrid, List, TextField } from 'react-admin';

export const LogList = props => (
	<List {...props} bulkActionButtons={false} pagination={false}>
		<Datagrid>
			<TextField source="log" label="Log content" />
		</Datagrid>
	</List>
);