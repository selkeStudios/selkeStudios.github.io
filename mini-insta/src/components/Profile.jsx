import { useParams, Link } from 'react-router-dom'
import Feed from './Feed'

export default function Profile({ posts, setPosts }) {
    const { handle } = useParams() // ":handle" from /u/:handle
    const filtered = posts.filter(
        p => p.author.toLowerCase() === String(handle).toLowerCase()
    )

    return (
        <section aria-label="profile feed">
            <header style={{display:"flex", justifyContent:"space-between", alignItems:"baseline"}}>
                <h2>@{handle}</h2>
                <Link to="/" aria-label="Back to home"> -- Home</Link>
            </header>

            {filtered.length ? (
                <Feed posts={filtered} setPosts={setPosts} />
            ) : (
                <p style={{ opacity: 0.7 }}>No posts yet for @{handle}.</p>
            )}
        </section>
    )
}