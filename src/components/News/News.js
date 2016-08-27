import React from 'react';
import {
    Link
} from 'react-router';

class News extends React.Component {
    render() {
        return (
            <div>
            <div className="row">
                <div className="col-sm-10">
                    <h3><Link to={this.props.news.url}>{this.props.news.title}</Link></h3>
                    <h4><span className="label label-default">Something</span></h4><h4>
                        <small className="text-muted">1 hour ago • <a href="#" class="text-muted">Read More</a></small>
                    </h4>
                </div>
                <div className="col-sm-2">
                    something goes here
                </div>
            </div>
            <div className="row divider">    
                <div className="col-sm-12"><hr></hr></div>
            </div>    
            </div>
        );
    }
}


export default News;
