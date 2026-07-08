import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/nav/logo.png'
import aboutImg from '../assets/nav/about.png'
import approachImg from '../assets/nav/approach.png'
import servicesImg from '../assets/nav/services.png'
import testimonialsImg from '../assets/nav/testimonials.png'
import projectsImg from '../assets/nav/projects.png'
import contactImg from '../assets/nav/contact.png'

const NAV_ITEMS = [
  { label: 'about', path: '/about-us', img: aboutImg },
  { label: 'approach', path: '/approach', img: approachImg },
  { label: 'services', path: '/services', img: servicesImg },
  { label: 'testimonials', path: '/testimonies', img: testimonialsImg },
  { label: 'projects', path: '/projects', img: projectsImg },
  { label: 'contact', path: '/contact', img: contactImg },
]

export default function NavGrid() {
  const { pathname } = useLocation()

  return (
    <nav className="nav-grid" aria-label="Main">
      <Link to="/" className="logo-tile" aria-label="Chu Matrix home">
        <img src={logo} alt="Chu Matrix" />
      </Link>
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`nav-tile${pathname === item.path ? ' is-active' : ''}`}
          aria-current={pathname === item.path ? 'page' : undefined}
        >
          <img src={item.img} alt={item.label} />
        </Link>
      ))}
    </nav>
  )
}
