import {useState, useEffect} from 'react'
import axios from 'axios';
import { useArticlesContext } from '../hooks/useArticlesContext';

// API KEY
const apiKey = import.meta.env.VITE_NEWS_API_KEY

const Home = () => {
  // search state
  const [searchNews, setSearchNews] = useState("");

  // category select state
  const [category, setCategory] = useState('');

  // loading state
  const [loading, setLoading] = useState(true)

  // bring in state and dispatch
  const {articles, dispatch} = useArticlesContext()

  // filtered articles state
  const [filteredArticles, setFilteredArticles] = useState([])

  // fetch function
  const fetchArticles = async () => {
    await axios.get(`https://newsapi.org/v2/top-headlines?language=en&category=${category}&apiKey=${apiKey}`)
      .then(response => {
        console.log(response.data.articles)
        dispatch({type: 'GET_ARTICLES', payload: response.data.articles})
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
        setLoading(false)
      })
  }

  // initial api call & load
  useEffect(() => {
    // set loading true
    setLoading(true)

    // run fetch articles below & api key
    fetchArticles()
  }, [category]) 

  // handlers for search & category changes

  // filter articles on search 
  useEffect(() => {
    // filter articles based on the search term
    if (articles) {
      const filtered = articles.filter(article => 
        article.title.toLowerCase().includes(searchNews.toLowerCase())
      );
      setFilteredArticles(filtered);
    }
  }, [searchNews, articles]);

  // search change
  const handleSearchChange = (event) => {
    setSearchNews(event.target.value)
  }

  // category change
  const handleCategoryChange = (event) => {
    let newCategory = event.target.value
    setCategory(newCategory)
  }

  // mapped articles 
  const Articles = ({articles}) => {
    const mappedArticles = articles.map((article, index) => {

      // map return
      return (
        <div key={index} className='article'>
          <h2>{article.title}</h2>
          <p>{article.description}</p>

          <button className='read-more-btn'>Read More...</button>
        </div>
      )
    })

    // return mapped articles 
    return (
      <>
        {mappedArticles}
      </>
    )
  }

  // what is being returned
  return (
    <div className='home-container'>
      {/* hero section */}
      <div className='hero-section'>

        {/* breaking news header */}
        <h2 className='page-header'>Breaking News</h2>

        {/* grid/bento image container */}
        <div className='grid-container'>
          <div className='grid-item'>
            <h1 id='headline-1'>2024 Olympics - Latest Updates</h1>
            <div className='grid-overlay'></div>
          </div>
          <div className='grid-item'>
            <h3 className='headline-2'>Financial Report - Paul Little</h3>
            <div className='grid-overlay'></div>
          </div>
          <div className='grid-item'>
            <h3 className='headline-2'>Climate Protests - Students at Hamburg</h3>
            <div className='grid-overlay'></div>
          </div>
        </div>
      </div>

      {/* articles header */}
      <h2 className='page-header'>Latest Articles</h2>

      {/* filter and search */}
      <div className='filter-search-container'>

        {/* search field */}
        <div className='search-container'>
          <label htmlFor='search-input'>Search: </label>
          <input type='text' 
            id='search-input' 
            value={searchNews} 
            onChange={handleSearchChange} ></input>
        </div>

        {/* category filter */}
        <div className='filter-container'>
          <label htmlFor="category-select">Category:</label>
          <select name="category-select" id="category-select" value={category} onChange={handleCategoryChange}>
            <option value="">All</option>
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="health">Health</option>
            <option value="science">Science</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
          </select>
        </div>
      </div> 
      {/* end of filter & search container */}

      {/* article container - article pop. here */}
      <div className='article-container'>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Articles articles={filteredArticles}/>
        )}
      </div>
      {/* end of article container */}

    </div>
  )
}

export default Home
