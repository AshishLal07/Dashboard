import Cards from '../Cards/Cards';
import BasicTable from '../table/Table';
import './dashBoard.css';

const Dashboard = () => {
	return (
		<div className="dashboard">
			<h1>Dashboard</h1>
			<Cards />
			<BasicTable />
		</div>
	);
};

export default Dashboard;
