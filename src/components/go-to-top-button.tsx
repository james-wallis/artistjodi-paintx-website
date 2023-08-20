"use client";

export const GoToTopButton = () => (
  <div className="fixed right-10 bottom-10 hidden md:flex flex-col items-center justify-center">
    <button
      className="btn uppercase"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      Go to top
    </button>
    {/* <p className="uppercase mt-2">Go to top</p> */}
  </div>
);
