import React, { useState, useEffect } from 'react'
import VideoList from '../organisms/VideoList'
import { Space, Button, Input } from 'antd';
import axios from "axios";
import { BASE_URL } from "../../constants";


const { Search } = Input;


const Home = () => {

  const [videos, setVideos] = useState()
  const [totalDocuments, setTotalDocuments] = useState(0)
  const [query, setQuery] = useState("")

  useEffect(() => {
    fetchVideo()
  }, [])


  const handleClick = (i) => {
    fetchVideo(i)
  }


  const fetchVideo = async (page) => {
    try {
      const res = await axios.get(`${BASE_URL}/videos`, {
        params: {
          page
        }
      })
      setVideos(res.data.data)
      setTotalDocuments(res.data.totalDocuments)
    } catch (error) {
      console.log(error)
    }
  }

  const filterVideos = async (q) => {
    try {

      if (query === "") {
        fetchVideo()
        return
      }
      const res = await axios.get(`${BASE_URL}/search`, {
        params: {
          searchQuery: q
        }
      })

      // console.log(res.data)
      setVideos(res.data.data)
      setTotalDocuments(res.data.totalDocuments)

      console.log("Total Docs : ", totalDocuments)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <Search
        placeholder="input search text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSearch={() => filterVideos(query)}
        style={{
          width: 400,
          marginBottom: "2rem"
        }}
      />
      <VideoList videos={videos} />

      {
        totalDocuments !== undefined &&
        <Space wrap style={{ margin: "2px" }}>
          {
            [...Array(Math.ceil(totalDocuments / 10 === 0 ? totalDocuments : totalDocuments / 10))].map((e, i) => (<Button key={i} type="primary" shape="circle" onClick={() => handleClick(i)} >{i}</Button>))
          }
        </Space>

      }

    </div>
  )
}

export default Home