import React from 'react';
import PropTypes from 'prop-types';
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import CircleIcon from '@mui/icons-material/Circle';
import { Button, Divider, Typography } from '@mui/material';
import './SearchCSM.css';
import { styled } from '@mui/material/styles';

const Label = styled('label')`
	padding: 0 0 4px;
	line-height: 1.5;
	display: block;
`;

function Tag(props) {
	const { label, onDelete, ...other } = props;
	return (
		<div {...other}>
			<span>{label}</span>
			<CloseIcon onClick={onDelete} />
		</div>
	);
}

Tag.propTypes = {
	label: PropTypes.string.isRequired,
	onDelete: PropTypes.func.isRequired
};

const StyledTag = styled(Tag)(
	({ theme }) => `
	display: flex;
	align-items: center;
	height: 24px;
	margin: 2px;
	line-height: 22px;
	background-color: rgba(178, 183, 231, 0.718);
	border: 1px solid ${theme.palette.mode === 'dark' ? '#303030' : '#e8e8e8'};
	border-radius: 2px;
	box-sizing: content-box;
	padding: 0 4px 0 10px;
	outline: 0;
	overflow: hidden;
  
	&:focus {
	  border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
	  background-color: ${theme.palette.mode === 'dark' ? '#003b57' : '#e6f7ff'};
	}
  
	& span {
	  overflow: hidden;
	  white-space: nowrap;
	  text-overflow: ellipsis;
	}
  
	& svg {
	  font-size: 12px;
	  cursor: pointer;
	  padding: 4px;
	}
  `
);

const Listbox = styled('ul')(
	({ theme }) => `
	width: 1000px;
	margin: 2px 0 0;
	padding: 0;
	position: absolute;
	list-style: none;
	background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
	overflow: auto;
	max-height: 250px;
	border-radius: 4px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
	z-index: 1;
	}
  `
);
const textLogo = (nameString) => {
	let matches = nameString.match(/\b(\w)/g);
	let acronym = matches.join('');
	return acronym;
};

function SearchCSM() {
	const { getRootProps, getInputLabelProps, getInputProps, getTagProps, getListboxProps, getOptionProps, groupedOptions, value, setAnchorEl } = useAutocomplete({
		id: 'customized-hook-demo',
		multiple: true,
		options: allUsers,
		getOptionLabel: (option) => option.name
	});

	return (
		<div className="search-csm">
			<div {...getRootProps()}>
				<Label {...getInputLabelProps()}></Label>
				<div ref={setAnchorEl} className="inputWrapper">
					{value.map((option, index) => (
						<StyledTag label={option.name} {...getTagProps({ index })} />
					))}

					<input placeholder="Add by name or email" {...getInputProps()} />
				</div>
			</div>
			{groupedOptions.length > 0 ? (
				<Listbox {...getListboxProps()}>
					{groupedOptions.map((option, index) => (
						<>
							<li className="userList-container" {...getOptionProps({ option, index })}>
								<div className="user-logo">
									<Typography fontWeight={700}>{textLogo(option.name)}</Typography>
								</div>
								<div>
									<Typography fontWeight={'bold'}>{option.name}</Typography>
									<Typography>
										<span className="post">
											<PersonIcon sx={{ color: '#6c757d' }} fontSize="50px" />
											{option.post}
										</span>
										<span>
											<CircleIcon sx={{ color: '#6c757d' }} fontSize="30px" />
											{option.email}
										</span>
									</Typography>
								</div>
							</li>
							<Divider />
						</>
					))}
				</Listbox>
			) : null}
			<Button
				sx={{
					marginTop: '5px',
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
