import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    //if (window.scrollY > 1) {
      if(window) {
      setIsVisible(true);

      console.log("$$$$$$$   scroll to top of page button is enabled");

    } else {
      setIsVisible(false);

      console.log("$$$$$$$    scroll to top of page button is disabled");

    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 1,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">

      {console.log("isScroll to toop image visible: " + isVisible)}

      {isVisible && 
        <div onClick={scrollToTop}>
          <img src={process.env.PUBLIC_URL + "/Images/MyIcons/ScrollToTopArrow.png"} alt='Go to top' style={{ top: '0', left: '3em' }}  />
        </div>}
    </div>
  );
}