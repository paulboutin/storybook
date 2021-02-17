## Technologies

- **Storybook**: Used to showcase individual components
- **Storybook-DSM**: Used to integrate storybook into InVision DSM
- **React**: Used to create components, which are then rendered to an HTML string
- **Sass**: Used to create all the styles

These are the most noteworthy. For a full list of libraries, check the [package.json](package.json).

## Project structure

- **.storybook**: Storybook configuration files
- **public**: Static files needed for the components
- **src**: Source code files
  - **components**: All the existing components
    - **base**: Base components
    - **layout**: Layout components
    - **pre-render**: Components that will be pre-rendered with data and bundled into a zip file
    - **templates**: Full sample templates
  - **decorators**: Functions that are run every time a story loads on Storybook
  - **js**: Scripts that add interactivity to some components
  - **sass**: All the styles for the components and stories
  - **scripts**: Build utilities and other scripts
  - **stories**: All the Storybook story files
- **test**: Files to test the components
  - **snapshot**: Testing framework to take snapshots of all components
  - **unit**: Testing framework to test interactive components

## Testing

### Unit tests

Unit tests make sure that certain components behave as intended when a user interacts with them by testing events such as **click**, **focus** or **keyDown**.

### Snapshot tests

Snapshot tests make sure that any changes to components or styles don't have unintended consequences somewhere else.

They do this by taking snapshots of each component on multiple screen sizes and configurations, and then comparing them to the stored snapshots. If there are any pixel differences between them, the tests will fail.

After making any changes, the stored snapshots should be updated. If all the updated snapshots are correct, they should be committed to the repository.

## Build process

The build process is divided into two steps:

- First, the Storybook will be compiled into static files so that it can be hosted on a web server.

- Second, all the necessary source files and assets will be bundled into a distributable zip file, which can be downloaded from within the Storybook.

Note that some files are only necessary for the stories, but not for the actual components. As such, they are not included in the zip file.

## Deployment

Pushing any changes with git will trigger a pipeline on Bitbucket, which will run all the unit and snapshot tests to make sure no breaking changes are deployed. This will happen on any git branch.

On the `develop` and `master` branches, if the tests run successfully, a Netlify deployment will be triggered, which will publish the Storybook to a website depending on the branch:

- **develop**: https://develop--botw-component-library.netlify.app
- **master**: https://botw-component-library.netlify.app

These URLs are password protected in order to prevent someone with access to them from looking at the Storybook.

Additionally, on the master branch, the Storybook will be published on InVision DSM.

## Commands

- **npm start**: Start a local instance of the Storybook server
- **npm run dsm:publish**: Publish the Storybook to InVision DSM
- **npm run build**: Compile the Storybook into static files and bundle the source files and assets into a zip file
- **npm run lint**: Fix code style issues
- **docker-compose run test**: Runs the unit and snapshot tests
- **docker-compose run test:update**: Updates the component snapshots

**_Important_**: Do not run the snapshot tests using the `npm` commands directly, see an explanation below:

The snapshots tests must be run inside a docker container since there are differences in the way the components are rendered on various operating systems. These differences are extremely subtle, but enough to make the tests fail. The docker container uses the same operating system as the pipeline to prevent these differences.
