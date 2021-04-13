
import { useState } from 'react'
import './navbar.scss'
import { Form, Button, Navbar, Container, Col, Row } from 'react-bootstrap';
import { Fab } from '@material-ui/core';
import { IoMdAdd } from 'react-icons/io';
import { IoCheckmark } from 'react-icons/io5';
import { FaHome, FaList } from 'react-icons/fa';
import Drawer from 'react-drag-drawer';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../services/gql-api';
import History from '../History';


export default function NavigationBar() {
    let [add, setAdd] = useState(false);
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [gender, setGender] = useState("");
    let [phoneNumber, setPhoneNumber] = useState("");
    let [nav, setNav] = useState("home");

    const [createUser] = useMutation(CREATE_USER);

    function openAddContact() {
        if (add === false) {
            setAdd(true);
        } else {
            setAdd(false);
        }
    }

    function addNewContact() {
        createUser({
            variables: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                gender: gender,
                phoneNumber: phoneNumber
            }
        }).then(response => {
            window.location.reload(false);
        })

        setFirstName("");
        setLastName("");
        setEmail("");
        setGender("");
        setPhoneNumber("");

        setAdd(false);
    }

    const addDrawerChild = (
        <div>
            <p className='subtitle'>Add New Contact</p>
            <Form onSubmit={addNewContact}>
                <Form.Group controlId="fistName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Contact First Name" onChange={(e) => { setFirstName(e.target.value) }} value={firstName} />
                </Form.Group>

                <Form.Group controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Contact Last Name" onChange={(e) => { setLastName(e.target.value) }} value={lastName} />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} value={email} />
                </Form.Group>

                <Form.Group controlId="gender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select" placeholder="Gender" onChange={(e) => { setGender(e.target.value); console.log(e.target.value) }} value={gender}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="phone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Phone Number" onChange={(e) => { setPhoneNumber(e.target.value) }} value={phoneNumber} />
                </Form.Group>

                <Button className="btn-submit" variant="primary" type="submit">
                    <IoCheckmark style={{ marginBottom: "2px" }} />
                </Button>
            </Form>
        </div>
    )
    return (
        <div>
            <Navbar expand="lg" variant="light" bg="light" fixed="bottom">
                <Container>
                    <Row >
                        <Col className="text-center">
                            <FaHome className={nav === 'home' ? 'activeNav' : ''} size={25} onClick={() => { setNav('home'); History.push('/') }} />
                        </Col>
                        <Col className="text-center">
                            <FaList className={nav === 'list' ? "activeNav" : ""} size={25} onClick={() => { setNav('list'); History.push('/list') }} />
                        </Col>
                    </Row>
                </Container>
            </Navbar>
            <Fab className="fabStyles" color={'primary'} onClick={openAddContact}>
                <IoMdAdd size={20} />
            </Fab>
            <Drawer
                open={add}
                onRequestClose={openAddContact}
                modalElementClass='addDrawer'
            >
                {addDrawerChild}
            </Drawer>
        </div>
    )

}

