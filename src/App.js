import { useEffect, useState } from "react";
import Cards from './Components/Cards'
import Nav from './Components/Nav'

function App() {
  const [news, setNews] = useState([])
  const [error, setError] = useState('')
  const getNewsData = async (category) => {
    let val = '';
    if (!category) {
      val = 'top-headlines'
      category = 'country=in'
    } else {
      val = 'everything'
      category = `q=${category}`
    }

    if(news.length){
      setNews([])
      setError('')
    }
      
    const url = `http://newsapi.org/v2/${val}?${category}&apiKey=650b77b1f82e4c3db512e21f3e1a2fae`;
    const req = new Request(url);
    const promiseData = await fetch(req);
    const {status, message, articles} = await promiseData.json();
  
    if(status !== 'error')
      setNews(articles)
    else
      setError(message)
  }

  useEffect(() => {
    getNewsData();
    //eslint-disable-next-line
  }, [])
  return (
    <>
      <Nav fun={getNewsData}/>
      <Cards news={news} error={error}/>
    </>
  );
}

export default App;
