export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-4">The page you're looking for doesn't exist.</p>
      <a 
        href="/" 
        className="text-blue-500 hover:text-blue-700 underline"
      >
        Return to Home
      </a>
    </div>
  );
}