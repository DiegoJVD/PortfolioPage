module.exports = {

    script: "serve",
    name: "Portfolio", 
    env: {
      PM2_SERVE_PATH: './public',
      
      PM2_SERVE_PORT: 5001
    }
  }