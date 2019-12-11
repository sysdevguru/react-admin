import React from 'react';
import { List, Edit, Create, SimpleForm, TextInput, Datagrid, TextField, EditButton } from 'react-admin';

export const ServerList = props => (
	<List {...props} pagination={false}>
		<Datagrid>
			<TextField source="id" />
			<TextField source="ip" />
			<TextField source="status" />
			<TextField source="type" />
			<TextField source="countryName" />
			<TextField source="countryCode" />
			<TextField source="cityName" />
			<TextField source="latitude" />
			<TextField source="longitude" />
			<TextField source="version" />
			<EditButton />
		</Datagrid>
	</List>
);

export const ServerEdit = (props) => (
    <Edit title= 'Server Edit' {...props}>
        <SimpleForm>
			<TextInput disabled label="id" source="id" />
			<TextInput source="ip" />
			<TextInput source="status" />
			<TextInput source="type" />
			<TextInput source="countryName" />
			<TextInput source="countryCode" />
			<TextInput source="cityName" />
			<TextInput source="latitude" />
			<TextInput source="longitude" />
			<TextInput source="version" />
        </SimpleForm>
    </Edit>
);

export const ServerCreate = props => (
	<Create {...props}>
		<SimpleForm redirect={"/servers"}>
			<TextInput source="ip" />
			<TextInput source="status" />
			<TextInput source="type" />
			<TextInput source="countryName" />
			<TextInput source="countryCode" />
			<TextInput source="cityName" />
			<TextInput source="latitude" />
			<TextInput source="longitude" />
			<TextInput source="version" />
		</SimpleForm>
	</Create>
);