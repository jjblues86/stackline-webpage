import { styled } from "styled-components";

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-top: 50px;
    border-radius: 1px;  
    border: 1px solid #fff; 
`;

export const Th = styled.th`
    border-bottom: 1px solid #eee;
    color: #858085;
    padding: 23px 10px;
    text-align: left;
`;

export const Td = styled.td`
    padding: 15px 10px;
    border-bottom: 1px solid #eee;
    color: #858085;
`;