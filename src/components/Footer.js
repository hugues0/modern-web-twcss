const Footer = () => {
    return (
      <footer className="bg-bookmark-blue py-8">
        <div className="container flex flex-col md:flex-row items-center">
          <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
            <img src="./assets/images/logo-bookmark-white.png" alt="logo" />
            <ul className="flex text-white uppercase gap-12 text-xs">
              <li className="cursor-pointer ">Features</li>
              <li className="cursor-pointer ">Pricing</li>
              <li className="cursor-pointer ">Contact</li>
            </ul>
          </div>
          <div className="flex gap-10 mt-12 md:mt-auto">
            <ul className="list-none flex gap-10">
              <li>
                <i className=" text-white text-2xl list-none fab fa-twitter"></i>
              </li>
              <li>
                <i className="text-white text-2xl list-none fab fa-facebook-square"></i>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
}

export default Footer
