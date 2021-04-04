# Employee Salary Analytics

This is a web-app that calculates the average salary of employees by location. The sample data in the application can be found from `EmployeeData.md`.

## Demo

You can find a live preview of the web-app below

[Demo](https://employee-analytics.netlify.app/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### To Install

1. Clone the git repository

```bash
git clone https://github.com/dandyling/employee-analytics
```

2. Change to the `/frontend` directory and install the dependencies

```bash
cd employee-analytics/frontend
npm install
# or
yarn install
```

3. To start to develop:

```bash
npm run start
# or
yarn run start
```

You will find the development server running on `localhost:3000`

## Running the tests

The application is broken down into the presentation layer and the business logic layer. The presentation layer is tested using react-testing-library and jest, and the business layer is tested using jest.

To run the test:

```bash
npm run test
# or
yarn run test
```

### Viewing test coverage

Test coverage is setup for this project. To view the test coverage, run the following

```bash
npm run test:cov
# or
yarn run test:cov
```

You will be able to see the coverage in `/coverage/index.html`

## Deployment

To build the output bundle, run the following command

```bash
npm run build
# or
yarn run build
```

You will find the output bundle in `/build` directory. You can deploy it just by dropping the whole folder in a provider such as netlify. You can find an example deployment [here](https://employee-analytics.netlify.app/)

## Built With

- [React Chartist](https://www.npmjs.com/package/react-chartist) - The React wrapper for the awesome [Chartist.js](http://gionkunz.github.io/chartist-js/) which allows the drawing of responsive charts with animations
- [Tailwindcss](https://tailwindcss.com/) - for the CSS framework to build the presentation layer
- [Recoil](https://recoiljs.org/) - for the state management framework
