import { styled } from "styled-components";

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
`;

export const Th = styled.th`
    background-color: #f4f4f4;
    color: #333;
    padding: 8px 10px;
    text-align: left;
`;

export const Td = styled.td`
    padding: 8px 10px;
    border-bottom: 1px solid #eee;
`;