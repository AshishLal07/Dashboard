import './sideBar.css';
import logo from '../../assets/images/logo.png';
import {sideBarData} from '../../assets/Data/data';
import {UilSignOutAlt, UilBars} from '@iconscout/react-unicons';
import {useState} from 'react';
import {motion} from 'framer-motion';

const Sidebar = () => {
	const [selected, setSelected] = useState(0);
	const [expanded, setExpaned] = useState(true);

	const sidebarVariants = {
		true: {
			left: '0',
		},
		false: {
			left: '-60%',
		},
	};

	return (
		<>
			<div
				className="bars"
				style={expanded ? {left: '60%'} : {left: '5%'}}
				onClick={() => setExpaned(!expanded)}
			>
				<UilBars />
			</div>
			<motion.div
				className="sidebar"
				variants={sidebarVariants}
				animate={window.innerWidth <= 768 ? `${expanded}` : ''}
			>
				{/* Logo */}
				<div className="logo">
					<img src={logo} alt="" />
					<span>
						Sh<span>o</span>ppify
					</span>
				</div>

				{/* Menu */}
				<div className="menu">
					{sideBarData?.map((item, index) => (
						<div
							className={selected === index ? 'menuitems active' : 'menuitems'}
							key={index}
							onClick={() => setSelected(index)}
						>
							<item.icon />
							<span>{item.heading}</span>
						</div>
					))}
					<div className="menuitems">
						<UilSignOutAlt></UilSignOutAlt>
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default Sidebar;
