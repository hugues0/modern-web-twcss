const FAQ = () => {
    return (
      <div className="bg-bookmark-white py-20">
        <div className="container">
          <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
            <h1 className="text-3xl text-center text-bookmark-blue">
              Frequently Asked Questions
            </h1>
            <p className="text-center text-bookmark-grey mt-4">
              Here are some of our FAQs. If you have any other queations you'd
              like answered please feel free to reach out.
            </p>
          </div>
          <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
            <div className="flex items-center border-b py-4">
              <span className="flex-1">What is a bookmark?</span>
              <i className="fas fa-chevron-down text-bookmark-purple"></i>
            </div>
            <div className="flex items-center border-b py-4">
              <span className="flex-1">How can I request a new browser?</span>
              <i className="fas fa-chevron-down text-bookmark-purple"></i>
            </div>
            <div className="flex items-center border-b py-4">
              <span className="flex-1">Is there a mobile app?</span>
              <i className="fas fa-chevron-down text-bookmark-purple"></i>
            </div>
            <div className="flex items-center border-b py-4">
              <span className="flex-1">What about the Chromium bbrowsers</span>
              <i className="fas fa-chevron-down text-bookmark-purple"></i>
            </div>
            <button
              type="button"
              className="btn mt-10 flex self-center btn-purple hover:bg-bookmark-white hover:text-black"
            >
              More Info
            </button>
          </div>
        </div>
      </div>
    );
}

export default FAQ
