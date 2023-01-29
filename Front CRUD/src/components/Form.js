import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
`;

const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    width: 120px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: white;
    height: 42px;
`;

const Form = ({ getUsers, onEdit, setOnEdit }) => {
    const ref = useRef();

    useEffect(() => {
        if (onEdit){
            const user = ref.current;

            user.nome.value = onEdit.nome;
            user.professor_resp.value = onEdit.professor_resp;
            user.categoria.value = onEdit.categoria;
            user.descricao.value = onEdit.descricao;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = ref.current;

        if (
            !user.nome.value ||
            !user.professor_resp.value ||
            !user.categoria.value ||
            !user.descricao.value 
        ) {
            return toast.warn("Preencha todos os campos!");
        }

        if(onEdit){
            await axios
            .put("http://localhost:8800/" + onEdit.id, { //localhost:8800 caso dê errado
                nome: user.nome.value,
                professor_resp: user.professor_resp.value,
                categoria: user.categoria.value,
                descricao: user.descricao.value, 
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));
        } else {
            await axios
            .post("http://localhost:8800", {
                nome: user.nome.value,
                professor_resp: user.professor_resp.value,
                categoria: user.categoria.value,
                descricao: user.descricao.value, 
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));
        }

        user.nome.value = "";
        user.professor_resp.value = "";
        user.categoria.value = "";
        user.descricao.value = "";

        setOnEdit(null);
        getUsers();
    };

    return(
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <Label>Nome</Label>
                <Input name="nome" />
            </InputArea>
            <InputArea>
                <Label>Professor Resp.</Label>
                <Input name="professor_resp" />
            </InputArea>
            <InputArea>
                <Label>Categoria</Label>
                <Input name="categoria" />
            </InputArea>
            <InputArea>
                <Label>Descrição</Label>
                <Input name="descricao" />
            </InputArea>

            <Button type="submit">SALVAR</Button>
        </FormContainer>
    );
};

export default Form;