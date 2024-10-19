const LoginPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg">
                <h2 className="text-2xl font-bold text-center text-teal-600">FINEbank.IO</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="text-start block w-full text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            placeholder="hello@example.com"
                            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block w-full text-start text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="********"
                            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        />
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="keep-signed-in"
                            className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                        />
                        <label htmlFor="keep-signed-in" className="ml-2 text-sm text-gray-700">
                            Keep me signed in
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 text-white bg-teal-600 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                        Login
                    </button>
                    <div className="text-center py-2 grid grid-cols-3 items-center">
                        <hr className="border-gray-300" />
                        <span className="inset-x-0 inline-block w-full text-sm text-gray-400 -top-3 bg-white px-2">or sign in with</span>
                        <hr className="border-gray-300" />
                    </div>
                    <button
                        type="button"
                        className="flex items-center justify-center w-full py-2 mt-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200"
                    >
                        <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" className="mr-2" />
                        Continue with Google
                    </button>
                </form>
                <p className="mt-4 text-sm text-center text-teal-600 cursor-pointer">Create an account</p>
            </div>
        </div>
    );
}

export default LoginPage