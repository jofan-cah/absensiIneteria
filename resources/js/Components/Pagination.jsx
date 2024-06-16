import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
  return (
    links.length > 0 && (
      <div className="flex justify-center mb-4 space-x-2 py-5">
        {links.map((link, index) => (
          <Link
            key={link.url || index} // Use a more unique key if possible
            href={link.url}
            className={`px-4 py-2 border text-sm font-medium rounded  ${link.active
              ? 'bg-orange-50 border-orange-500 text-orange-600 hover:bg-orange-100 hover:text-orange-700'
              : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hover:text-gray-700'
              }`}
            dangerouslySetInnerHTML={{ __html: link.label }} // Use this if label contains HTML
          />
        ))}
      </div>
    )
  );
}
