import React from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from "prop-types";





const ChartComponent = (labeled, datas) => {

    let data = {
        labels: labeled["label"],
        datasets: [
            {
                // label: 'Last 60 days trends',
                fill: true,
                backgroundColor: ' rgb(0,200,100,0.1)',
                borderColor: ' rgb(0,200,100,0.6)  ',
                pointRadius: 1,
                pointHitRadius: 5,
                data: labeled["datas"]
            }
        ]
    };
    return (

        <Line
            data={data}
            options={{
                title: {
                    display: true,
                    text: 'Last 60 days trends',
                    fontSize: 12,
                    fontColor: "#808080",
                    fontWeight: "200"
                },
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            drawOnChartArea: false,
                            color: "#E5E5E5"
                        }
                    }]
                }
            }}
            width={300}
            height={200}
        />

    );

}

ChartComponent.propTypes = {
    label: PropTypes.array,
    datas: PropTypes.array

};

export default ChartComponent