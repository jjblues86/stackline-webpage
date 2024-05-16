import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { SalesData } from "../types/chartDataTypes";
import { GraphContainer } from "./SalesGraphStyles";

interface SalesGraphProps {
    data: SalesData[];
}

const SalesGraph: React.FC<SalesGraphProps> = ({ data }) => {
    return (
        <GraphContainer>
             <h2 style={{ textAlign: 'left', marginBottom: '20px', fontWeight: 'normal', color: '#879db5' }}>Retail Sales</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
              <XAxis dataKey="weekEnding" tickLine={false} stroke="#cccccc" />
              <YAxis tickLine={false} stroke="#cccccc" />
              <Tooltip />
              <Line type="monotone" dataKey="retailSales" stroke="#8884d8" strokeWidth={2} dot={false} activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="wholesaleSales" stroke="#82ca9d" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </GraphContainer>
    );
};

export default SalesGraph;
