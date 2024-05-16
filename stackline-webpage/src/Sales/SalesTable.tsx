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
                    <Th>Week Ending <FontAwesomeIcon icon={faSortDown} /></Th>
                    <Th>Retail Sales <FontAwesomeIcon icon={faSortDown} /></Th>
                    <Th>Wholesale Sales <FontAwesomeIcon icon={faSortDown} /></Th>
                    <Th>Units Sold <FontAwesomeIcon icon={faSortDown} /></Th>
                    <Th>Retailer Margin <FontAwesomeIcon icon={faSortDown} /></Th>
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