import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">The page you are looking for does not exist.</p>
            <Link to="/" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
                Go to Homepage
            </Link>
        </div>
    );
};

export default NotFoundPage;
