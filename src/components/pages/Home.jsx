import {useState, useEffect} from 'react'
import axios from 'axios';
import { useArticlesContext } from '../hooks/useArticlesContext';

// API KEY
const apiKey = import.meta.env.VITE_NEWS_API_KEY

const Home = () => {
  // State for selects:
  const [country, setCountry] = useState('');
  const [category, setCategory] = useState('');
  // State for loading
  const [loading, setLoading] = useState(true)

  // bring in state and dispatch
  const {articles, dispatch} = useArticlesContext()

  useEffect(() => {
    // Set loading to true:
    setLoading(true)
    // fetch function
    const fetchArticles = async () => {
      await axios.get(`https://newsapi.org/v2/top-headlines?language=en&country=${country}&category=${category}&apiKey=${apiKey}`)
        .then(response => {
          console.log(response.data.articles)
          // setArticles(response.data.articles)
          dispatch({type: 'GET_ARTICLES', payload: response.data.articles})
          setLoading(false)
        })
        .catch(error => {
          console.log(error)
          setLoading(true)
        })
    }
    fetchArticles()
    // console.log("Country state is now " + country)
    // console.log("Category state is now " + category)
    console.log(apiKey);
  }, [country, category]) 

  // handle country change
  const handleCountryChange = (event) => {
    let newCountry = event.target.value
    // console.log(newCountry);
    setCountry(newCountry)
  }

  // handle the category change
  const handleCategoryChange = (event) => {
    let newCategory = event.target.value
    // console.log(newCategory);
    setCategory(newCategory)
  }

  // mapped articles component
  const Articles = ({articles}) => {
    const mappedArticles = articles.map((article, index) => {
      // map return
      return (
        <div key={index} className='article'>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </div>
      )
    })
    // Articles Component return:
    return (
      <>
        {mappedArticles}
      </>
    )
  }

  return (
    <div className='home-container'>
      <div className='filter-container'>
        {/* Country Filters */}
        <div className='filter-flex-container'>
          <label htmlFor="country-select">Country:</label>
          <select name="country-select" id="country-select" onChange={handleCountryChange}>
            <option value="">Any</option>
            <option value="us">USA</option>
            <option value="gb">Britian</option>
            <option value="au">Australia</option>
            <option value="nz">NZ</option>
          </select>
        </div>
        

        {/* Category Filters */}
        <div className='filter-flex-container'>
          <label htmlFor="category-select">Category:</label>
          <select name="category-select" id="category-select" onChange={handleCategoryChange}>
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
      {/* End of Filters */}

      <div className='article-container'>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Articles articles={articles}/>
        )}
      </div>

    </div>
  )
}

export default Home
