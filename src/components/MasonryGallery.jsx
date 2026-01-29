export default function MasonryGallery({ items }) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-2 sm:gap-4 [column-fill:_balance]">
      {items.map((item) => (
        <div key={item.img} className="mb-2 sm:mb-4 break-inside-avoid">
          <figure className="overflow-hidden rounded-2xl">
            <img
              src={item.img}
              loading="lazy"
              className="w-full h-auto block"
            />
          </figure>
        </div>
      ))}
    </div>
  );
}
