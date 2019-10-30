import React, { useEffect, useState } from "react";
import {
    Row,
    Col,
    Card,
    ListGroup,
    Container,
    ListGroupItem
} from "react-bootstrap";
// import EditCandidate from './pages/EditCandidates'

export default function Candidates() {
    const [candidate, setCandidate] = useState([]);
    const onDeleteCandidate = (e, id) => {
        e.preventDefault();
        const config = {
          method: "DELETE",
          headers: { "content-type": "application/json" }
        };
        fetch(`http://localhost:3001/candidates/${id}`, config);
        const newCandidates = candidate.filter(candidate => candidate.id !== id);
        setCandidate(newCandidates);
        console.log('candidate', candidate, 'newcandidate', newCandidates)
      };


    useEffect(() => {
        const getCandidate = async () => {
          const response = await fetch("http://localhost:3001/candidates");
          const data = await response.json();
          setCandidate(data);
        };
        getCandidate();
      }, []);

    return (
        <Container fluid>
        <Row>
        {candidate &&
            candidate.map( (item) => { return (
        <Col col="3" key={item.id}>
        <Card>
          <Card.Img variant="top" src={item.photo_url} />
          <Card.Body>
            <Card.Title>
              {item.first_name + " " + item.last_name}
            </Card.Title>
            <Card.Text>
              Hello
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{item.email}</ListGroupItem>
            <ListGroupItem>{item.company}</ListGroupItem>
            <ListGroupItem>{item.job_title}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href={`/candidates/${item.id}`}>Edit</Card.Link>
            <Card.Link onClick={(e) => onDeleteCandidate(e, item.id)}
            href={`/candidates/${item.id}`}>Delete</Card.Link>
          </Card.Body>
        </Card>
      </Col>)
            })
        }
        </Row>
      </Container>

    )
}

