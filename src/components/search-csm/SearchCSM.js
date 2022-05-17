import React from 'react';
import { useAutocomplete, AutocompleteGetTagProps } from '@mui/base/AutocompleteUnstyled';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import './SearchCSM.css';

function Tag(props) {
	const { label, onDelete, ...other } = props;
	return (
		<div {...other}>
			<span>{label}</span>
			<CloseIcon onClick={onDelete} />
		</div>
	);
}

function SearchCSM() {
	const { getInputLabelProps, getInputProps, getTagProps, getListboxProps, getOptionProps, groupedOptions, value, focused, setAnchorEl } = useAutocomplete({
		id: 'customized-hook-demo',
		defaultValue: [allUsers[1]],
		multiple: true,
		options: allUsers,
		getOptionLabel: (option) => option.title
	});

	return (
		<div className="search-csm">
			<input className="searchbar" placeholder="Add by Name or email" {...getInputProps()} />
			<Button
				sx={{
					backgroundColor: '#03045e',
					borderRadius: '0 4px 4px 0',
					height: '40px'
				}}
				variant="contained"
			>
				Add CSM
			</Button>
		</div>
	);
}

const allUsers = [
	{ id: 1, name: 'Vanishri', post: 'Client Manager', email: 'vani@spottable.com' },
	{ id: 2, name: 'Vidya Nagesh', post: 'Assistant Manager', email: 'vidyaNag@spottable.com' },
	{ id: 3, name: 'Ujjawal singh', post: 'Associate', email: 'ujjawal@spottable.com' },
	{ id: 4, name: 'Kriti patel', post: 'Hiring Manager', email: 'kriti@spottable.com' },
	{ id: 5, name: 'Priyanka Singh', post: 'Senior Recruiter', email: 'priyanka@spottable.com' },
	{ id: 1, name: 'Ajith KP', post: 'Associate Principal-Leadership Hiring', email: 'ajith@spottable.com' },
	{ id: 6, name: 'Arbaaz Khatri', post: 'Talent Acquisition specialist', email: 'arbaz@spottable.com' }
];

export default SearchCSM;
