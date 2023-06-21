import React, { Component } from 'react'
import NewsItem from './NewsItem'
import NavBar from './NavBar';
import Spinner from './Spinner';

export class News extends Component {


    constructor() {
        super();
        console.log('constructor');
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            category: "tesla"
        }
    }


    async componentDidMount() {
        this.setState({ loading: true })
        let url = `https://newsapi.org/v2/everything?q=${this.state.category}&sortBy=publishedAt&apiKey=8eaf1fc15ee44c4cbc38c003fbc0c74c&pageSize=10&page=${this.state.page}`;
        // let url = `https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=8eaf1fc15ee44c4cbc38c003fbc0c74c&pageSize=10&page=${this.state.page}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(url);
        this.setState({ articles: parsedData.articles, loading: false })

    };

    handleNext = async () => {
        this.setState({ loading: true })
        // this.setState({ page: this.state.page + 1 });
        let url = `https://newsapi.org/v2/everything?q=${this.state.category}&sortBy=publishedAt&apiKey=8eaf1fc15ee44c4cbc38c003fbc0c74c&pageSize=10&page=${this.state.page + 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(url);
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading: false
        });
    }

    handlePrevious = async () => {
        this.setState({ loading: true })
        let url = `https://newsapi.org/v2/everything?q=${this.state.category}&sortBy=publishedAt&apiKey=8eaf1fc15ee44c4cbc38c003fbc0c74c&pageSize=10&page=${this.state.page - 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(url);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }

    categoryTo = (str) => async () => {
        // str = str.trim();
        let url = `https://newsapi.org/v2/everything?q=${str}&sortBy=publishedAt&apiKey=8eaf1fc15ee44c4cbc38c003fbc0c74c&pageSize=10&page=${this.state.page}`;
        try {
            this.setState({ loading: true })
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(url);
            this.setState({
                articles: parsedData.articles,
                loading: false
            });
        } catch (error) {
            console.error('Error occurred during fetching:', error);
        }
    };

    render() {
        return (
            <div>
                <NavBar categoryTo={this.categoryTo} />
                <div className='container'>
                    <h2 className='text-center'>Top Headline </h2>
                    <div className="text-center">{this.state.loading && <Spinner />}</div>
                    <div className="row">
                        {this.state.articles ?
                            this.state.articles.map((a) => {

                                return (
                                    <div className="col-md-4" key={a.url}>
                                        <NewsItem title={a.title ? a.title.slice(0, 40) : ""} discription={a.description ? a.description.slice(0, 100) : ""} url={a.url} imageUrl={a.urlToImage} />
                                    </div>
                                )
                            })
                            : <div className='text-center mt-4'><Spinner /></div>}
                    </div>
                    <div className="container d-flex justify-content-between mb-5">
                        <button disabled={this.state.page <= 1} type='button' onClick={this.handlePrevious} className='btn btn-dark '>&larr; PREVIOUS </button>
                        <button type='button' className='btn btn-dark' onClick={this.handleNext}>NEXT &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default News;