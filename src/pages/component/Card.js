export default function Card({ repo }) {
  console.log(repo)
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-semibold">
        <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.full_name}</a>
      </h2>
      <p>{repo.description}</p>
      <div className="text-sm text-gray-600 mt-2">
        ⭐ {repo.stargazers_count} | {repo.language} | Created: {new Date(repo.created_at).toLocaleDateString()}
      </div>
    </div>
  );
}
