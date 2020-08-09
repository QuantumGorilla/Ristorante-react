import React, {Component} from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

class DishDetail extends Component{
    constructor(props) {
        super(props);
    }

    renderDish(dish){
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

    renderComments(){
        if(this.props.dish!==null){
            const comments = this.props.dish.comments.map(
                (it)=> {
                    return (
                        <li key={it.id}>
                            <p>{it.comment}</p>
                            <p>--{it.author}, {it.date}</p>
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

    render() {
        if(this.props.dish!=null){
            return(
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    <div className="col-12 col-md-5">
                        <h2>Comments</h2>
                        <div className="row">
                            {this.renderComments()}
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
}

export default DishDetail;