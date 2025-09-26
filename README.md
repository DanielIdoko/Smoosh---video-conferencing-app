# Smoosh - Video Conferencing app

## Features
1. Clerk Autentication
2. Schedule meetings
3. Join real meeting rooms
4. Record meetings

## How to get started
Before getting started make sure you: 
1. Have nodejs installed on your computer
2. Have an account with Clerk.
   Visit [ https://www.clerk.com](https://dashboard.clerk.com/sign-in)

3. Clone this repo or download as zip file
4. Provide the environment vaiables needed by clerk and stream
   ```js
   //Clerk
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=//Your clerk key here
   CLERK_SECRET_KEY=//Your clerk secret key here
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=//e.g '/sign-in'
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=//e.g '/sign-up'

   //Stream
   NEXT_PUBLIC_STREAM_API_KEY=//your strem public api key here
   STREAM_SECRET_KEY=//Your stream secret key here
   ````
5. cd into the folder in your terminal or command line or open up in your IDE  
6. Run:

   ```js
   
   npm i - install neccessary packages

   npm run dev - Start the development server
   ```

