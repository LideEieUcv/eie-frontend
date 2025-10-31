<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EIE Frontend README</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
            line-height: 1.6;
            color: #333;
            background-color: #f6f8fa;
            margin: 0;
            padding: 2rem;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 6px;
            padding: 2rem;
        }
        h1, h2 {
            border-bottom: 1px solid #eee;
            padding-bottom: 0.5em;
            margin-top: 1.5em;
        }
        h1 { font-size: 2em; }
        h2 { font-size: 1.5em; }
        code {
            font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
            background-color: #f3f3f3;
            padding: 0.2em 0.4em;
            border-radius: 3px;
        }
        pre {
            background-color: #24292e;
            color: #f6f8fa;
            padding: 1em;
            border-radius: 6px;
            overflow-x: auto;
        }
        pre code {
            background-color: transparent;
            padding: 0;
        }
        a {
            color: #0366d6;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        ul, ol {
            padding-left: 2em;
        }
        li {
            margin-bottom: 0.5em;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>EIE Frontend</h1>
        <p>This project is the frontend for the website of the School of Electrical Engineering at UCV, built with a modern, dynamic, and responsive technology stack.</p>
        <h2>Technologies Used</h2>
        <ul>
            <li><a href="https://nextjs.org/">Next.js</a> (App Router)</li>
            <li><a href="https://react.dev/">React</a></li>
            <li><a href="https://www.typescriptlang.org/">TypeScript</a></li>
            <li><a href="https://tailwindcss.com">Tailwind CSS</a> for styling.</li>
            <li><a href="https://www.framer.com/motion/">Framer Motion</a> for animations.</li>
            <li><a href="https://axios-http.com/">Axios</a> for API communication.</li>
            <li><a href="https://eslint.org/">ESLint</a> & <a href="https://prettier.io/">Prettier</a> for code quality.</li>
        </ul>
        <h2>Features Implemented</h2>
        <ul>
            <li><strong>Dynamic Content:</strong> All sections (News, Events, People) are powered by a NestJS backend with a SQLite database.</li>
            <li><strong>Detailed Views:</strong> Dynamic pages for individual News and Events.</li>
            <li><strong>Interactive Directory:</strong> The "People" section features real-time searching, sorting, and filtering by category.</li>
            <li><strong>Modern & Responsive Design:</strong> A clean, "MIT-inspired" design that works seamlessly on all devices.</li>
            <li><strong>Smooth Animations:</strong> User interface enhanced with fluid animations using Framer Motion.</li>
        </ul>
        <h2>Getting Started</h2>
        <p>To get a local copy of this project up and running for development and contributions, follow these steps:</p>
        <ol>
            <li>
                <p><strong>Clone the repository:</strong></p>
                <pre><code>git clone https://github.com/LideEieUcv/eie-frontend.git</code></pre>
            </li>
            <li>
                <p><strong>Install dependencies:</strong> Navigate to the project directory and run:</p>
                <pre><code># recommended
yarn
# or
npm install</code></pre>
            </li>
            <li>
                <p><strong>Run the development server:</strong></p>
                <pre><code>yarn dev
# or
npm run dev</code></pre>
            </li>
        </ol>
        <p>Open <a href="http://localhost:3001">http://localhost:3001</a> (or your specified port) in your browser to see the project.</p>
        <p><strong>Note:</strong> This frontend requires the <a href="https://github.com/your-username/eie-backend">corresponding backend server</a> to be running simultaneously to fetch dynamic data.</p>
        <h2>Contributing</h2>
        <p>We welcome contributions to this project! To contribute, please follow these guidelines:</p>
        <ol>
            <li>Create a new branch following the <a href="https://www.excentia.es/que-es-git-flow">Git Flow</a> guidelines.</li>
            <li>Adhere to the <a href="https://www.conventionalcommits.org/en/v1.0.0/">Conventional Commits</a> standard for your commit messages.</li>
            <li>Ensure the project builds successfully and the <code>next lint</code> command is clean.</li>
            <li>Submit a Pull Request to the <code>develop</code> branch with your changes.</li>
        </ol>
        <h2>Pull Request Guidelines</h2>
        <p>For a pull request to be accepted, it must meet the following conditions:</p>
        <ul>
            <li>The project must build without errors (<code>npm run build</code>).</li>
            <li>The project must pass all linter checks (<code>npm run lint</code>).</li>
            <li>Changes must be made in a separate feature branch.</li>
        </ul>
        <h2>License</h2>
        <p>This project is licensed under the MIT License. See the <code>LICENSE</code> file for details.</p>
    </div>
</body>
</html>