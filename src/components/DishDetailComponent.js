import react, {Component} from 'react';
import {Card, CardText} from 'reactstrap';

class DishDetail extends Component {

    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    renderComments(dish){
        if(dish != null)
            return (<Card>

            </Card>);
        else 
            return (<div></div>);
    }


    render(){
        return (
            <div className="row">
                <div className="col-12 col-5 m-1">
                    <Card>                      
                    </Card>
                </div>
            </div>
        );
    }


}

export default DishDetail;