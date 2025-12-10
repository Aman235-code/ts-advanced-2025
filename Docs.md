npm init -y

npm i -D typescript

tsconfig.json

{
"compilerOptions": {
"target": "es2022",
"module": "es2022",
"moduleResolution": "bundler",
"strict": true,
"noUncheckedIndexedAccess": true,
"exactOptionalPropertyTypes": true,
"useUnknownInCatchVariables": true,
"skipLibCheck": true,
"rootDir": "src",
"outDir": "dist"
},
"include": ["src"]
}


"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsc -p tsconfig.json",
    "dev": "tsc -w -p tsconfig.json"
  },

  create src folder

npm run dev -> dist folder is created

then node dist/(filename.js)