# Boilerplate React / Redux

Complete boilerplate to create web application using React and Redux. 
Including grunt and webpack for chain build, sass for styling.
Basic routing with React-router

## Installation

### Tools
Install node.js / npm
Install ruby
Install git

npm install grunt -g
npm install grunt-cli -g
npm install node-gyp -g

gem install scss_lint

### Init project
- run `npm install`
- run `npm start` for development
- run `npm run build` for building

### Proxy/Configurations in case of issues
update npm if an old version is already installed:
npm install npm@latest -g

Add proxy configuration if needed:
HTTP_PROXY='http://myproxy:8080'
HTTPS_PROXY='http://myproxy:8080'

git config --global url.https://.insteadOf git://
git config --global http.proxy http://myproxy:8080
git config --global https.proxy http://myproxy:8080

npm config set proxy http://myproxy:8080
npm config set https-proxy http://myproxy:8080