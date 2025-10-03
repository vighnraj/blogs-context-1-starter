import { createContext, useState } from "react";    
import {baseUrl} from "../baseUrl"  
import { useNavigate } from "react-router-dom";


export const AppContext = createContext();

export default function AppContextProvider({children}){

    const [loading, setLoading] = useState(false); 
    const [posts, setPost] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate();
    

    // data filing pending

    async function fetchBlockPost(page=1, tag=null, category, ){
        setLoading(true);
        console.log("Url is")
       
        let url = `${baseUrl}?page=${page}`
        if(tag){
            url += `&tag=${tag}`
        }
        if(category){
            url += `&category=${category}`
        }
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
        navigate({search: `?page=${page}`});
        setPage(page);
       
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