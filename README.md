<div align="center">
  <h1>Quick Links</h1>
  <p>An easy way to access your quick links from anywhere in the world</p>
  <small>Powered by <a href="https://vitepress.dev">VitePress</a></small>
</div>

## Intention

I created this project to have a convenient and straightforward page for organizing my school projects and files.

## Usage

To edit the cards and links, you can modify the `index.md` file. Inside the file's frontmatter, you will find a JSON array that represents the cards. Each card has properties such as subject, details, date, and color. You can duplicate or modify any of these cards to suit your needs.

### Links

To set up the links, follow these steps:

1. Rename the `.env.example` file to `.env`.
2. Inside the `.env` file, locate the `VITE_PASSWORD_KEY` variable. This variable represents the password key. Change the value to a secure password key of your choice.
3. Below the `VITE_PASSWORD_KEY` variable, you will find multuple `VITE_LINKx` variables, where `x` is a number. These variables correspond to the secret links for your cards, in the same order as in the `index.md` file.

Make sure to update the values of the `VITE_LINKx` variables with the desired secret links for your cards.

### Other Options

You can also customize the project's title, description, and copyright by modifing the `config.mts` file isside the `.vitepress` directory:

#### Copyright
  
```javascript
themeConfig: {
  copyright: true,
  author: {
    name: "Your Name",
    link: "https://example.org/",
  },
  }
```

## Development

The Quick Links project is built using VitePress, a powerful Static Site Generator. With VitePress, you can easily build and run the project locally.

#### Install Dependencies

> [!NOTE]
> Make sure to have [PNPM](https://pnpm.io) and [Node.js](https://nodejs.org) installed on your machine.

To get started, navigate to the project directory in your terminal and run the following command to install the project dependencies:

```bash
pnpm install
```

#### Run Development Server

To run the development server locally and see live changes, use the following command:

```bash
pnpm dev
```

#### Run Production Build

To build your project for production, use the following command:

```bash
pnpm build
```

This command will generate optimized and minified files that are ready to be deployed to a production environment.
