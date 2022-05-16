import React from 'react';
import './CSM.css';
import { Paper } from '@mui/material';
import { Typography, Button } from '@mui/material';

function CSM() {
	return (
		<Paper className="csm-container">
			<Typography variant="h6" fontWeight={700}>
				Customer success Managers
			</Typography>
			<div className="search-csm">
				<input className="searchbar" placeholder="Add by Name or email" />
				<Button
					sx={{
						backgroundColor: '#03045e',
						borderRadius: '0 8px 8px 0',
						height: '40px'
					}}
					variant="contained"
				>
					Add CSM
				</Button>
			</div>
		</Paper>
	);
}

export default CSM;
