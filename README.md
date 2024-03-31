<div align="center">
  <h1>Quick Links</h1>
  <p>An easy way to access your quick links from anywhere in the world</p>
  <small>Powered by [VitePress](https://vitepress.dev/)</small>
</div>

## Intention

I created this project when I needed a quick and simple page to store my projects and files for school.

## Usage

To edit the cards and links, you can modify the `index.md` file. Inside the file's frontmatter, you will find a JSON array that represents the cards. Each card has properties such as subject, details, date, and color. You can duplicate or modify any of these cards to suit your needs.

### Links

To set up the links, you need to rename the `.env.example` file to `.env`. Inside the `.env` file, you will find the `VITE_PASSWORD_KEY` variable, which is the password key. Below that, you will see `VITE_LINK0` and other similar variables. These variables correspond to the secret links for your cards, in the same order as in the `index.md` file.

## Development

This project uses VitePress, which makes it easy to host and develop.

### Build and Run

To run the Quick Links website locally, make sure you have [PNPM](https://pnpm.io/) installed.

## Development

The Quick Links project is built using VitePress, a powerful tool for hosting and developing websites. With VitePress, you can easily build and run the project locally.

### Build and Run

To run the Quick Links website locally, you will need to have [PNPM](https://pnpm.io/) installed on your machine.

#### Install Dependencies

To get started, navigate to the project directory in your terminal and run the following command to install the project dependencies:

```bash
pnpm install
```

#### Run Development Server

To run the development server locally to see live changes run the following command:

```bash
pnpm run dev
```

#### Run Production Build

When you have your project ready, you can build it using the following command:

```bash
pnpm run build
```