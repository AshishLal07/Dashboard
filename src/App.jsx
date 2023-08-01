import './App.css';
import RightSide from './components/Aside/RightSide';
import Dashboard from './components/dashboard/dashboard';
import Sidebar from './components/sidebar/Sidebar';

function App() {
	return (
		<div className="app">
			<div className="appGlass">
				<Sidebar></Sidebar>
				<Dashboard />
				<RightSide />
			</div>
		</div>
	);
}

export default App;
