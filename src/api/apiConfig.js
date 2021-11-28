const apiConfig = {
   baseUrl: 'https://api.themoviedb.org/3/',
    //baseUrl: 'https://api.themoviedb.org/3/movie/550?api_key=c1c88c420077316752d24518d55a7623',
    apiKey: 'c1c88c420077316752d24518d55a7623',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;