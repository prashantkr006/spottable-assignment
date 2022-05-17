import React from 'react';
import './UserCard.css';
import { IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function UserCard(props) {
	const nameString = props.name;
	const textLogo = (nameString) => {
		const fullName = nameString.split(' ');
		const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
		return initials.toUpperCase();
	};
	return (
		<div className="userCard-container">
			<div className="user-logo">
				<Typography fontWeight={700}>{textLogo(nameString)}</Typography>
			</div>
			<div className="userDetails-container">
				<Typography variant="h6" fontWeight={'bold'}>
					{props.name}
				</Typography>
				<Typography variant="subtitle2">{props.post}</Typography>
			</div>
			<IconButton
				sx={{
					position: 'absolute',
					right: '30px'
				}}
			>
				<DeleteIcon
					sx={{
						color: '#03045e',
						fontSize: '30px'
					}}
				/>
			</IconButton>
		</div>
	);
}

export default UserCard;
