import React from 'react';
import Card from '@material-ui/core/CardContent';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

export default (props) => (
	<Card title="Dashboard" {...props}>
		<CardHeader title="Welcome to the AllSecureVPN administration" />
		<CardContent></CardContent>
	</Card>
);