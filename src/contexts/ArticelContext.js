import { createContext, useContext, useEffect, useState } from "react";

const ArticelContext = createContext()
export const useArticel = () => useContext(ArticelContext)

export const ArticelProvider = ({children}) => {

    const [article, setArticle] = useState([])
    const [articles, setArticles] = useState([])


    useEffect(() => {
    getArticles()
    }, [])

    async function getArticle(id) {
        try {
            const data = await fetch (`https://win23-assignment.azurewebsites.net/api/articles/${id}`)
            if(data.ok) {
                const articleData = await data.json()
                setArticle(articleData)
            }
        }
        catch(error) {
            console.log('Error getting data')
        }
    }

    async function getArticles () {
        try {
          const data = await fetch("https://win23-assignment.azurewebsites.net/api/articles")
          if(data.ok) {
  
            const articleData = await data.json()
            setArticles(articleData)
          }
        }
        catch(error) {
          console.error(error);
        }
      }

      return (

        <ArticelContext.Provider value={{articles, article, getArticles, getArticle}}>
            {children}

        </ArticelContext.Provider>
      )

}


