# Modular Compliance Dashboard

## Development Environment

## Required

Node.js (version 14.x or higher) - Preferably Node 18
npm hoặc Yarn

React 18
Vite 5

**Project Setup**

git clone https://github.com/username/modular-compliance-dashboard.git
cd modular-compliance-dashboard
'npm install' or 'yarn install'

**Running the Application**
Run: npm run dev
Build: npm run build
Test: npm test

**AWS Amplify Configuration**

- npm install -g @aws-amplify/cli
- amplify configure
  (Install AWS Amplify CLI globally)
- amplify init
- amplify add auth
- amplify push
- amplify add hosting
- amplify publish

**Source Code Documentation**

🚀 Components: UI components are organized in the src/components directory.

- Component.tsx: TypeScript and HTML code file
- style.scss: Independent styles for each component
- {name}Slice.ts: Setup of toolkit slice for each component
  🛠️ Redux: Redux configuration and state slices are in the src/redux directory.

- globalSlice: Global slice action setup for global state
- rootReducer: Combines reducers for each component
- store: Configures the Redux store

📦 Elements: Configuration of shared elements (input, table, loading...)

🚀 Assets: Stores SCSS files, images, sounds...

🛠️ Types: Configuration of interfaces

📦 vite-env: Stores base API URLs, project keys

🚀 package.json: Lists installed packages

🛠️ tsconfig.json, vite.config.ts, jest.config.ts: Project configuration files

## Redux Configuration

src/redux/store.ts: Redux store configuration.
src/redux/globalSlice.ts: Manages global state such as loading.

## AWS Amplify Configuration

src/aws-exports.js: Configures AWS Amplify for your project, including authentication information and AWS services.
