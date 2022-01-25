import React, { useEffect, useState } from 'react';

const TopHeadline = () => {
    const [articles, setArticles] = useState([]);
    useEffect(()=>{
        const url ='https://newsapi.org/v2/top-headlines?country=us&apiKey=4f2dcfd2ae714a64a53342f757e8a45e'
        fetch(url)
        .then(response => response.json())
        .then(data => setArticles(data.articles))
    },[])
    return (
        <div>
            <h1>Top Headline: {articles.length}</h1>
                {
                    articles.map(article => <div> <li> <a target="_blank" href={article.url}> {article.title} </a></li> </div>)
                }
        </div>
    );
};

export default TopHeadline;