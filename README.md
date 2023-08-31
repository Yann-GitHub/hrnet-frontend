# HRnet - Human Resources Management System

This repository contains the source code for the HRnet App, an internal application to manage the human resources of a company.

## Prerequisites

-   [NodeJS](https://nodejs.org/en/)
-   [Yarn](https://yarnpkg.com/) or [Npm]()
-   IDE (VSCode, IntelliJ, ...)

## Getting Started

**Installation**

-   Clone this repository using the following command:

```bash
git@github.com:Yann-GitHub/hrnet-frontend.git
```

-   Navigate to the project directory:

```bash
cd hrnet-frontend
```

-   Install the dependencies:

```bash
npm install
#or
yarn install
```

**Running the app**

-   Runs the app in the development mode by running the command:

```bash
npm run dev
#or
yarn dev
```

Open [http://localhost:5174](http://localhost:5174) to view it in your browser.

### Dependencies

In addition to the core libraries like React and others, this project relies on the following external dependencies:

```bash
    "@fontsource/courgette": "^5.0.6",
    "@fortawesome/fontawesome-svg-core": "^6.4.0",
    "@fortawesome/free-regular-svg-icons": "^6.4.0",
    "@fortawesome/free-solid-svg-icons": "^6.4.0",
    "@fortawesome/react-fontawesome": "^0.2.0",
    "@hookform/resolvers": "^3.1.1",
    "@radix-ui/react-label": "^2.0.2",
    "@radix-ui/react-popover": "^1.0.6",
    "@radix-ui/react-select": "^1.2.2",
    "@radix-ui/react-slot": "^1.0.2",
    "@tanstack/react-table": "^8.9.3",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "date-fns": "^2.30.0",
    "hrnet-react-modal-101": "^1.0.4",
    "lucide-react": "^0.263.1",
    "react": "^18.2.0",
    "react-day-picker": "^8.8.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.45.2",
    "react-router-dom": "^6.14.1",
    "styled-components": "^6.0.7",
    "tailwind-merge": "^1.14.0",
    "tailwindcss-animate": "^1.0.6",
    "zod": "^3.21.4"
```

Please ensure that you have these dependencies installed and up-to-date before running the app.

**Custom Package - hrnet-react-modal-101**

This project also relies on a custom package that is published on NPM under the name `hrnet-react-modal-101`.
It is a simple modal component that is used in the app. You can find the source code of this package and its documentation [here](https://www.npmjs.com/package/hrnet-react-modal-101/v/1.0.4).

## Deployment with Render.com

The HRnet App has been successfully deployed using [Render.com](https://render.com/) and is accessible at the following URL: [https://hrnet-app.onrender.com](https://hrnet-app.onrender.com).

Render.com provides a seamless and easy-to-use platform for deploying static sites. It automates the build and deployment process, making it simple to showcase your projects.
