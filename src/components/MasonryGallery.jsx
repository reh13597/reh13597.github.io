export default function MasonryGallery({ items }) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-2 xl:columns-3 gap-2 sm:gap-4 [column-fill:_balance]">
      {items.map((item) => (
        <div key={item.img} className="mb-2 sm:mb-4 break-inside-avoid">
          <figure className="overflow-hidden rounded-2xl">
            <img
              src={item.img}
              loading="lazy"
              className="xl:w-full lg:max-w-7xl h-auto block"
            />
          </figure>
        </div>
      ))}
    </div>
  );
}
