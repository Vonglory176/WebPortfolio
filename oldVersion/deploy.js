const { execSync } = require('child_process')
const dotenv = require('dotenv')

// Load environment variables from .env file
dotenv.config()

// Set environment variables for the build process
// process.env.REACT_APP_SERVICE_ID = process.env.REACT_APP_SERVICE_ID
// process.env.REACT_APP_TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
// process.env.REACT_APP_PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY

// Run the build and deploy commands
execSync('npm run build', { stdio: 'inherit' })
execSync('gh-pages -d build', { stdio: 'inherit' })