import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import ButtonList from "./ButtonList";
import { YOUTUBE_VIDEO_URL } from "../constants";
import { Link, useSearchParams } from "react-router-dom";
const MainContainer = () => {
        const [videoList,setVideoList]=useState([])
        const [searchParams,setSearchParams]=useSearchParams()
    useEffect(()=>{
        getVideos()
    },[])
    const getVideos=async()=>{
       const data= await fetch(YOUTUBE_VIDEO_URL)
        const jsonData=await data.json()
        setVideoList(jsonData.items)
        console.log(videoList)
    }

  return (
    <div className="flex-col">
    <ButtonList/>
    <div className="p-2 mt-1 flex flex-wrap gap-4">
        {
            videoList.map((item,ind)=>{
              if(ind===0)return <Link to={"/watch?v="+item.id} key={item.id} onClick={()=>setSearchParams(item.id)}><AdCard><VideoCard searchParams={searchParams} videoId={item.id}  cardImage={item.snippet.thumbnails.medium.url} videoTitle={item.snippet.title} channelName={item.snippet.channelTitle} views={item.statistics.viewCount}/></AdCard> </Link>
              return <Link to={"/watch?v="+item.id} key={item.id} onClick={()=>setSearchParams(item.id)}> <VideoCard searchParams={searchParams} videoId={item.id}  cardImage={item.snippet.thumbnails.medium.url} videoTitle={item.snippet.title} channelName={item.snippet.channelTitle} views={item.statistics.viewCount}/></Link>
            })
        }
      
    </div>
    </div>
  );
};

const AdCard=({children})=>{
  return(
    <div className="border border-black p-1">
      {children}
      <p className="font-bold p-2">Ad</p>
    </div>
  )
}

export default MainContainer;
