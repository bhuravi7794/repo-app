import { useRouter } from 'next/router';

export default function Pagination({ totalCount, currentPage }) {
  const router = useRouter();
  const totalPages = Math.ceil(totalCount / 10);

  const changePage = (newPage) => {
    router.push({
      query: { ...router.query, page: newPage.toString() },
    });
  };

  return (
    <div className="flex justify-between mt-6">
      <button
        className="px-4 py-2 border rounded disabled:opacity-50"
        disabled={currentPage <= 1}
        onClick={() => changePage(currentPage - 1)}
      >
        Previous
      </button>
      <div className='py-2'>{currentPage} of {totalPages}</div>
      <button
        className="px-4 py-2 border rounded disabled:opacity-50"
        disabled={currentPage >= totalPages}
        onClick={() => changePage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}
