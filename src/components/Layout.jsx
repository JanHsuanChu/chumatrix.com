import NavGrid from './NavGrid.jsx'
import Footer from './Footer.jsx'

export default function Layout({ children }) {
  return (
    <div className="page">
      <NavGrid />
      <div className="intro">{children}</div>
      <Footer />
    </div>
  )
}
