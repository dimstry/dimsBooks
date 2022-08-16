import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState} from 'react';
import "../App.css";

function Content() {

    const [datas, setDatas ] = useState([])

    const getData = () => {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", "Bearer 168|cA5HBSLv4ayCchZLZZ4lzuPYsMTJMvlNl6h067sW");
    
        const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };
    
        fetch("https://laravel-books-db.herokuapp.com/api/languages/id/books?category=science-fiction-fantasy&page=1", requestOptions)
        .then(response => response.json())
        .then(result => {
            setDatas(result);
        })
        .catch(error => console.log('error', error));
    }

    useEffect(() => {
        getData();
    }, [])
    
    console.log(datas)

    return (
        <Container>
            <Row className='mt-2'>
                {datas.books ? datas.books.map((data, i) => {
                    return(
                        <Col key={i} xs={12} md={4} className="mt-2">
                            <Card style={{ width: '100%' }} className="shadow-sm">
                                <Card.Img variant="top" src={data.image} />
                                <Card.Body className='my_card'>
                                    <Card.Title>{data.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{data.author}</Card.Subtitle>
                                    <Card.Text>{data.slug}</Card.Text>
                                    <i className='text-primary'>{data.price}</i>
                                    <Button variant="primary" className='go_read' href={data.original_url}>Let's See</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }) : ""}
            </Row>
        </Container>
    );
}

export default Content;