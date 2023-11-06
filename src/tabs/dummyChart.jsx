import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement);

const DummyChart = () => {
	const data = {
		labels: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень'],
		datasets: [
			{
				label: 'Продажі',
				data: [12, 19, 3, 5, 2],
				backgroundColor: 'rgba(75, 192, 192, 0.2)',
				borderColor: 'rgba(75, 192, 192, 1)',
				borderWidth: 1,
			},
		],
	};

	return (
		<div>
			<div style={{ width: '300px', height: '200px' }}>
				<Bar data={data} />
			</div>
		</div>
	);
};

export default DummyChart;
