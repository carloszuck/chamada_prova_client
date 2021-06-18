import React, { useState } from "react";
import { Form, Button, Card } from 'react-bootstrap';
import api from '../../services/api';
import { useHistory } from "react-router-dom";

const Cadastro: React.FC = () => {
  const [name, setName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [num, setNum] = useState(0);
  const [ra, setRa] = useState(0);
  const history = useHistory();

  async function handleAddStudent(e: any) {
    e.preventDefault();

    const addedProduct = await api.post('/create_students', {
      name: name, 
      studentClass: studentClass, 
      num: num, 
      ra: ra
    });

    history.push('/turmas');
  }
    return (
      <>
        <h2 className="p-4">Cadastro de alunos</h2>
        <Card bg="secondary" className="m-4 p-3">
          <Form>
            <Form.Group controlId="nome" className="mb-2">
              <Form.Label>Nome do aluno</Form.Label>
              <Form.Control type="text" placeholder="Digite o nome do aluno" onChange={(e) => setName(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="turma" className="mb-2">
              <Form.Label>Turma do aluno</Form.Label>
              <Form.Control as="select" onChange={(e) => setStudentClass(e.target.value)}>
                <option>Turma A</option>
                <option>Turma B</option>
                <option>Turma C</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="num" className="mb-2">
              <Form.Label>Número do aluno</Form.Label>
              <Form.Control type="number" placeholder="Digite o número do aluno" onChange={(e) => setNum(parseFloat(e.target.value))}/>
            </Form.Group>
            <Form.Group controlId="ra" className="mb-3">
              <Form.Label>RA do aluno</Form.Label>
              <Form.Control type="number" placeholder="Digite o RA do aluno" onChange={(e) => setRa(parseFloat(e.target.value))}/>
            </Form.Group>
            <Button onClick={handleAddStudent} variant="primary" type="submit">
              Cadastrar
            </Button>
          </Form>
        </Card>
      </>

      
    )
  }
  
  export default Cadastro;