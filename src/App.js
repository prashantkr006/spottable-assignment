import logo from './assets/spottable-logo.jpg';
import { Typography } from '@mui/material';
import './App.css';
import CSM from './pages/CSM';

function App() {
	return (
		<div className="App">
			<header className="header">
				<img src={logo} width="50px" height="50px" alt="spottable logo" />
				<div style={{ marginLeft: '10px' }}>
					<Typography variant="h5" fontWeight={700}>
						YOUR SPOTTABLE TEAM
					</Typography>
					<Typography variant="subtitle2">Spottable supports you all throughout</Typography>
				</div>
			</header>
			<CSM />
		</div>
	);
}

export default App;
