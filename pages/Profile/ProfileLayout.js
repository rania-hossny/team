import React,  { useEffect, useState ,Fragment } from 'react'
import { Badge, Button, Card, Col, Form, ListGroup, ListGroupItem, Row } from 'react-bootstrap';

import styles from "./profilelayout.module.css"

import photo from "./pietra-schwarzler-FqdfVIdgR98-unsplash.jpg";
import { Link } from 'react-router-dom';
import { FiEdit ,FiLogOut } from "react-icons/fi";
import { HiOutlineCamera } from "react-icons/hi";
// import {UpdateProfile} from "../pages/UpdateProfile";




const ProfileLayout = (props) => {
  console.warn(props.id)
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
    fetch("http://localhost:3004/profile/"+props.id).then((result) => {
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
  // console.log(users.discreption);
  // function updateUser()
  // {
  //   let item={username,specialist,discreption,phone,email,address}
  //   console.warn("item",item)
  //   fetch(`http://localhost:3004/profile/`+props.id, {
  //     method: 'PUT',
  //     headers:{
  //       'Accept':'application/json',
  //       'Content-Type':'application/json'
  //     },
  //     body:JSON.stringify(item)
  //   }).then((result) => {
  //     result.json().then((resp) => {
  //       console.warn(resp)
  //       getUsers()
  //     })
  //   })
  // }
    return (
        <div className="container">
            <Row>
                <Col md={3}>
                
                <Card style={{ width: '19rem',height:"29rem" }} className={styles.cardprofile} >
               
                  <div className={styles.imgprofile}>
                    <Card.Img variant="top" style={{margin:"0px", borderRadius:"0%", width:"100%"}} src={photo} />
                    
                          <div className={styles.editimg} > 
                              <HiOutlineCamera className={styles.iconimg} />
                      {/* <input type="file" id="file" accept="image/*"></input>
                      <label for="file"> choose a photo</label> */}
                      </div>
                    </div> 
                    <Card.Body className="text-center">
                        <Card.Title><strong>{username}</strong></Card.Title>
                        <Card.Title style={{color:"#65676b"}}> <strong>{specialist ? specialist : "add specialist"}</strong></Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>
                            <Row style={{justifyContent:"space-around"}}>Teams
                             <Badge style={{height:"max-content"}} pill  variant="primary">100</Badge>
                             </Row>
                            </ListGroupItem> 
                            <ListGroupItem>
                            <Row style={{justifyContent:"space-around"}}>Owned
                             <Badge style={{height:"max-content"}} pill  variant="primary">50</Badge>
                             </Row>
                            </ListGroupItem> 
                            <ListGroupItem>
                            <Row style={{justifyContent:"space-around"}}>Friends
                             <Badge style={{height:"max-content"}} pill  variant="primary">500</Badge>
                             </Row>
                            </ListGroupItem>
                             
                    </ListGroup>
                    {/* <Card.Body>
                        <Row style={{justifyContent:"space-around"}}>
                        <Link type="button" to={"/Updateprofile/"+item.id} className="btn  btn-primary"><FiEdit/> Edit Profile</Link>
                        <Link type="button" className="btn  btn-danger"><FiLogOut/> Logout</Link>
                        </Row> 
                    </Card.Body> */}
                  
                </Card>
                
              
                </Col>

                
                <Col md={8} style={{marginLeft:"80px"}} >
                <Card className={styles.cardprofile} style={{height:"29rem"}} >
               
            
            <Card.Body style={{padding:"26px", marginTop:"20px"}} >
            <div className={styles.profilecontent}>
                <h4><strong>About Me</strong></h4>
                <strong><p>{discreption ? discreption : "add discreption"}</p></strong>
                <h4 style={{marginTop:"30px"}}><strong>Contact Me</strong></h4>
                <div className="contactdetail">
                <Row>
                   <strong>Phone :</strong>
                   <strong><p>{phone ? phone : "add phone"}</p></strong>

                </Row>
                <Row>
                <strong>Email :</strong>
                <strong><p>{email}</p></strong>

                </Row>
                <Row>
                <strong>Address :</strong>
                <strong><p>{address ? address : "add address"}</p> </strong>

                </Row>
                <Row style={{position:"absolute",bottom:"20px"}}>
                <Link type="button" to={"/Updateprofile/"+userId} className="btn  btn-primary"><FiEdit/> Edit Profile</Link>
                </Row>
                </div>
            {/* <Row style={{marginTop:"40px"}}>
                <Col md={3}>
                    <strong>Phone :</strong>
                    
                
               
                    <strong>Email :</strong>
                    
               
               
                    <strong>Address :</strong>
                  
                    
                </Col>
                <Col md={8}>
                <strong><p>{item.phone}</p></strong>
                <strong><p>{item.email}</p></strong>
                <strong><p>{item.address}</p> </strong>
                </Col> */}
                {/* <Col style={{marginRight:"30px"}} md={5}>
                    <h4><strong>MY SKILLS </strong></h4>
                    <strong><p>UI Design</p></strong>
                    <strong><p>Clean and Modern Web Design</p></strong>
                    <strong><p>PHP and MySQL Programming</p></strong>
                    <strong><p>Vector Design</p></strong>
                    
                </Col> */}
            {/* </Row> */}
            </div>
            </Card.Body>
            
          
               
                </Card>
                </Col>
            </Row>
            
        </div>
    )
}

export default ProfileLayout


