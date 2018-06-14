import Link from 'next/link'

export default () => (
  <div>
    <h1>Hello from the front</h1>
    <Link href="/ping">
      <a>Go to api route</a>
    </Link>
  </div>
)
