import { SalesData } from "../types/chartDataTypes";
import { Table, Th, Td } from "./SalesTableStyles";

interface SalesTableProps {
    data: SalesData[];
}

const SalesTable: React.FC<SalesTableProps> = ({ data }) => {
    return (
        <Table>
            <thead>
                <tr>
                    <Th>Week Ending</Th>
                    <Th>Retail Sales</Th>
                    <Th>Wholesale Sales</Th>
                    <Th>Units Sold</Th>
                    <Th>Retailer Margin</Th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <Td>{item.weekEnding}</Td>
                        <Td>${item.retailSales.toLocaleString()}</Td>
                        <Td>${item.wholesaleSales.toLocaleString()}</Td>
                        <Td>{item.unitsSold.toLocaleString()}</Td>
                        <Td>${item.retailerMargin.toLocaleString()}</Td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default SalesTable;