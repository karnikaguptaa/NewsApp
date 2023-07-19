import React, { PureComponent } from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

class News extends PureComponent {
 static defaultProps = {
  country: 'in',
  pageSize: 6,
  category: 'General'

   }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor(){
    super();
    console.log("Hello, I am a constructor")
    this.state = {
           articles : [],
           loading : false,
           page: 1
    }
  }

   async componentDidMount(){
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=07bbc86a384246c29279ff02813c72d3&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data =await fetch(url);
    let parsedData = await data.json();
    console.log("n");
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }
  handlePrevClick = async () =>{
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=07bbc86a384246c29279ff02813c72d3&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data =await fetch(url);
    let parsedData = await data.json();
    console.log("n");
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false
    });
  }
  handleNextClick = async () =>{
    if(!(this.state.page > Math.ceil(this.state.totalResults/this.props.pageSize))){
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=07bbc86a384246c29279ff02813c72d3&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data =await fetch(url);
    let parsedData = await data.json();
    console.log("n");
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      loading: false
    });
  }}
  render() {
    return (
      <div>
    <Container className='my-3'>
    <h2 className="d-flex justify-content-center" style={{margin: '35px 0px', marginTop: '90px' }}>NewsApp : Hot Headlines</h2>
    {this.state.loading && <Spinner/>}
    <Row>
        {!this.state.loading && this.state.articles.map((element)=>{
      return <Col className='sm my-3'  key={element.url}>
        <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </Col>
  })}
   <div className="d-flex justify-content-between sm my-3 md-3">
   <Button disabled={this.state.page<=1} variant="dark" onClick={this.handlePrevClick}>&larr; Previous</Button>
   <Button disabled={this.state.page > Math.ceil(this.state.totalResults/this.props.pageSize-1)} variant="dark" onClick={this.handleNextClick}>Next &rarr;</Button>
   </div>
  </Row>
   </Container>
  </div>
    )
  }
}
export default News;