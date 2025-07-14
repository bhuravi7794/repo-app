Clone the Projet 
Install dependencies
npm install
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

Added Filter.js 
added Language, starts and date filter 

Added useDebonce.js
Added custome hook to defferd the enterd search value 

Added api.js
To fetch repo data https://api.github.com/search/repositories
