import { useState, useEffect, createContext } from 'react'

export const MoviesContext = createContext();

const MoviesContextProvider = (props) => {
    const [movies, setMovies] = useState([])

    useEffect((categoryId) => {
        getMovies(categoryId)
    }, [])

    const getMovies = async (categoryId) => {
        let url = "http://localhost:3000/movies"
        if (categoryId) {
            url += "/?categoryId=" + categoryId
        }
        const result = await fetch(url)
        const data = await result.json(url)
        setMovies(data)
    }

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
    },[])

    const getCategories = async () => {
        let url = "http://localhost:3000/categories"
        const result = await fetch(url)
        const data = await result.json(url)
        setCategories(data)
    }

    const [selectedCategory, setSelectedCategory] = useState([])

    const categorySort = (category) => {
        getMovies(category.categoryId)
        setSelectedCategory(category)
    }

    return (
        <MoviesContext.Provider value={{ movies, categories, categorySort, selectedCategory}}>
            {props.children}
        </MoviesContext.Provider>
    )
}

export default MoviesContextProvider