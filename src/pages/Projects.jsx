import Layout from '../components/Layout.jsx'
import globalSantaFeLogo from '../assets/projects/global-santa-fe-logo.png'
import unhcrLogo from '../assets/projects/unhcr-logo.png'
import rtwLogo from '../assets/projects/rtw-logo.png'
import fedcapLogo from '../assets/projects/fedcap-logo.png'

const PROJECTS = [
  {
    name: 'Global Santa Fe',
    logo: globalSantaFeLogo,
    alt: 'Global Santa Fe logo',
    description:
      "Assessed Global Santa Fe's fundraising operations and systems, including Salesforce, Click & Pledge and Mailchimp, and lead projects to implement its membership, marketing and moves management strategy. Designed KPI dashboard and data structure for comprehensive data view of client's program delivery and fundraising activities.",
  },
  {
    name: 'USA for UNHCR',
    logo: unhcrLogo,
    alt: 'USA for UNHCR, The UN Refugee Agency logo',
    description:
      "Served as the project lead of USA for UNHCR's CRM migration from ROI to Salesforce; communicating with senior leadership, organizing the in-house stakeholders and guiding the Accenture implementation team. Designed the Business Systems team and ongoing management framework of the new CRM.",
  },
  {
    name: 'Run the World Digital',
    logo: rtwLogo,
    alt: 'Run the World logo',
    description:
      'Standardized data tracking and facilitated the implementation of Frakture and Google Data Studio as the platforms for automated fundraising campaign reporting.',
  },
  {
    name: 'Fedcap',
    logo: fedcapLogo,
    alt: 'Fedcap Rehabilitation logo',
    description:
      "Managed the merge of two Raiser's Edge database instances during FedCap's acquisition of Easter Seals New York.",
  },
]

export default function Projects() {
  return (
    <Layout>
      {PROJECTS.map((project, i) => (
        <div
          className="project"
          key={project.name}
          style={i === 0 ? { marginTop: '2rem' } : undefined}
        >
          <h2 className="section-heading" style={{ margin: '0 0 0.75em' }}>
            {project.name}
          </h2>
          <p className="body-text">{project.description}</p>
          <img src={project.logo} alt={project.alt} className="project-logo" />
        </div>
      ))}
    </Layout>
  )
}
