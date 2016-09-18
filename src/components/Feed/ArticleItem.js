import React from 'react';
import {
    Link
} from 'react-router';
import NavLink from '../Utils/NavLink';
import Header from '../Utils/Header';
import SocialShare from '../Utils/SocialShare';
import LikeDislike from '../Utils/LikeDislike';
import CategoryList from './categoryList';

class ArticleItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <div className="row">
                <Header href={this.props.item.url} text={this.props.item.title} />
            </div>    
                <div className="row">
                    <div className="col-md-6"><small className="text-muted">Date</small></div>
                    <div className="col-md-6 pull-right"><small className="text-muted">HackerNews</small></div>
                </div>
                <div className="row">    
                    <div className="text-left">
                        <ul className="list-inline">
                            {this.props.item.category.map((cat, i) => <CategoryList key={i} i={i} tag={cat} />)}
                        </ul>    
                    </div>
                </div>
                <div className="row">
                    <LikeDislike id={this.props.item.storyId} />
                    <SocialShare id={this.props.item.storyId} />
                </div>
            
                <div className="row divider">
                    <div className="col-sm-12"><hr></hr></div>
                </div>
            </div>
        );
    }
}

export default ArticleItem;
