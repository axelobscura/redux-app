import React, { useEffect } from 'react'
import { connect } from 'react-redux'

// Bring in the asynchronous fetchPosts action
import { fetchPosts } from '../actions/postsActions'
import { Post } from '../components/Post'

const PostsPage = ({ dispatch, loading, posts, hasErrors }) => {
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    // Show loading, error, or success state
    const renderPosts = () => {
        if (loading) return <p>Loading posts...</p>
        if (hasErrors) return <p>Unable to display posts.</p>
        return posts.map(post => <Post key={post.id} post={post} />)
    }

    return (
        <section>
            <div className="container">
                <div className="row">
                    <h1>Posts</h1>
                    <hr/>
                    {renderPosts()}
                </div>
            </div>
        </section>
    )
}

// Map Redux state to React component props
const mapStateToProps = state => ({
    loading: state.posts.loading,
    posts: state.posts.posts,
    hasErrors: state.posts.hasErrors,
})

export default connect(mapStateToProps)(PostsPage)