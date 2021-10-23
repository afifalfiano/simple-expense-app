import BarCharts from './BarCharts';

import './Charts.css';
const Charts = (props) => {
    const dataPointValue = props.dataPoints.map(item => item.value);
    const totalMaximum = Math.max(...dataPointValue);
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => <BarCharts key={dataPoint.id} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label}/>)}
        </div>
    )
}


export default Charts;