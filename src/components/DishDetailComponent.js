import React, { useState } from "react";
import {Card, CardBody, CardImg, CardText, CardTitle, 
    Breadcrumb, BreadcrumbItem, Button, 
    Modal, ModalHeader, ModalBody, Row, Col, Label} from "reactstrap";
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form'; 


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

    function RenderDish({dish}){
        if(dish!==null){
            return(
                <div className="col-12 col-md-5">
                    <Card>
                        <CardImg witdh="100%" top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
    }

    function RenderComments({comments}){
        if(comments!==null){
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment) => {
                            return (
                                <li key={comment.id}>
                                 <p>{comment.comment}</p>
                                 <p>--{comment.author}, {new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                 </li>
                            );   
                        })}
                    </ul>
                </div>
            )
            } else {
                    return (
                        <div></div>
            );
        } 
    }

    function CommentForm() {

    const [modal, setModal] = useState(false);
      
    const toggle = () => {setModal(!modal)};
    

    const handleSubmit = (values) => {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    };

    return (
        <div className="container">
            <Button outline color="bg-primary" onClick={toggle}>
                <span className="fa fa-pencil"></span> Submit comment
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Submit Commit</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => handleSubmit(values)}>
                        <Row className="form-group">
                            <Col>
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" name="rating" className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                                <Label htmlFor="author">Author</Label>
                                <Control.text model=".author" id="author" name="author"
                                placeholder="Author" className="form-control"
                                validators={
                                    { required, maxLength: maxLength(15), minLength: minLength(3) }
                                    }/>
                                <Errors className="text-danger"
                                model=".author"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greather than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md = {12}>
                                <Label htmlFor="comment">Comment</Label>                                
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control" />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{size:10}}>
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
        </div>
        );
    }

    const DishDetail = (props) => {
        if(props.dish!=null){
            return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.comments}/>
                        <CommentForm/>
                </div>
                </div>
            );
        }else{
            return(
                <div className="row"></div>
            )
        }

    }


export default DishDetail;