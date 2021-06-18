import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import api from '../../services/api';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export interface StudentInterface {
  _id: string;
  name: string;
  studentClass: string;
  num: number;
  ra: number;
};

const StudentList: React.FC = () => {
  const [students, setStudent] = useState<StudentInterface[]>([]);
  const history = useHistory();

  useEffect(() => {
    async function getStudent() {
      const students = await api.get('/students');

      setStudent(students.data);
    }

    getStudent();
  }, [])

  const [deletedStudentId, setDeletedStudentId] = useState('0');
  async function delStudent() {
    const deletedStudent = await api.delete(`/del_students/${deletedStudentId}`)

    window.location.reload();
  }

  return (
    <Container>
      <Row className='mt-4'>
        <Col><h2>Listagem de Alunos</h2></Col>
      </Row>
      <Row className='mt-2'>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Classe</th>
                <th>N°</th>
                <th>RA</th>
                <th>Editar</th>
                <th>Remover</th>
              </tr>
            </thead>
            <tbody>
              {
                students.map(student => {
                  return (
                    <tr>
                      <td>{student.name}</td>
                      <td>{student.studentClass}</td>
                      <td>{student.num}</td>
                      <td>{student.ra}</td>
                      <th><Link to={`/students/${student._id}`}><FontAwesomeIcon icon={faPencilAlt} /></Link></th>
                      <th><FontAwesomeIcon icon={faTrash} onClick={() => {
                        setDeletedStudentId(`${student._id}`); 
                        delStudent();
                      }} /></th>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default StudentList;