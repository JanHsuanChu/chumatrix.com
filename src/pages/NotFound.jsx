import Layout from '../components/Layout.jsx'

export default function NotFound() {
  return (
    <Layout>
      <div className="not-found" style={{ marginTop: '2rem' }}>
        <h1 className="section-heading" style={{ marginTop: 0 }}>
          page not found
        </h1>
        <p className="body-text">
          The page you&rsquo;re looking for doesn&rsquo;t exist. Use the
          menu above to find your way back.
        </p>
      </div>
    </Layout>
  )
}
