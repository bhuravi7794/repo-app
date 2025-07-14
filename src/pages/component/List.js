import Card from './Card';

export default function List({ repos }) {
  return (
    <div className="grid gap-4">
      {repos?.map((repo) => (
        <Card key={repo.id} repo={repo} />
      ))}
    </div>
  );
}
