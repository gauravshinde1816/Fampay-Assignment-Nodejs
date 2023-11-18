# Youtube Video Fetching API using Nodejs

### 🧿 Project Goal

To make an API to fetch latest videos sorted in reverse chronological order of their publishing date-time from YouTube for a given tag/search query in a paginated response.

<!-- Problem Statement -->

### ⚒ Problem Statement

<details>
  <summary>Click to expand</summary>
   
### ✓ Basic Requirements:

✅ Server should call the YouTube API continuously in the background (async) with some interval (say 10 seconds) for fetching the latest videos for a predefined search query and should store the data of videos (specifically these fields - Video title, description, publishing datetime, thumbnails URLs and any other fields you require) in a database with proper indexes.

✅ A GET API that returns the stored video data in a paginated response sorted in descending order of published datetime.

✅ It should be scalable and optimized.

### Bonus Points:

✅ Add support for supplying multiple API keys so that if quota is exhausted on one, it automatically uses the next available key.

✅ Make a dashboard to view the stored videos with filters ( in-built DRF filters provided ) and sorting options (optional)

✅ Optimise search api, so that it's able to search videos containing partial match for the search query in either video title or description. - Ex 1: A video with title _`How to make tea?`_ should match for the search query `tea how`

### Instructions:

- You are free to choose any search query, for example: official, cricket, football etc. (choose something that has high frequency of video uploads)
- Try and keep your commit messages clean, and leave comments explaining what you are doing wherever it makes sense.
- Also try and use meaningful variable/function names, and maintain indentation and code style.
- Submission should have a README file containing instructions to run the server and test the API.
- Submission should be done on GitHub Externship Portal.

### Reference:

- [YouTube data v3 API](https://developers.google.com/youtube/v3/getting-started)
- [Search API reference](https://developers.google.com/youtube/v3/docs/search/list)
- To fetch the latest videos you need to specify these: type=video, order=date, publishedAfter=<SOME_DATE_TIME>
Without publishedAfter, it will give you cached results which will be too old
</details>


### 💡 Local Setup Guide

1. Clone the project

` git clone https://github.com/gauravshinde1816/Fampay-Assignment-Nodejs.git`

2. Set up Env variable

   - Craete default.json inside `backend/config/folder`
   - Copy default-sample.json to default.json
     - `MONGO_URI : MongoDB Atlas or Local URI to connect to the database.`
     - `API_KEYS : Array of API keys`
   - Sample format for default.json in mentioned in the default-sample.json and all fields are required.

3. Start backend
   - ` cd backend/`
   - Install Dependancies
   - ` npm install`
   - Start server
   - `npm start`
4. Start Frontend
   - ` cd client/`
   - Install Dependancies
   - ` npm install`
   - Start server
   - `npm start`
5. Navigate to `http://localhost:3000` to see the app live




### 💡 Docker Setup Guide

1. Run `docker-compose up -d`
2. Navigate to `http://localhost:3000` to see the app live
