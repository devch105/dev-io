const BentoGrid = ({ children, className = "" }) => {
  return (
    <main
      className={`
        mx-auto
        w-full
        max-w-7xl
        px-4
        pb-12
        sm:px-6
        lg:px-8
        ${className}
      `}
    >
      <div
        className="
          grid
          grid-cols-1
          gap-4

          md:grid-cols-2

          xl:grid-cols-4
          
        "
      >
        {children}
      </div>
    </main>
  );
};

export default BentoGrid;