import Layout from '../components/Layout.jsx'

export default function Testimonials() {
  return (
    <Layout>
      <div className="testimonial" style={{ marginTop: '2rem' }}>
        <p className="testimonial-name">Rebecca Milner</p>
        <p className="testimonial-title">
          Chief Advancement Officer, International Medical Corps
        </p>
        <div className="testimonial-quote">
          <p>
            Jan is a superstar! I first worked with Jan at Women for Women
            International and then persuaded her to join my team at
            International Medical Corps. I would hire her again in a
            second if I could convince her to return. Jan is strategic,
            analytical, detail-oriented and highly organized. She has the
            ability to learn and understand what an end-user needs from a
            system or database and build/implement the system you need.
            Jan can take complicated data challenges, break the challenge
            down into parts, build a road map to address them and create a
            system/process to achieve your goals. If your database is a
            mess or underutilized, Jan can help you solve that problem.
            She will do a thorough needs assessment, draw up a plan for
            achieving your goals and deliver a final product on time and
            in near-perfect condition. Jan can help you document and
            improve your processes. Jan can develop queries and reports to
            help you analyze your data. She can help you with your vendors
            and work with you to optimize your database. And more!
          </p>
          <p>
            I have deep respect for Jan&rsquo;s character and abilities
            &ndash; and highly recommend her with no reservations.
          </p>
        </div>
      </div>

      <div className="testimonial">
        <p className="testimonial-name">John Fugazy</p>
        <p className="testimonial-title">Owner, JCF Associates of Westchester Inc.</p>
        <p className="testimonial-name">Mary Daly</p>
        <p className="testimonial-title">Owner, Mary Daly &amp; Associates</p>
        <div className="testimonial-quote">
          <p>
            Jan, the day you agreed to work with us was a really good day
            for Fedcap. There is no way the project would have succeeded
            and ahead of schedule. It is hard to imagine anyone with a
            better mastery of data management. You created a plan to do
            the job within the time frame and current skill levels. But
            the real talent we observed was your ability to manage change
            with expertise, experience, discipline, clarity, problem
            solving ability and communication. We have loved working with
            you. We do not say that often.
          </p>
        </div>
      </div>
    </Layout>
  )
}
