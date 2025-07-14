import { useRouter } from 'next/router';

export default function Filter({ search, onSearch }) {
  const router = useRouter();
  const { language = '', stars = '', created = '' } = router.query;

  const handleFilterChange = (e) => {
    router.push({
      query: {
        ...router.query,
        [e.target.name]: e.target.value,
        page: '1',
      },
    });
  };

  return (
    <div className="mb-4 space-y-4">
      <input
        className="w-full border px-3 py-2 rounded-xl"
        type="text"
        placeholder="Search repositories..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <select name="language" onChange={handleFilterChange} value={language} className="border px-3 py-2 rounded-xl">
          <option value="">All Languages</option>
          <option value="javascript">JavaScript</option>
          <option value="typescript">TypeScript</option>
          <option value="python">Python</option>
          <option value="ruby">Ruby</option>
          <option value="c++">C++</option>
          <option value="java">Java</option>
        </select>
        <input
          name="stars"
          placeholder="Min Stars"
          type="number"
          className="border px-3 py-2 rounded-xl"
          onChange={handleFilterChange}
          value={stars}
        />
        <input
          name="created"
          placeholder="Created After (YYYY-MM-DD)"
          type="date"
          className="border px-3 py-2 rounded-xl"
          onChange={handleFilterChange}
          value={created}
        />
      </div>
    </div>
  );
}
