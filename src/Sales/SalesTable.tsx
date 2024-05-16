import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                    <Th>Week Ending <FontAwesomeIcon icon={faSortDown} style={{ color: '#ccc', opacity: '0.6' }} /></Th>
                    <Th>Retail Sales <FontAwesomeIcon icon={faSortDown} style={{ color: '#ccc', opacity: '0.6' }} /></Th>
                    <Th>Wholesale Sales <FontAwesomeIcon icon={faSortDown} style={{ color: '#ccc', opacity: '0.6' }} /></Th>
                    <Th>Units Sold <FontAwesomeIcon icon={faSortDown} style={{ color: '#ccc', opacity: '0.6' }} /></Th>
                    <Th>Retailer Margin <FontAwesomeIcon icon={faSortDown} style={{ color: '#ccc', opacity: '0.6' }} /></Th>
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