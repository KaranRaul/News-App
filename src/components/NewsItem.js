import React, { Component } from 'react'

export default class NewsItem extends Component {

    render() {

        let { title, discription, imageUrl, url } = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{ "width": "21rem" }}>
                    <img src={imageUrl} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{discription}</p>
                        <a href={url} className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div >
        )
    }
}

