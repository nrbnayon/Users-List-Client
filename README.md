# User List and Details Webpage

[Live](https://user-list-khaki.vercel.app/)

This project is a simple Next.js application that displays a list of users and the details of the selected user. The design reference is taken from a Figma design, and data is fetched from a provided API.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Components](#components)
- [API Handling](#api-handling)
- [Error Handling](#error-handling)
- [License](#license)

## Features

- Display a list of users with their profile pictures and names.
- Show user details on the right-hand side when a user is selected.
- Loader/spinner during data fetching.
- Proper handling of API errors and empty responses.

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Material UI](https://mui.com/)
- [Axios](https://axios-http.com/)

## Getting Started

### Prerequisites

- Node.js (>=14.0.0)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-project.git
   cd your-project
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API Handling

API calls are made using `axios`, and data fetching is handled in the `useEffect` hook in `index.js`.

## Error Handling

- Loader/spinner is displayed during data fetching.
- Proper error message is shown if the API call fails.
- "No data to show" message is displayed if the response is empty.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
