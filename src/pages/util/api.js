export async function fetchRepositories(query) {
  const response = await fetch(`https://api.github.com/search/repositories?${query}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error('Failed to fetch repositories');
  }
  return data;
}
