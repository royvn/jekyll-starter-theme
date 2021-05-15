export default function Text({children}) {
  return (
    <div className="container mx-auto my-12 md:my-24 px-6 lg:px-16">
      <div className={`grid grid-cols-12 gap-6 items-end md:items-center text-center`}>
        <div className={`col-span-12 md:col-span-8 lg:col-span-6 md:col-start-3 lg:col-start-4`}>
          {children}
        </div>
      </div>
    </div>
  );
}