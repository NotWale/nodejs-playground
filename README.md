The Register functionality is a little bit unresponsive atm but it should work.

Playground to try out NodeJS stuff
Currently implemented: Login,Register,Creating posts,Deleting posts,Displaying posts, Monero RPC -> Show connected Wallet address

The old version (without rpc calls) of this is available live (if the heroku server is running) here: [On Netlify](https://amazing-scone-57106f.netlify.app/)
The updated code with monero rpc calls can be compiled as stated below:

0. To understand how monero rpc works check out this site: [Monero Wallet RPC Reference](https://monerodocs.org/interacting/monero-wallet-rpc-reference/)

1. Edit the .env file as shown in .env.example for your mongodb server.

2. Run 'yarn' first to install all the necessarry dependencies. Once in the /server directory and once again in the /client one.

3. In the server directory, you can run:

### `yarn start`

Starts the server on [http://localhost:5000](http://localhost:5000)
Don't forget to create a .env file with your credentials for a MongoDB server.
Refer to .env.example for an example.

4. In the client directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
