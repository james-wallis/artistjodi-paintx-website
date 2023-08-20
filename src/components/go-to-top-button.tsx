"use client";

export const GoToTopButton = () => (
  <div className="fixed right-5 md:right-10 bottom-10 flex flex-col items-center justify-center z-10">
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
