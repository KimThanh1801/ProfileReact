# React Portfolio

This is a single-page portfolio website built with React, Vite, and Tailwind CSS. It is designed to be easily customizable and deployable, and it serves as a great starting point for developers who want to create a professional online presence.

## Features

-   **Single-Page Layout**: A modern, single-page layout that allows users to scroll through the different sections of the portfolio.
-   **Responsive Design**: The website is fully responsive and looks great on all devices, from mobile phones to desktop computers.
-   **Smooth Scrolling**: The website uses smooth scrolling to create a more elegant and user-friendly experience.
-   **Tailwind CSS for Styling**: The website is styled with Tailwind CSS, a utility-first CSS framework that allows for rapid UI development.
-   **Vite for Fast Development and Bundling**: The website is built with Vite, a next-generation front-end tooling that provides a faster and more efficient development experience.

## Technologies Used

-   [React](https://reactjs.org/) - A JavaScript library for building user interfaces
-   [Vite](https://vitejs.dev/) - A build tool that provides a faster and leaner development experience for modern web projects
-   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs
-   [React Router](https://reactrouter.com/) - A declarative routing library for React
-   [Lucide React](https://lucide.dev/) - A library of simply beautiful open-source icons
-   [clsx](https://github.com/lukeed/clsx) - A tiny utility for constructing `className` strings conditionally
-   [tailwind-merge](https://github.com/dcastil/tailwind-merge) - A utility to merge Tailwind CSS classes in JS without style conflicts

## Project Structure

The project is organized into the following directories:

-   `public`: Contains the public assets of the website, such as `vite.svg`.
-   `src`: Contains the source code of the application.
    -   `assets`: Contains the images and other assets used in the application.
    -   `components`: Contains the reusable components of the application.
        -   `Header.tsx`: The header of the website, containing the navigation links.
        -   `Footer.tsx`: The footer of the website.
        -   `ProjectCard.tsx`: A card component to display project information.
    -   `pages`: Contains the different sections of the single-page application.
        -   `Hero.tsx`: The hero section of the website.
        -   `About.tsx`: The about section of the website.
        -   `Projects.tsx`: The projects section of the website.
        -   `Skills.tsx`: The skills section of the website.
        -   `Contact.tsx`: The contact section of the website.
-   `dist`: Contains the built version of the website.

## Getting Started

To get started with the project, follow these steps:

1.  Clone the repository:

    ```bash
    git clone https://github.com/your-username/react-portfolio.git
    ```

2.  Install the dependencies:

    ```bash
    npm install
    ```

3.  Start the development server:

    ```bash
    npm run dev
    ```

4.  Open your browser and navigate to `http://localhost:5173/` to see the website.

## Building for Production

To build the website for production, run the following command:

```bash
npm run build
```

This will create a `dist` directory with the built version of the website.

## Linting

To lint the code, run the following command:

```bash
npm run lint
```

## Customization

To customize the portfolio with your own information, you will need to modify the following files:

-   **`src/pages/Hero.tsx`**: Update the hero section with your name and a brief introduction.
-   **`src/pages/About.tsx`**: Update the about section with your background, experience, and skills.
-   **`src/pages/Projects.tsx`**: Update the projects section with your own projects. You can add new projects by creating new instances of the `ProjectCard` component.
-   **`src/pages/Skills.tsx`**: Update the skills section with your own skills.
-   **`src/pages/Contact.tsx`**: Update the contact section with your own contact information.
-   **`src/assets`**: Replace the images in this directory with your own images.
-   **`public/vite.svg`**: Replace the favicon with your own.

After making these changes, you can build the website and deploy it to your preferred hosting platform.

### `ProjectCard` Props

The `ProjectCard` component accepts the following props:

| Prop          | Type     | Description                                               |
| ------------- | -------- | --------------------------------------------------------- |
| `title`       | `string` | The title of the project.                                 |
| `description` | `string` | A brief description of the project.                       |
| `image`       | `string` | The URL of the project's image.                           |
| `tags`        | `string[]` | An array of tags that describe the project's technologies. |
| `liveUrl`     | `string` | The URL of the live version of the project.               |
| `githubUrl`   | `string` | The URL of the project's GitHub repository.               |

## Deployment

You can deploy this project to any static site hosting service such as Netlify, Vercel, or GitHub Pages. Here are the instructions for deploying to Netlify and Vercel:

### Netlify

1.  Push your code to a GitHub repository.
2.  Go to [Netlify](https://www.netlify.com/) and sign up or log in.
3.  Click on the "New site from Git" button.
4.  Choose your Git provider and select your repository.
5.  Configure the build settings:
    -   **Build command**: `npm run build`
    -   **Publish directory**: `dist`
6.  Click on the "Deploy site" button.

### Vercel

1.  Push your code to a GitHub repository.
2.  Go to [Vercel](https://vercel.com/) and sign up or log in.
3.  Click on the "New Project" button.
4.  Import your Git repository.
5.  Vercel will automatically detect that you are using Vite and will configure the build settings for you.
6.  Click on the "Deploy" button.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.