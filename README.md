# GPT Wrapper

A modern web application that provides a user-friendly interface for interacting with GPT models, built with React, TypeScript, and shadcn/ui.

## Features

- 🎨 Modern UI with shadcn/ui components
- 🌓 Dark/Light mode support
- 💬 Real-time chat interface
- 📱 Responsive design
- 🔒 Secure API key management
- 🎯 TypeScript for better development experience

## Tech Stack

- **Frontend Framework**: React + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Package Manager**: npm

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Git

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/SwimmerPierce/gptwrap.git
   cd gptwrap
   ```

2. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Create a `.env` file in the frontend directory:
   ```bash
   cp .env.example .env
   ```
   Then edit the `.env` file with your API keys and configuration.

4. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## Project Structure

```
gptwrap/
├── frontend/               # Frontend application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── lib/          # Utility functions
│   │   └── App.tsx       # Main application component
│   ├── public/           # Static assets
│   └── package.json      # Frontend dependencies
├── .gitignore            # Git ignore rules
└── README.md            # Project documentation
```

## Security

- API keys and sensitive information should be stored in the `.env` file
- The `.env` file is gitignored and should never be committed
- Use `api_keys.json` for local development (also gitignored)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Vite](https://vitejs.dev/) for the fast development experience
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
