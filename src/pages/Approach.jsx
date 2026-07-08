import Layout from '../components/Layout.jsx'

export default function Approach() {
  return (
    <Layout>
      <p className="body-text">
        With nearly 15 years of experience in international humanitarian
        aid, global disaster relief, and performing arts, Chu Matrix brings
        our record of proven results to your team. How do we do it? We:
      </p>
      <ul className="body-text">
        <li>
          Analyze business needs and convert them into systematic solutions
          that combine data, technology and processes
        </li>
        <li>Break down ideas into executable roadmaps</li>
        <li>Build stakeholder relationships to make sustainable change</li>
      </ul>
      <p className="body-text">
        Our goal is to learn about your needs and help build capacity
        internally.
      </p>

      <h1 className="section-heading">model</h1>
      <div className="model-diagram" role="img" aria-label="Model diagram: assessment and roadmap both lead into planning, which leads into implementation.">
        <div className="model-box m-assessment">assessment</div>
        <span className="model-arrow m-arrow1" aria-hidden="true">&rsaquo;</span>
        <div className="model-box m-planning">planning</div>
        <span className="model-arrow m-arrow3" aria-hidden="true">&rsaquo;</span>
        <div className="model-box m-implementation">implementation</div>
        <div className="model-box m-roadmap">roadmap</div>
        <span className="model-arrow m-arrow2" aria-hidden="true">&rsaquo;</span>
      </div>

      <h2 className="section-heading">assessment</h2>
      <p className="body-text">
        High level evaluation of the integrity and opportunity of your
        business systems as is. Through key users interview and hands-on
        examination of software platforms, the following will be produced:
      </p>
      <ul className="body-text">
        <li>
          A system integration diagram that demonstrates the relationship
          between all the tools you use
        </li>
        <li>
          Top 5 recommended action items for addressing the business
          problem or opportunity
        </li>
      </ul>

      <h2 className="section-heading">roadmap</h2>
      <p className="body-text">
        Shape the business systems roadmap according to your current and
        needs and business growth forecast. Through key user interview,
        wish-list brainstorming and collaborative roadmapping exercise, the
        following will be produced:
      </p>
      <ul className="body-text">
        <li>
          A system integration diagram that demonstrates the relationship
          between all the tools you use
        </li>
        <li>
          A list of short-term wins and a long-term business systems
          roadmap
        </li>
        <li>
          High level estimates of costs and efforts required for the
          roadmap
        </li>
      </ul>

      <h2 className="section-heading">planning</h2>
      <p className="body-text">
        Analyze the use cases and requirements in details and form the
        project plan with your team. Through requirements gathering,
        process walk-through, software product research, dependency
        analysis between software and processes, etc., the following will
        be developed:
      </p>
      <ul className="body-text">
        <li>Scope and requirements to achieve the desired project goals</li>
        <li>High level timeline, project plan, and budget</li>
        <li>
          Data and process flowcharts for current state mapping and future
          state analysis
        </li>
      </ul>

      <h2 className="section-heading">implementation</h2>
      <p className="body-text">
        Depends on the project and the most cost-efficient way of resource
        arrangement, we will work with the in-house team, manage software
        vendors, and/or configure the changes. Some examples of toolkits
        that will likely be utilized:
      </p>
      <ul className="body-text">
        <li>Product comparison matrix and selection, if new software is needed</li>
        <li>Project schedule and other project management best practices</li>
        <li>
          Framework for maintaining system health and continuous
          improvement, e.g., cost projection model, system health
          check-list, upgrade protocol, testing protocol, knowledge
          repository
        </li>
      </ul>
    </Layout>
  )
}
