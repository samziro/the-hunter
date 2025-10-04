import trainer from "../assets/trainer.jpg";
import Navbar from "../components/navbar/Navbar";

const Subscription = () => {
    return (
        <div className="pt-10 min-h-dvh">
            <Navbar/>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-md mx-auto mb-12">
                    <div className="flex items-center justify-center space-x-8">
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                            <span className="ml-2 text-sm font-medium text-gray-900 dark:text-white">Register</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                            <span className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">Pay</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                            <span className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">Complete</span>
                        </div>
                    </div>
                </div>
                <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="order-2 lg:order-1">
                        <div className="relative">
                            <img alt="Fitness Transformation" className="w-full rounded-2xl shadow-2xl object-cover object-top" src={trainer} />
                            <div className="absolute top-6 left-6">
                                <img alt="Fit Hunter Logo" className="h-16 w-auto" src="https://the-hunter-iron.vercel.app/assets/logo-8BwtGb4B.png" />
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                            <div className="mb-8">
                                <p>At Fit Hunter, fitness is not just a destination — it’s a journey of transformation. I combine expert guidance, empathetic coaching, and motivational support to ensure you stay consistent and empowered every step of the way.</p>
                                <p> Remember Results do not happen unless you start, so let us get started today!</p>
                            </div>
                            <div className="mb-8">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Selected Plan</h3>
                                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
                                    <div className="flex items-start">
                                        <div className="w-6 h-6 flex items-center justify-center mr-3 mt-1">
                                            <i className="ri-vip-crown-line text-yellow-600 dark:text-yellow-400 text-lg"></i>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-gray-900 dark:text-white">Ultimate Transformation Workout &amp; Meal Plan - $39</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Recurring Payment</p>
                                            <p className="text-lg font-bold text-gray-900 dark:text-white mt-2">USD 39.00 <span className="text-sm font-normal">every month</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Enter Registration Details</h3>
                                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg">
                                    <p className="text-red-800 dark:text-red-400 text-sm">Registration failed. Please try again.</p>
                                </div>
                                <form id="subscription-form" data-readdy-form="true" className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                                            <input id="firstName" placeholder="First Name" required="" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm" type="text" value="Samuel" name="firstName" />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                                            <input id="lastName" placeholder="Last Name" required="" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm" type="text" value="Ziro" name="lastName" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                                        <input id="email" placeholder="Email Address" required="" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm" type="email" value="admin@gmail.com" name="email" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Country</label>
                                            <input id="country" placeholder="Country" required="" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm" type="text" value="Kenya" name="country" />
                                        </div>
                                        <div>
                                            <label htmlFor="region" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Region</label>
                                            <input id="region" placeholder="Region" required="" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm" type="text" value="kk" name="region" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                                        <div className="relative">
                                            <input id="password" placeholder="Password" required="" className="w-full px-4 py-3 pr-12 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm" type="password" value="tapps2024" name="password" />
                                            <button type="button" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer">
                                                <div className="w-5 h-5 flex items-center justify-center"><i className="ri-eye-line text-lg"></i>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <input id="agreeToTerms" required="" className="mt-1 h-4 w-4 text-yellow-500 border-gray-300 dark:border-gray-600 rounded focus:ring-yellow-500" type="checkbox" name="agreeToTerms" />
                                        <label htmlFor="agreeToTerms" className="ml-3 text-sm text-gray-700 dark:text-gray-300">By signing up, I agree to the <a href="#" className="text-yellow-600 dark:text-yellow-400 hover:underline cursor-pointer">Privacy Policy</a> and <a href="#" className="text-yellow-600 dark:text-yellow-400 hover:underline cursor-pointer">Legal Disclaimer</a>
                                        </label>
                                    </div>
                                    <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-4 px-8 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">Enroll Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscription
