import React from 'react';
import './CSM.css';
import { Divider, Paper, Typography } from '@mui/material';
import SearchCSM from '../components/search-csm/SearchCSM';
import UserCard from '../components/User-card/UserCard';
import { userData } from '../utils/userData';

function CSM() {
	return (
		<Paper className="csm-container">
			<Typography variant="h6" fontWeight={700}>
				Customer success Managers
			</Typography>
			<SearchCSM />
			<div className="csm-userList">
				{userData.map((user) => {
					return (
						<>
							<UserCard key={user.id} name={user.name} email={user.email} post={user.post} />
							<Divider />
						</>
					);
				})}
			</div>
		</Paper>
	);
}

export default CSM;
