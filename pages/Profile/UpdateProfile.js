import React ,{useState,useEffect} from 'react'
import {useHistory} from "react-router-dom"
import { Badge, Button, Card, Col, Form, ListGroup, ListGroupItem, Row } from 'react-bootstrap';


const UpdateProfile = (props) => {
  const history =useHistory();

    console.warn(props.match.params.id)
    const [users, setUser] = useState([])
  const [discreption, setDesc] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [userId,setUserId]=useState(null)
    useEffect(() => {
        getUsers();
      }, [])
      function getUsers() {
        fetch("http://localhost:3004/profile/"+props.match.params.id).then((result) => {
          result.json().then((resp) => {
            console.warn(resp)
            setUser(resp)
            setDesc(resp.discreption)
            setPhone(resp.phone)
            setEmail(resp.email)
            setAddress(resp.address)
            setUsername(resp.username)
            setSpecialist(resp.specialist)
            setUserId(resp.id)
          })
        })
      }

      function updateUser()
  {
    let item={username,specialist,discreption,phone,email,address}
    console.warn("item",item)
    fetch(`http://localhost:3004/profile/`+userId, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
        alert("profile updated")
        history.push("/Profile/"+props.match.params.id)
      })
    })
  }
    return (
        <div className="container updateprofile" style={{marginTop:"20px"}}>
            <h1 className="text-center" style={{marginBottom:"20px"}}>Update Profile</h1>
            <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Name
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder="Name" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
     Specialist
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" value={specialist} onChange={(e)=>{setSpecialist(e.target.value)}} placeholder="Specialist" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Description
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" value={discreption} onChange={(e)=>{setDesc(e.target.value)}} placeholder="Description" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Phone
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder="Phone" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Address
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" value={address} onChange={(e)=>{setAddress(e.target.value)}} placeholder="Address" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} style={{justifyContent:"center"}} className="mb-3" controlId="formPlaintextPassword">
  <Button onClick={updateUser} style={{fontSize:"1.2rem"}}>Update</Button>
  </Form.Group>
</Form>
        </div>
    )
}

export default UpdateProfile

