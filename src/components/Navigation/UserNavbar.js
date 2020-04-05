import React, { useState, useEffect } from 'react'
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import { HOME } from '../../routes/router'

const styles = {
    userImg: {
        height: "40px",
        width: "40px",
    }
}

const UserNavbar = (props) => {
    const [user, setUser] = useState([])

    useEffect(() => {
        let data = JSON.parse(sessionStorage.getItem('user'));
        let userdata = data
        console.log(userdata.profileObj)
        setUser(userdata.profileObj)
    }, [])

    const logout  = async e => {
        e.preventDefault();
        await sessionStorage.removeItem('user');
        return props.history.push(HOME)
    }

    return (
        <Navbar bg="light">
            <Container fluid>
                <Navbar.Brand>
                    UDEMY_CLONE
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text onClick={logout}>
                        <Image src={user.imageUrl} roundedCircle thumbnail style={styles.userImg} /> {user.name}
                    </Navbar.Text>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default UserNavbar
