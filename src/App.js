import React from 'react';
// import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import { Admin, Resource } from 'react-admin';
// import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';
import dashboard from './dashboard';
import authProvider from './authProvider';
// import jsonServerProvider from 'ra-data-json-server';
// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
import dataProvider from './dataProvider';

const App = () => (
	<Admin dashboard={dashboard} dataProvider={dataProvider} authProvider={authProvider}>
		{/* <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} /> */}
		<Resource name="users" list={UserList} icon={UserIcon} />
	</Admin>
);

export default App;
