import Header from './sections/Header';
import Section from './sections/Section';
import Footer from './sections/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Section title="Work Experience">
        <ul>
          <li>
            <div className='experience-title'>
              <strong>Principal Solution Engineer</strong><p>(Sept 2022 - Present)</p>
            </div>
            <div className='experience-subtitle'>
              <em>VTEX Ecommerce Platform Limited</em><p>UK, London</p>
            </div>
            <ul className="activities">
              <li>Designing and implementing tailored technology solutions to meet client requirements</li>
              <li>Collaborating with clients to understand their business challenges and technical needs</li>
              <li>Developing proof-of-concept (POC) solutions to demonstrate feasibility and value</li>
              <li>Acting as a subject matter expert (SME) for internal and external events</li>
              <li>Providing in-depth product demo and technical presentations to clients and partners</li>
              <li>Working with sales teams to identify and qualify opportunities</li>
              <li>Delivering technical proposals, RFP, and solution architecture documents</li>
              <li>Leading technical discussions and answering client queries during the pre-sales phase</li>
              <li>Providing feedback to product development teams for product enhancements</li>
              <li>Contributing to the creation of internal best practices, tools, and reusable assets</li>
              <li>Training clients and internal teams on deployed solutions</li>
              <li>Staying updated on the latest technologies, trends, and tools in the industry</li>
              <li>Mentoring junior engineers and team members</li>
              <li>Acting as a bridge between sales, engineering, and customer success teams</li>
              <li>Ensuring alignment between technical deliverables and client business objectives</li>
              <li>Monitoring and reporting on the success of deployed solutions using relevant KPIs</li>
            </ul>
          </li>
          <li className="experience">
            <div className='experience-title'>
              <strong>Senior Solution Engineer</strong><p>(Nov 2020 - Sept 2022)</p>
            </div>
            <div className='experience-subtitle'>
              <em>VTEX Ecommerce Platform Limited</em><p>UK, London</p>
            </div>
          </li>
          <li>
            <div className='experience-title'>
              <strong>Senior Software Engineer</strong><p>(Oct 2018 - Sep 2020)</p>
            </div>
            <div className='experience-subtitle'>
              <em>Inviqa UK Ltd</em><p>UK, London</p>
            </div>
            <ul className="activities">
              <li>Led and implemented web solutions (CMS, Ecommerce, etc)</li>
              <li>Assisted the Project Manager in establishing workloads and estimations</li>
              <li>Attended Pre-Sales, requirements analysis and design meetings</li>
              <li>Documented technical and functional specifications</li>
              <li>Run Salesforce B2C Commerce Community of Practice initiative</li>
              <li>Worked in an KANBAN environment (JIRA Software)</li>
              <li>Traveled to national and international clients locations</li>
              <li>Worked closely with POs and Stakeholders</li>
            </ul>
          </li>
          <li className="experience">
            <div className='experience-title'>
              <strong>Software Engineer</strong><p>(Apr 2018 - Oct 2018)</p>
            </div>
            <div className='experience-subtitle'>
              <em>Inviqa UK Ltd</em><p>UK, London</p>
            </div>
          </li>
          <li className="experience">
            <div className='experience-title'>
              <strong>Software Engineer</strong><p>(Apr 2018 - Oct 2018)</p>
            </div>
            <div className='experience-subtitle'>
              <em>Alpenite S.r.l.</em><p>Italy, Venice</p>
            </div>
            <ul className="activities">
              <li>Implemented ecommerce solutions using Salesforce B2C Commerce</li>
              <li>Contributed to the documentation of technical and functional specifications</li>
              <li>Worked in an SCRUM environment</li>
              <li>Traveled to national and international clients locations</li>
            </ul>
          </li>
        </ul>
      </Section>

      <Section title="Education">
        <ul>
          <li>
            <strong>Bachelor of Computer Science</strong> at Ca&#39; Foscari University of Venice
          </li>
          <li>
            <strong>Freelance professional qualification as &#34;Electronics and Telecommunications Industrial Engineer&#34;</strong> at State Industrial and Technical Institute &#34;A. PACINOTTI&#34;
          </li>
          <li>
            <strong>Technical Diploma in Industrial Engineering - Field of study Electronics and Telecommunications</strong> at State Industrial and Technical Institute &#34;A. RIGHI&#34;
          </li>
        </ul>
      </Section>

      <Section title="Skills">
        <ul>
          <li>9+ years of experience selling and implementing Ecommerce solutions</li>
          <li>9+ years of experience working with the JavaScript ecosystem (Node.js, React, Next.js, etc.)</li>
          <li>9+ years of experience working with APIs (REST, SOAP and GraphQL)</li>
          <li>9+ years of experience working with VTEX and Salesforce Commerce Cloud</li>
          <li>5+ years of experience working with Cloud providers (AWS, Azure, etc.)</li>
          <li>Knowledge of Java, C, Python, gained from academic and personal projects</li>
        </ul>
      </Section>

      <Section title="Languages">
        <ul>
          <li>Italian: Native speaker</li>
          <li>English: Fluent</li>
          <li>Portuguese: Fluent</li>
        </ul>
      </Section>

      <Footer />
    </>
  );
};

export default Home;
