export default function FullScreenImage() {
    return (
      <div className="h-screen bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="2018-03-rgc-slider-1.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gray-900 bg-opacity-50" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Begin Here</h2>
          <p className="mt-3 text-xl text-white">
            Your child's journey to a bright and healthy future can begin here.
          </p>
          <a
            href="#"
            className="mt-8 block w-full rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
          >
            Get Started
          </a>
        </div>
      </div>
    )
  }