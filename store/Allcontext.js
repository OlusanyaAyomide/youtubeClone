import React,{useState,useContext, createContext} from "react";

const Allcontext = createContext({
    searchParam:"",
    setSearchParam:function(){},
    videos:{},
    changesetVideos:function(){},
    hasrendered:false,
    sethasrendered:function(){}

})

export function AllcontextProvider(props){
    const [searchParam,setSearchParam] = useState("New")
    const [videos,setVideos] = useState({})
    const [hasrendered,sethasrendered] = useState(false)

    const changeSearchParam=(param)=>{setSearchParam(param)}
    const changesetVideos=(videoList)=>{setVideos(videoList)}
    
    const context = {
        searchParam,videos,setSearchParam,changesetVideos,sethasrendered,hasrendered
    }
    return(
        <Allcontext.Provider value={context}>
            {props.children}
        </Allcontext.Provider>
    )
}

export default Allcontext