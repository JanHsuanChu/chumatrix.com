import Layout from '../components/Layout.jsx'

export default function Contact() {
  return (
    <Layout>
      <h1 className="section-heading" style={{ marginTop: '2rem' }}>
        get in touch
      </h1>
      <p className="body-text">
        Have a project in mind, or want to talk through a business systems
        challenge? Reach out any time.
      </p>

      <div className="contact-links">
        <a className="contact-link" href="mailto:jhchu@chumatrix.com">
          <span className="contact-label">email</span>
          <span>jhchu@chumatrix.com</span>
        </a>
        <a
          className="contact-link"
          href="https://www.linkedin.com/in/jan-hsuan-chu/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact-label">linkedin</span>
          <span>Jan-Hsuan Chu</span>
        </a>
      </div>
    </Layout>
  )
}
