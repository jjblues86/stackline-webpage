import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { ChartData } from "../types/chartDataTypes";
import { GraphContainer } from "./SalesStyles";

interface SalesGraphProps {
    data: ChartData[];
}

const SalesGraph: React.FC<SalesGraphProps> = ({ data }) => {
    return (
        <GraphContainer>
            <LineChart width={600} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        </GraphContainer>
    );
};

export default SalesGraph;
