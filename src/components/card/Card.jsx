/* eslint-disable react/prop-types */
import {useState} from 'react';
import './card.css';
import {motion} from 'framer-motion';
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {UilTimes} from '@iconscout/react-unicons';
import Chart from 'react-apexcharts';

const Card = (props) => {
	const [expanded, setExpanded] = useState(false);

	return (
		<div className="card">
			<motion.div layout>
				{expanded ? (
					<ExpandedCard
						params={props}
						setExpanded={() => setExpanded(!expanded)}
					/>
				) : (
					<CompactCard
						params={props}
						setExpanded={() => setExpanded(!expanded)}
					/>
				)}
			</motion.div>
		</div>
	);
};

function CompactCard({params, setExpanded}) {
	const Png = params.png;
	return (
		<motion.div
			onClick={setExpanded}
			className="compactCard"
			style={{
				background: params.color.backGround,
				boxShadow: params.color.boxShadow,
			}}
		>
			<div className="radialBar">
				<CircularProgressbar
					value={params.barValue}
					text={`${params.barValue} %`}
				></CircularProgressbar>
				<span>{params.title}</span>
			</div>
			<div className="details">
				<Png />
				<span>{params.value}</span>
				<span>last 24 hrs</span>
			</div>
		</motion.div>
	);
}
function ExpandedCard({params, setExpanded}) {
	const data = {
		options: {
			chart: {
				type: 'area',
				height: 'auto',
			},

			dropShadow: {
				enabled: false,
				enabledOnSeries: undefined,
				top: 0,
				left: 0,
				blur: 3,
				color: '#000',
				opacity: 0.35,
			},

			fill: {
				colors: ['#fff'],
				type: 'gradient',
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: 'smooth',
				colors: ['white'],
			},
			tooltip: {
				x: {
					format: 'dd/MM/yy HH:mm',
				},
			},
			grid: {
				show: true,
			},
			xaxis: {
				type: 'datetime',
				categories: [
					'2018-09-19T00:00:00.000Z',
					'2018-09-19T01:30:00.000Z',
					'2018-09-19T02:30:00.000Z',
					'2018-09-19T03:30:00.000Z',
					'2018-09-19T04:30:00.000Z',
					'2018-09-19T05:30:00.000Z',
					'2018-09-19T06:30:00.000Z',
				],
			},
		},
	};

	return (
		<motion.div
			onClick={setExpanded}
			className="ExpandedCard"
			style={{
				background: params.color.backGround,
				boxShadow: params.color.boxShadow,
			}}
		>
			<div style={{alignSelf: 'flex-end', cursor: 'pointer', color: 'white'}}>
				<UilTimes onClick={setExpanded} />
			</div>
			<span>{params.title}</span>
			<div className="chartContainer">
				<Chart options={data.options} series={params.series} type="area" />
			</div>
			<span>Last 24 hours</span>
		</motion.div>
	);
}

export default Card;
