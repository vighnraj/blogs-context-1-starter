import { createContext, useState } from "react";    
import {baseUrl} from "../baseUrl"  

export const AppContext = createContext();

export default function AppContextProvider({children}){

    const [loading, setLoading] = useState(false); 
    const [posts, setPost] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    // data filing pending

    async function fetchBlockPost(page=1){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`
        console.log("printing the final url")
        console.log(url)
        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPost(data.posts);
            setTotalPages(data.totalPages);
        }
        catch(error){
        console.log("error in fetching data");
        setPage(1);
        setPost([])
        setTotalPages(null);
        }
        setLoading(false)
    }

    function handChangePage(page){
        setPage(page);
        fetchBlockPost(page)
    }



    const value = {
          loading,
          setLoading,
          posts,
          setPost,
          page,
          setPage,
          totalPages,
          setTotalPages,   
          fetchBlockPost,
          handChangePage,
    };

    return <AppContext.Provider value={value}>
           {children}
    </AppContext.Provider>
} 