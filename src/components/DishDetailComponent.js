import React from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

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
        if(this.props.dish!==null){
            const comment = this.props.dish.comments.map(
                (ele)=> {
                    return (
                        <li key={ele.id}>
                            <p>{ele.comment}</p>
                            <p>--{ele.author}, {new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(ele.date)))}</p>
                        </li>
                    )
                });
            return(
                <div className="col-12 text-left">
                    <ul className="list-unstyled">{comments}</ul>
                </div>
            )
        }
    }

    const DishDetail = (props) => {
        if(props.dish!=null){
            return(
                <div className="container">
                <div className="row">
                    <RenderDish dish={props.dish}/>
                    <div className="col-12 col-md-5">
                        <h2>Comments</h2>
                        <div className="row">
                            <RenderComments comments ={props.dish.comments}/>
                        </div>
                    </div>
                </div>
                </div>
            )
        }else{
            return(
                <div className="row"></div>
            )
        }

    }


export default DishDetail;