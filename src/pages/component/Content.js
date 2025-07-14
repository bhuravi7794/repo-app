import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchRepositories } from '../util/api';
import { useDebounce } from '../hooks/useDebonce';
import List from '../component/List';
import Filter from '../component/Filter';
import Pagination from '../component/Pagination';
export default function Content() {
  const router = useRouter();
  const { q = '', language = '', stars = '', created = '', page = '1' } = router.query;

  const [search, setSearch] = useState(q);
  const debouncedSearch = useDebounce(search, 1000);

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const query = () => {
      const filters = [];
      if (created) filters.push(`created:>${created}`);
      if (stars) filters.push(`stars:>${stars}`);
      if (language) filters.push(`language:${language}`);
      let searchQuery;
      if(debouncedSearch){
        searchQuery = [debouncedSearch, ...filters].filter(Boolean).join('+');
      } else if((created || stars || language)) {
        searchQuery = [...filters].filter(Boolean).join('+');
      }else {
        searchQuery = ["all"].filter(Boolean).join('+');
      }
        return `q=${searchQuery}&sort=stars&order=desc&page=${page}&per_page=10`;

    };

    const fetchData = async () => {
      setLoading(true);
      setError('');
      try {
       const data = await fetchRepositories(query());
        setRepos(data.items);
        setTotalCount(data.total_count);
      } catch (err) {
        setRepos([])
        setError('Failed to load repositories');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [debouncedSearch, language, stars, created, page]);

  const handleSearchChange = (val) => {
    setSearch(val);
    router.push({
      query: { ...router.query, q: val, page: '1' },
    });
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <Filter
        search={search}
        onSearch={handleSearchChange}
      />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && repos?.length === 0 && <p>No repositories found.</p>}
      <List repos={repos} />
      <Pagination totalCount={totalCount} currentPage={Number(page)} />
    </div>
  );
}
