import React from 'react'
import { Link } from 'react-router-dom'

const DashboardPage = () => (
  <section>
    <div className="container">
      <h1>Dashboard OF POSTS</h1>
      <p>This is the dashboard.</p>
      <div className="row">
        <div className="one column">One</div>
        <div className="eleven columns">Eleven</div>
      </div>

      <div className="row">
        <div className="two columns">Two</div>
        <div className="ten columns">Ten</div>
      </div>

      <div className="row">
        <div className="one-third column">1/3</div>
        <div className="two-thirds column">2/3</div>
      </div>
      <div className="row">
        <div className="one-half column">1/2</div>
        <div className="one-half column">1/2</div>
      </div>
      <Link to="/posts" className="button">
        View Posts
    </Link>
    </div>
  </section>
)

export default DashboardPage;