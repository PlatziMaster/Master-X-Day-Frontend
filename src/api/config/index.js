require('dotenv').config()

const config = {
    DEV: process.env.NODE_ENV !== 'production',
    PORT: process.env.PORT || 3000,
    CORS: process.env.CORS,
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
    API_TOKEN: process.env.API_TOKEN,
}

export default config
