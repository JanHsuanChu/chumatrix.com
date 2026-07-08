import Layout from '../components/Layout.jsx'
import cube from '../assets/cube.png'
import fossil from '../assets/fossil.jpg'

export default function About() {
  return (
    <Layout>
      <h1 className="section-heading" style={{ marginTop: '2rem' }}>
        mission
      </h1>
      <p className="body-text">
        <span className="founder-bold">Chu Matrix</span> helps organizations
        integrate technology, data, and processes to solve big challenges,
        create operational efficiency, and produce positive change around
        the world.
      </p>

      <img
        src={cube}
        alt="Illustration of a cube with its three visible faces labeled process, technology, and data"
        className="cube-image"
      />

      <h2 className="section-heading">the founder</h2>
      <p className="body-text">
        <a
          href="https://www.linkedin.com/in/jan-hsuan-chu/"
          target="_blank"
          rel="noreferrer"
          className="founder-name"
        >
          Jan-Hsuan Chu
        </a>{' '}
        seeks to identify solutions that blend in software platforms, data
        quality, and process efficiency to bring robust and stable systems
        and processes to every organization.
      </p>
      <p className="body-text">
        Jan brings nearly 15 years of technical experience in data,
        operations, and analysis along with her strengths in planning,
        project and change management to work for your organization. Jan
        earned a degree in Political Science from National Taiwan
        University and a masters in Public Policy from the George
        Washington University. Jan has worked at all levels at
        organizations. She began her career at Women for Women
        International, an organization dedicated to women survivors of
        war. Her team comprised from fundraising metrics and analytics to
        donor stewardships, and was responsible for $16 million in revenue
        for the organization. At International Medical Corps, an
        organization devoted to offering healthcare in disaster and
        conflict zones in nearly 30 countries, Jan managed the fundraising
        operations team. This opportunity broadened her experience into
        managing data and operations for grants, major donor fundraising,
        special events, marketing, and communications. Her team was called
        on several times to expand and rethink systems for some of the
        biggest crises of our time like the 2015 Nepal earthquake and the
        2014 Ebola outbreak. Most recently, Jan was the Director of CRM and
        Business Systems at Washington DC&rsquo;s premier performing arts
        venue, the John F Kennedy Center for the Performing Arts. At the
        Kennedy Center, Jan, again, expanded her portfolio. She served as
        the liaison between IT and business system super users of
        ticketing, fundraising, venue booking, Finance, and HR, and her
        team was responsible for the optimization of these enterprise
        applications from day-to-day upkeep to large-scale implementation
        projects.
      </p>
      <p className="body-text">
        Jan, always wanting to learn new things, has recently run her first
        half marathon and worked on the skull of a Stegosaurus while
        volunteering in the FossiLab of the Smithsonian National Museum of
        Natural History. She splits her time between Taipei and Los
        Angeles.
      </p>
      <img
        src={fossil}
        alt="Jan holding a Stegosaurus skull fossil while volunteering in the Smithsonian's FossiLab"
        className="fossil-image"
      />
    </Layout>
  )
}
