import { useEffect, useState } from 'react'
import './list.scss'
import { ListGroup, ListGroupItem, Form, Button } from 'react-bootstrap';
import { useQuery, useMutation } from '@apollo/client';
import { LOAD_USERS, GET_USER_BY_ID, DELETE_USER, UPDATE_USER, SEARCH_USER, GET_GENDERS, FILTER_GENDER } from '../../services/gql-api';
import { IoFilter } from "react-icons/io5"
import Drawer from 'react-drag-drawer';
import SearchBar from "material-ui-search-bar";


export default function List() {
    let [contacts, setContacts] = useState<Array<any>>([])
    let [detail, setDetail] = useState(false);
    let [filter, setFilter] = useState(false);
    let [applyFilter, setApplyFilter] = useState("");
    let [search, setSearch] = useState("");
    let [listGender, setListGender] = useState([]);

    let [id, setId] = useState(0);
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [gender, setGender] = useState("");
    let [phoneNumber, setPhoneNumber] = useState("");


    const getUsers = useQuery(LOAD_USERS).data;
    const [deleteUser] = useMutation(DELETE_USER);
    const [updateUser] = useMutation(UPDATE_USER);
    const [getUserById] = useMutation(GET_USER_BY_ID);
    const [findUser] = useMutation(SEARCH_USER);
    const getGenders = useQuery(GET_GENDERS).data as any;
    const [filterGender] = useMutation(FILTER_GENDER);



    useEffect(() => {
        if (getUsers && getGenders) {
            setContacts(getUsers.getAllUser);
            setListGender(getGenders.getGenders);
        }

    }, [getUsers, getGenders]);

    function updateFirstName(e: any) {
        setFirstName(firstName = e.target.value)
    }

    function updateLastName(e: any) {
        setLastName(lastName = e.target.value)
    }

    function updateEmail(e: any) {
        setEmail(email = e.target.value)
    }

    function updateGender(e: any) {
        setGender(gender = e.target.value)
    }
    function updatePhoneNumber(e: any) {
        setPhoneNumber(phoneNumber = e.target.value)
    }

    function openDetailContact() {
        if (detail === false) {
            setDetail(true);
        } else {
            setDetail(false);
        }

        setId(0);
        setFirstName("");
        setLastName("");
        setEmail("");
    }

    function openFilter() {
        if (filter === false) {
            setFilter(true);
        } else {
            setFilter(false);
        }
    }

    function searching(value: any) {
        setSearch(value);
        console.log(value);
        if (value) {
            findUser({
                variables: {
                    firstName: value
                }
            }).then(async response => {
                var result = await response.data;
                console.log(result);
                setContacts(result.findUser)
            })
        } else {
            setContacts(getUsers.getAllUser)
            console.log('get all')
        }
    }

    function contactDetails(id: any) {
        openDetailContact();
        getUserById({
            variables: {
                id: id
            }
        }).then((response) => {
            if (response.data) {
                let data = response.data;
                setId(id = data.getUserById.id)
                setFirstName(firstName = data.getUserById.firstName);
                setLastName(lastName = data.getUserById.lastName);
                setEmail(email = data.getUserById.email);
                setGender(gender = data.getUserById.gender);
                setPhoneNumber(phoneNumber = data.getUserById.phoneNumber);
            }
        }).catch(error => {
            console.log(error)
        })
    }

    function updateContact(id: any) {
        updateUser({
            variables: {
                id: id,
                firstName: firstName,
                lastName: lastName,
                email: email,
                gender: gender,
                phoneNumber: phoneNumber,
            }
        }).then(response => {
            openDetailContact();
            window.location.reload(false);
        })
    }

    function deleteContact(id: any) {
        deleteUser({
            variables: {
                id: id
            }
        }).then(response => {
            openDetailContact();
            setContacts(getUsers.getAllUser);
            window.location.reload(false);
        })
    }

    function apply() {
        if(applyFilter != "All"){
            filterGender({
                variables: {
                    gender: applyFilter
                }
            }).then(response => {
                setContacts(response.data.filterGender);
            })
        }else{
            setContacts(getUsers.getAllUser)
        }
        setFilter(false)

    }


    const detailDrawerChild = (
        <div>
            <p className='subtitle'>Contact Detail</p>
            <Form.Group controlId="fistName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Contact First Name" onChange={(e) => { updateFirstName(e) }} defaultValue={firstName} />
            </Form.Group>

            <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Contact Last Name" onChange={(e) => { updateLastName(e) }} defaultValue={lastName} />
            </Form.Group>

            <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Email" onChange={(e) => { updateEmail(e) }} defaultValue={email} />
            </Form.Group>

            <Form.Group controlId="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Control as="select" placeholder="Gender" onChange={(e) => { updateGender(e) }} defaultValue={gender}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Phone Number" onChange={(e) => { updatePhoneNumber(e) }} defaultValue={phoneNumber} />
            </Form.Group>
            <Button onClick={() => deleteContact(id)}> Delete</Button>
            <Button onClick={() => updateContact(id)}> Update</Button>
        </div>
    )

    const filterDrawerChild = (
        <div>
            <p className='subtitle'>Filter Mode</p>
            <Form.Check
                key={0}
                type="radio"
                className="radio-btn"
                label="All"
                name="formHorizontalRadios"
                id={"formHorizontalRadios"}
                onClick={() => setApplyFilter("All")}
            />
            {
                listGender.map((data, index) => {
                    return (
                        <Form.Check
                            key={index}
                            type="radio"
                            className="radio-btn"
                            label={data}
                            name="formHorizontalRadios"
                            id={"formHorizontalRadios" + index + 1}
                            onClick={() => setApplyFilter(data)}
                        />
                    )
                })
            }
            <Button className="apply-btn" onClick={apply}>Apply</Button>
        </div>
    )

    return (
        <div className='list'>
            <div className="body">
                <SearchBar
                    className='searchbarCustom'
                    value={search}
                    onChange={(newValue) => searching(newValue)}
                />
                <div className="filter">
                    <p onClick={openFilter} className="filtertext">Filter</p>
                    <IoFilter size={16} />
                </div>
                <ListGroup>
                    {contacts.map((res) => {
                        return (
                            <ListGroupItem key={res.id} onClick={() => contactDetails(res.id)}>
                                <p className="item-p">{res.firstName + ' ' + res.lastName}</p>
                                <p className="item-p">{res.email}</p>
                            </ListGroupItem>
                        )
                    })}
                </ListGroup>
                <Drawer
                    open={detail}
                    onRequestClose={openDetailContact}
                    modalElementClass='detailDrawer'
                >
                    {detailDrawerChild}
                </Drawer>
                <Drawer
                    open={filter}
                    onRequestClose={openFilter}
                    modalElementClass='detailDrawer'
                >
                    {filterDrawerChild}
                </Drawer>
            </div>
        </div>
    )
}

