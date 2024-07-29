import { useParams } from "react-router-dom"
import { useArticlesContext } from "../hooks/useArticlesContext"
import {format} from "date-fns"

const SingleArticle = () => {
  const {id} = useParams()
  // bring in the context (global state)
  const {articles} = useArticlesContext()

  const article = articles[id]
  const formattedDate = format(new Date (article.publishedAt), "h:dd a, m MMMM yyyy")

  return (
    <div>
      <img src={article.urlToImage} alt={articles[id].title + " image"}/>
      <h2>{article.title}</h2>
      <h3>{formattedDate}</h3>
      <p>{article.content}</p>
      <a href={article.url} target="_blank">See Full Article</a>
      {/* target _blank lets link open in new tab */}
    </div>
  )
}

export default SingleArticle

