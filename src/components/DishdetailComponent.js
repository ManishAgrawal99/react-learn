import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderComments(comments) {

        const commentSec = comments.map((comment) =>{

            return(
                <li key={comment.id}>
                    <div>
                        {comment.comment}
                    </div>
                    <p>--{comment.author} {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long', day: '2-digit'}).format(new Date(comment.date))}</p>

                </li>
            )
        });

        if(comments != null){
            return (
                <div className = "container">
                    <div className = "row">
                        <h4>Comments</h4>
                    </div>
                    <div className = "row">
                        <ul className="list-unstyled">
                            {commentSec}
                        </ul>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div></div>
            )
        }
    }

    render() {

        const selectedDish = this.props.dish;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={selectedDish.image} alt={selectedDish.name} />
                            <CardBody>
                                <CardTitle> {selectedDish.name} </CardTitle>
                                <CardText> {selectedDish.description} </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(selectedDish.comments)}
                    </div>
                </div>
            </div>
        );

    }
}

export default DishDetail;