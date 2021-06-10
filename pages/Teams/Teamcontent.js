import React from 'react'
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';

import { BrowserRouter, Link, Route ,Switch} from 'react-router-dom';
import Files from './Files';
// import Navteam from './Navteam';
import Posts from './Posts';
import { RiSendPlaneFill } from "react-icons/ri";
import { BsFilePost } from "react-icons/bs";
import { VscFiles } from "react-icons/vsc";
import styles from "./teamcontent.module.css"
import photo from "./depositphotos_124789918-stock-photo-teamwork-and-teambuilding-concept-in.jpg"
import photo2 from "./pietra-schwarzler-FqdfVIdgR98-unsplash.jpg"

const Teamcontent = () => {
    return (
        <div className="container">
                <BrowserRouter>
                
               <Row>
                   {/* posts Row */}
                   <Col md={9}>
                   {/* add post */}
                   <Row className={styles.addpost}>
      <Col md={1}><a className={styles.photop} >
        <img src={photo2} style={{margin:"0px"}}></img>
      </a>
      </Col>
      <Col md={11} style={{marginTop: "10px"}}>
      <form >
          <textarea rows="1"  placeholder="Say something..." className="form-control"></textarea>
          <button className="btn btn-primary" style={{float:"right"}}><RiSendPlaneFill/> Share </button>
        </form>
      </Col>
    </Row>
                   {/* <Row style={{marginTop:"40px"}}>
                        <img className={styles.photoinput} src={photo2}></img>
                        <input className={styles.inputpost} placeholder="say something" ></input>
                </Row> 

                <Row style={{justifyContent: "flex-end",marginTop: "2px"}}>
                    <button className="btn btn-primary"><RiSendPlaneFill/> Share </button>
                </Row> */}
                {/* posts */}
                <Row className={styles.userActivities}>
               
                <div className={styles.i} >
                    <a className={styles.photopost} >
                        <img src={photo} style={{margin:"0px"}}></img>
                    </a>

                    <div className={styles.activityContent}>
                     <Posts/>
                    </div>  

                </div>
                   
                </Row>
                <Row className={styles.userActivities}>
                    
                <div className={styles.i} >
                <a className={styles.photopost} >
                        <img src={photo} style={{margin:"0px"}}></img>
                    </a>

                    <div className={styles.activityContent}>
                     <Posts/>
                    </div>  

                </div>
                   
                </Row>
                
                   </Col>
                    {/* sidebar */}
                   <Col className={styles.sidebar} md={3}>

                       {/* teams Card */}
                   <Card className={styles.cardposts}  style={{ width: '18rem' }}>
                        <Card.Header className={styles.sidetitle} >Team 1</Card.Header>
                         <Card.Img className={styles.imgteam} style={{marginTop:"10px", borderRadius:"5%"}} variant="top" src={photo} />
                        <Card.Body className="text-center">
                            
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">View members</Button>
                        </Card.Body>
                    </Card>

                    {/* teams Category */}
                    <Card className={styles.cardposts} style={{ width: '18rem' }}>
                        <Card.Header className={styles.sidetitle}>Category</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{padding:"0px"}}> 
                                <Link  className={styles.categorylist}> <BsFilePost/> Posts</Link>
                                </ListGroup.Item>
                            <ListGroup.Item style={{padding:"0px"}}>
                                <Link  className={styles.categorylist}><VscFiles/> Files</Link>
                                </ListGroup.Item>
                            
                        </ListGroup>
                        </Card>
                        
                   </Col>
               </Row>
                {/* <Navteam/> */}

                
                <Switch>
                    {/* <Route path="/posts" component={Posts}></Route> */}
                    <Route path="/files" component={Files}></Route>
                    </Switch>
                </BrowserRouter>
        </div>
    )
}

export default Teamcontent
