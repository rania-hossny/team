import React, { Fragment } from 'react'
import { Col, Card, Nav, Row } from 'react-bootstrap';
import { BiImageAdd } from "react-icons/bi";
import photo from "./pietra-schwarzler-FqdfVIdgR98-unsplash.jpg";
import { ImReply } from "react-icons/im";
import { BiDotsVerticalRounded } from "react-icons/bi";
import styles from "./teamcontent.module.css"


const Posts = () => {
    return (
        <Fragment>        
          <ul className={styles.postlist}>
            <li>
            <div className={styles.postcontent}>
              <div className={styles.ctitle}>
                <a href="#"><strong>mohamed ahmed</strong></a>
              </div>
              <div className={styles.ctime}>3 hours ago</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      </div>
            </li>
          </ul>
            {/* <Card className={styles.cardposts} >
              <Card.Body>
               <Row className={styles.Postheader}>
                  <Col md={4}>
                     <div className={styles.photop}>
                       <Row>
                        <Col md={4}><img src={photo}></img></Col> 
                        <Col md={8}>
                            <p> <b>Rania hossny</b> <br/> <span>post date</span></p>     
                        </Col>
                       </Row>     
                     </div>
                   </Col >
        
      <a className={styles.dotsedit} type="button">  <BiDotsVerticalRounded /></a>
    </Row>

    <Row className={styles.postbody}>
    <p>Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur</p>
    <div className={styles.linePost}></div>

    <div className={styles.reply}>
    <ImReply />
    <a type="button" >Reply</a>
    </div>
    </Row>
    
  </Card.Body>
</Card> */}

{/* comments */}

<ul className={styles.commentlist}>
  {/* first comment */}
  <li>
      <a className={styles.photop} >
        <img src={photo} style={{margin:"0px"}}></img>
      </a>
      <div className={styles.comcontent}>
        <div className={styles.ctitle}>
          <a href="#"><strong>Rania hossny</strong></a>
        </div>
        <div className={styles.ctime}>4 hours ago</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel sapien at risus commodo varius vel ut sapien. Aenean sodales non ex et venenatis. In hac habitasse platea dictumst. Donec vitae tellus non erat dapibus hendrerit.</p>

      </div>
  </li>

      {/* second comment */}
  <li>
      <a className={styles.photop} >
        <img src={photo} style={{margin:"0px"}}></img>
      </a>
      <div className={styles.comcontent}>
        <div className={styles.ctitle}>
          <a href="#"><strong>mohamed ahmed</strong></a>
        </div>
        <div className={styles.ctime}>3 hours ago</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      </div>
  </li>
  
  {/*  comment input */}
  <li>
    <Row>
      <Col md={1}><a className={styles.photop} >
        <img src={photo} style={{margin:"0px"}}></img>
      </a>
      </Col>
      <Col md={11} style={{marginTop: "10px" ,paddingLeft:"30px"}}>
      <form >
          <textarea rows="1" placeholder="Start typing here..." className="form-control"></textarea>
          <button type="submit" className="btn btn-sm btn-primary">Post Comment</button>
        </form>
      </Col>
    </Row>
      
      <div className={styles.comcontent}>
        
      </div>
    </li>
</ul>




        </Fragment>
    )
}

export default Posts
