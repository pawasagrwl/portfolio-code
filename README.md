# My Portfolio

This portfolio website is built with React and Tailwind CSS. It's based on the [React & TailwindCSS Portfolio template][template] by [Nangialai Stoman][stoman].

## Customizations

- Enabled showcasing different projects in a single project view.
- Integrated with EmailJS, with form validation, for the 'Hire Me' and 'Contact Form' features.
- Changed Footer Copyright to Last Updated. Current Date is automatically added when a build is deployed.
- About Text is now shown in a Terminal Box (inspired from [Andy Luo's React Portfolio][andyluo])
- Home button replaced with a home icon for better UX.

## Live Demo

You can view the live demo of the portfolio here: [Live Demo][demo]

## Deployment on GitHub Pages

Follow these steps to deploy your portfolio on GitHub Pages:

1. Create a new repository on GitHub to host your portfolio.
2. Replace the URL in the "_add-remote_" script in `package.json` with the URL of your new GitHub repository.
3. In the `public/README.md` file, replace the `portfolio` value with the link to your deployed portfolio on GitHub Pages.
4. Save the changes.
5. Run `npm run deploy` in your terminal. This will build your portfolio and push it to your GitHub pages repository.
   > For this to work, the build changes are all force pushed

## EmailJS Setup

To setup EmailJS:

1. Rename the `.env_example` file to `.env`.
2. Replace the placeholder values in the `.env` file with your actual EmailJS credentials.

## License

This project is licensed under the [MIT License][license].

[template]: https://github.com/realstoman/react-tailwindcss-portfolio
[stoman]: https://github.com/realstoman
[andyluo]: https://github.com/Andy8647/andy-luo-portfolio
[demo]: https://pawasagrwl.github.io
[license]: https://github.com/pawasagrwl/portfolio-code/blob/master/LICENSE
