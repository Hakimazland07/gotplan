import { useEffect, useState } from 'react';
import { PAGINATION } from '../../services/gql-api';
import { useQuery } from '@apollo/client';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import {FaArrowLeft,FaArrowRight} from "react-icons/fa"
import me from '../../assets/imgs/me-2.png';
import contact from '../../assets/imgs/contact.svg';

import './home.scss'
import { Row, Col } from 'react-bootstrap';


export default function Home() {
    let [contacts, setContacts] = useState([]);
    let [latest, setLatest] = useState<Array<any>>([]);
    let [page, setPage] = useState(0);
    let pages = useQuery(PAGINATION, {
        variables: { first: 3, offset: page }
    }).data;

    useEffect(() => {
        if (pages) {
            setContacts(pages.pagination);
            setLatest(pages.pagination.users);
        }
    },[pages])

    function next() {
        if (page + 3 < contacts.totalUsers) {
            setPage(page + 3);

        }
    }


    function prev() {
        if (page - 3 >= 0) {
            setPage(page - 3);
        }
    }

    const latestlist = (
        <div>
            <ListGroup style={{height: "300px"}}>
                {latest.map((data) => {
                    return (
                        <ListGroupItem className="listgroupitem" key={data.id}>
                            <p className="listitemtext-1">
                                {data.firstName + " " + data.lastName}
                            </p>
                            <p className="listitemtext-2">
                                {data.phoneNumber}
                            </p>
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
        </div>
    )

    return (
        <div className='home'>
            <div className="header">

            </div>
            <div className="body">
                <div className="container-1">
                    <img className="img-1" src={me}></img>
                    <div className="group">
                        <p className="smalltext-1">Hello,</p>
                        <p className="title-1">Hakim Mazlan</p>
                    </div>
                </div>
                <Row>
                    <Col sm={12}>
                        <div className="card-1">
                            <div className="cardleft">
                                <p className="cardtext-1">Total Contact</p>
                                <p className="cardtext-2">{contacts.totalUsers}</p>
                            </div>
                            <div className="cardright">
                                <img className="cardimg-1" src={contact}></img>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12}>
                        <p className="subtitle-1">Latest Contact</p>
                        {latestlist}
                        <div className="pagination-btn">
                            <Button className="btn" onClick={prev}><FaArrowLeft/></Button>
                            <Button className="btn" onClick={next}><FaArrowRight/></Button>
                        </div>
                    </Col>
                </Row>
            </div >
        </div >
    )
}


