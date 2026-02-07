# TodoMVC - Angular

A modern implementation of the classic [TodoMVC](https://todomvc.com/) application built with Angular 21.

## Features

- ✅ Add, edit, and delete todos
- ✅ Mark todos as complete/incomplete
- ✅ Filter todos (All, Active, Completed)
- ✅ Clear all completed todos
- ✅ Persistent storage
- ✅ Responsive design
- 🐳 Docker support with Nginx

## Tech Stack

- **Framework:** Angular 21.1.0
- **Language:** TypeScript 5.9.2
- **Testing:** Vitest 4.0.8
- **Build Tool:** Angular CLI
- **Container:** Docker + Nginx
- **Package Manager:** npm 10.9.4

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (v10 or higher)
- [Angular CLI](https://angular.dev/tools/cli) (optional but recommended)
- [Docker](https://www.docker.com/) (optional, for containerized deployment)

## Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd todomvc-fixed
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Development Server

Start the development server:

```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload when you make changes to the source files.

## Building for Production

### Standard Build

Build the project for production:

```bash
npm run build
# or
ng build
```

The build artifacts will be stored in the `dist/` directory, optimized for performance.

### Watch Mode

Build with automatic rebuilding on file changes:

```bash
npm run watch
```

## Docker Deployment

This project includes Docker support for containerized deployment with Nginx.

### Build Docker Image

```bash
docker build -t todomvc-fixed:v1.0 .
```

### Run Docker Container

```bash
docker run -d -p 3000:80 --name todomvc-fixed todomvc-fixed:v1.0
```

The application will be available at `http://localhost:3000/`

### Docker Commands Reference

```bash
# Stop container
docker stop todomvc-fixed

# Start container
docker start todomvc-fixed

# Remove container
docker rm todomvc-fixed

# View logs
docker logs todomvc-fixed

# Remove image
docker rmi todomvc-fixed:v1.0
```

## Testing

### Unit Tests

Run unit tests with Vitest:

```bash
npm test
# or
ng test
```

### End-to-End Tests

Run e2e tests:

```bash
ng e2e
```

> **Note:** Angular CLI does not include an e2e testing framework by default. You'll need to add one (like Cypress or Playwright) based on your needs.

## Code Scaffolding

Generate new Angular components, services, and more:

```bash
# Generate a component
ng generate component component-name

# Generate a service
ng generate service service-name

# Generate a directive
ng generate directive directive-name

# See all available options
ng generate --help
```

## Project Structure

```
todomvc-fixed/
├── src/
│   ├── app/              # Application components and modules
│   ├── assets/           # Static assets (images, fonts, etc.)
│   ├── environments/     # Environment configurations
│   └── index.html        # Main HTML file
├── .dockerignore         # Docker ignore patterns
├── Dockerfile            # Docker configuration
├── nginx.conf            # Nginx server configuration
├── package.json          # Project dependencies and scripts
└── angular.json          # Angular CLI configuration
```

## Code Formatting

This project uses Prettier for code formatting. Configuration:

- Print width: 100 characters
- Single quotes: enabled
- Angular HTML parser for templates

## Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm run watch` | Build with watch mode |
| `npm test` | Run unit tests |

## Browser Support

This application supports all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Resources

- [Angular Documentation](https://angular.dev/)
- [Angular CLI Overview](https://angular.dev/tools/cli)
- [TodoMVC Project](https://todomvc.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Vitest Documentation](https://vitest.dev/)

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Angular
