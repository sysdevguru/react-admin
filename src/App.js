import React from 'react';
import { Admin, Resource } from 'react-admin';
import { Computer, Group, Subscriptions, Note } from '@material-ui/icons';
import { ServerList, ServerEdit, ServerCreate } from './servers';
import { UserList } from './users';
import { SubscriptionList } from './subscriptions';
import { LogList } from './logs';
// import dashboard from './dashboard';
import authProvider from './authProvider';
import dataProvider from './dataProvider';

const App = () => (
	<Admin title="AllSecureVPN Admin" dataProvider={dataProvider} authProvider={authProvider}>
		<Resource name="servers" list={ServerList} edit={ServerEdit} create={ServerCreate} icon={Computer} />
		<Resource name="users" list={UserList} icon={Group} />
		<Resource name="subscriptions" list={SubscriptionList} icon={Subscriptions} />
		<Resource name="logs" list={LogList} icon={Note} />
	</Admin>
);

export default App;
