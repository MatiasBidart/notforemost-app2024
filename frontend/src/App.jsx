import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from './store/slices/articles.slice';
import { Spinner } from '@chakra-ui/react'
import ArticleComponent from './components/ArticleComponent';

// 👨🏽‍💻 A brief application spread on components approach

function App() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articlesSlice);  
  const loaderSpinner = useSelector((state) => state.isLoading);  

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  return (
    < >
      <img src='https://netforemost.com/wp-content/uploads/Netforemost-Logo-Positive-PNG.svg' className='img-logo' alt='NotForemost Logo'/>
      <h2><b>Matias Ezequiel Bidart</b></h2>
      <h2>matiasezequielbidart@gmail.com</h2>
      <h5><b>+54 9 11 2373-3304</b>🧉</h5>
      {
        loaderSpinner ? <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
        : <div className='article-dv'>
          {
            articles.map(
              (article) => <ArticleComponent key={article._id} article={article}/>
              )
          }
          </div>
      }
    </>
    
  );
}

export default App;
