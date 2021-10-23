# Nodepad Application

This project is an template that contain typescript and antd

## Notepad Section

User can add New Notepad but each notepad should have at list 1 note.

After New Notepad is created, for updating the notepad and the notes you should update notepad to save the changes

## Stats Section

In this section, the list of gist items will show in the chart. Public gist API filters data base on update_at so I add a filter component to show the result of the data, base on a specific date.

\*NOTICE: Note that the information does not return at specified times, and this is due to the type of API filter, which is sine updated_at, not the created_at date.

### Filters

`Date` Date
`Steps` Count of step to show in chart
`Page Size` Size of item per page
`Terms Type` type of steps like second, minute, ... (default second)
`Terms Lenght` the lenght of each step base on terms type (default 5)

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Add `.env.development` file to run the project \
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
Add `.env.production` file to build the project \

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
