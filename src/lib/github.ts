import axios from 'axios'

const GITHUB_API_BASE = 'https://api.github.com'
const GITHUB_USERNAME = process.env.GITHUB_USERNAME || 'AakashGiri1'

// Create axios instance with default config
const githubApi = axios.create({
  baseURL: GITHUB_API_BASE,
  headers: {
    'Accept': 'application/vnd.github.v3+json',
  },
  timeout: 10000,
})

// Add token if available for higher rate limits
if (process.env.GITHUB_TOKEN) {
  githubApi.defaults.headers.common['Authorization'] = `token ${process.env.GITHUB_TOKEN}`
}

export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  topics: string[]
  language: string | null
  languages_url: string
  stargazers_count: number
  forks_count: number
  created_at: string
  updated_at: string
  pushed_at: string
  size: number
  default_branch: string
  open_issues_count: number
  archived: boolean
  disabled: boolean
}

export interface RepoLanguages {
  [key: string]: number
}

export interface GitHubUser {
  login: string
  id: number
  avatar_url: string
  name: string
  bio: string
  location: string
  email: string
  public_repos: number
  followers: number
  following: number
  created_at: string
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await githubApi.get(`/users/${GITHUB_USERNAME}/repos`, {
      params: {
        sort: 'updated',
        per_page: 100,
        type: 'owner'
      }
    })
    
    // Filter out forks, archived repos, and empty repos
    return response.data
      .filter((repo: GitHubRepo) => 
        !repo.name.includes('fork') && 
        !repo.archived && 
        !repo.disabled &&
        repo.size > 0
      )
      .sort((a: GitHubRepo, b: GitHubRepo) => 
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      )
  } catch (error) {
    console.error('Error fetching GitHub repos:', error)
    throw new Error('Failed to fetch repositories')
  }
}

export async function fetchGitHubUser(): Promise<GitHubUser> {
  try {
    const response = await githubApi.get(`/users/${GITHUB_USERNAME}`)
    return response.data
  } catch (error) {
    console.error('Error fetching GitHub user:', error)
    throw new Error('Failed to fetch user data')
  }
}

export async function fetchRepoLanguages(languagesUrl: string): Promise<RepoLanguages> {
  try {
    const response = await githubApi.get(languagesUrl.replace(GITHUB_API_BASE, ''))
    return response.data
  } catch (error) {
    console.error('Error fetching repo languages:', error)
    return {}
  }
}

export function getLanguageColor(language: string): string {
  const colors: Record<string, string> = {
    JavaScript: '#f1e05a',
    TypeScript: '#2b7489',
    React: '#61dafb',
    HTML: '#e34c26',
    CSS: '#1572b6',
    Python: '#3572a5',
    Java: '#b07219',
    'C++': '#f34b7d',
    PHP: '#4f5d95',
    Vue: '#4fc08d',
    Svelte: '#ff3e00',
    Go: '#00add8',
    Rust: '#dea584',
    Swift: '#fa7343',
    Kotlin: '#a97bff',
    Dart: '#00b4ab',
    Ruby: '#701516',
    'C#': '#239120',
    Shell: '#89e051',
    Dockerfile: '#384d54',
  }
  
  return colors[language] || '#8b949e'
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

export function getTimeAgo(dateString: string): string {
  const now = new Date()
  const date = new Date(dateString)
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)
  
  if (diffInSeconds < 60) return 'just now'
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)}d ago`
  if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)}mo ago`
  return `${Math.floor(diffInSeconds / 31536000)}y ago`
}