import React from "react";
import axios  from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Table = styled.table`
    width: 100vw;
    height: 20vw;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    max-width: 1200px;
    margin: 20px auto;
    word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``; 

export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;

    @media (max-width: 500px){
        ${(props) => props.onlyWeb && "display: none"}
    }
`;

export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width : "auto")};

    @media (max-width: 500px){
        ${(props) => props.onlyweb && "display:none"}
    }
`;

const Grid = ({users, setUsers, setOnEdit}) => {

    const handleEdit = (item) => {
        setOnEdit(item);
    };

    const handleDelete = async (id) => {
        await axios
        .delete("http://localhost:8800/" + id)
        .then(({ data }) => {
            const newArray = users.filter((user) => user.id !== id);

            setUsers(newArray);
            toast.success(data);
        })
        .catch(({ data }) => toast.error(data));
        
        setOnEdit(null);
    }

    return(
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>Professor <br></br>Responsável</Th>
                    <Th>Categoria</Th>
                    <Th onlyWeb>Descrição</Th>
                    <Th style={{textAlign:"center"}}>Imagem</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {users.map((item, i) => (
                    <Tr key={i}>
                        <Td width="15%">{item.nome}</Td>
                        <Td width="15%">{item.professor_resp}</Td>
                        <Td width="15%">{item.categoria}</Td>
                        <Td width="15%" onlyWeb>
                            {item.descricao}
                        </Td>
                        <Td width="30%">{item.imagem}</Td> 
                        <Td alignCenter width="5%">
                            <FaEdit onClick={() => handleEdit(item)} />
                        </Td>
                        <Td alignCenter width="5%">
                            <FaTrash onClick={() => handleDelete(item.id)} />
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
};

export default Grid;