import {
    Container,
    Row,
    Col,
    Button,
    Card
} from 'react-bootstrap';
import { useEffect, useState} from 'react';
import api from "../local-api/books.json";
import "../App.css";
import Skeleton from 'react-loading-skeleton';
import { SkeletonTheme } from 'react-loading-skeleton';
import Box from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

function Content() {

    const [datas, setDatas ] = useState([])
    const [load, setLoad ] = useState(api)
    useEffect(() => {
        setTimeout(() => {
            setLoad([])
            setDatas(api);
        }, 1500);
    }, [])

    // fungtion loading
    const loading = () => {
        return(
            <SkeletonTheme baseColor="#c7c7c7" highlightColor="#d7d7d7" >
                {
                    load.indonesia.map((i) => {
                        return(
                            <Col xs={12} md={3} className="mt-2 my-4" key={i} >
                                <Card style={{ width: '100%' }} className="shadow-sm">
                                    <Box style={{width: '280px', height: '320px' }}>
                                        <Skeleton />
                                    </Box>      
                                    <Card.Body className='my_card'>
                                        <Card.Title><Skeleton count={1} style={{width: '100%'}}/></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted"><Skeleton count={1} style={{width: '100%'}}/></Card.Subtitle>
                                        <i className='go_read'><Skeleton count={1} style={{width: '80px'}}/></i>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
            </SkeletonTheme>
        )
    }

    return (
        <section id="free">
            <Container>
                <Row className='mt-2'>
                    {datas.indonesia ? datas.indonesia.map((data, i) => {
                        return(
                            <Col key={i} xs={12} md={3} className="mt-2 mt-2 my-4">
                                <Card style={{ width: '100%' }} className="shadow-sm">
                                    <Card.Img variant="top" src={data.image} />
                                    <Card.Body className='my_card'>
                                        <Card.Title>{data.title}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{data.author}</Card.Subtitle>
                                        <Button variant="primary" className='go_read' href={data.ebook} download>Download</Button>
                                        <i className='text-primary'>{data.price}</i>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }) :
                        loading()
                    }
                </Row>
            </Container>
        </section>
    );
}

export default Content;