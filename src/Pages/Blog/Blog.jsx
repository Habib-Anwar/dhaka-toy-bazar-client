

const Blog = () => {
    return (
        <div className="mt-8">
            <h2 className="text-xl font-semibold">What is an access token and refresh token? How do they work and where should we store them on the client-side.</h2>
            <p>

                An access token is a credential that is used to authorize and authenticate a client (such as a user or an application) when accessing protected resources on a server. It contains information about the client's identity and permissions. Access tokens have a limited lifespan and typically expire after a certain period of time.
                A refresh token is a credential that is used to obtain a new access token when the current access token expires. It is issued alongside the access token and has a longer lifespan. When the access token expires, the client can use the refresh token to request a new access token without requiring the user to re-enter their credentials.

                Access tokens and refresh tokens work together in a process known as token-based authentication. Initially, the client authenticates with the server using its credentials (such as a username and password). Upon successful authentication, the server generates an access token and a refresh token and returns them to the client.
                On the client-side, access tokens and refresh tokens should be stored securely to prevent unauthorized access. The recommended approach is to store them in a secure storage mechanism such as the browser's localStorage, sessionStorage, or a secure cookie with appropriate security measures (e.g., HttpOnly and Secure flags for cookies). It's crucial to protect these tokens from cross-site scripting (XSS) attacks and other security vulnerabilities to ensure the confidentiality and integrity of the tokens.
            </p>
            <h2 className="text-xl font-semibold">
                Compare SQL and NoSQL databases?
            </h2>
            <p>
                SQL (Structured Query Language) and NoSQL (Not Only SQL) databases differ in several key aspects:
                SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
            </p>
            <h2 className="text-xl font-semibold">What is Express js and Nest js?</h2>
            <p>
                Express.js is a fast, minimalist, and flexible web application framework for Node.js. It provides a robust set of features and tools for building web applications and APIs. Express.js simplifies the process of creating server-side web applications by providing a straightforward and unopinionated approach to routing, middleware, and handling HTTP requests and responses.
                Key features and concepts of Express.js include:
                <li>Routing</li>
                <li>Middleware</li>
                <li>Request and Response Handling</li>
                <li>Templating Engines</li>
                <li>Error Handling</li>
                <li>Middleware Ecosystem</li>
            </p>
            <p>

                NestJS is a progressive TypeScript-based framework for building scalable and efficient server-side applications. It is built on top of Express.js and provides an additional layer of structure and organization for developing robust, maintainable, and scalable Node.js applications.

                Key features and concepts of NestJS include:
                <li>Modular Architecture</li>
                <li>Dependency Injection</li>
                <li>Decorators and Metadata</li>
                <li>Controllers and Routing</li>
                <li>Providers and Services</li>
                <li>Middleware</li>
                <li>Testing</li>
            </p>
            <h2 className="text-xl font-semibold">
                What is MongoDB aggregate and how does it work?
            </h2>
            <p className="mb-8">

                In MongoDB, the aggregate function is a powerful feature that allows to perform complex data processing and analysis tasks on data. It provides a way to perform operations like grouping, filtering, sorting, joining, and transforming data within the database.

                The aggregate function takes an array of stages as its input. Each stage represents a specific operation or transformation to be applied to the data. The stages are executed in the order they appear in the array, and the output of one stage becomes the input for the next stage.
            </p>

        </div>
    );
};

export default Blog;