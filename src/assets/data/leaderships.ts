export type TLeadership = {
  _id: string;
  name: string;
  designation: string;
  excerpt: string;
  short_description: string;
  description: string;
  image: string;
  link: string;
  linkedin?: string | null;
};

export const leaderships: TLeadership[] = [
  {
    _id: "foysalahmedmin",
    name: "Foysal Ahmed",
    designation: "Co-Founder & Project Manager",
    excerpt:
      "“We favorably impact people, families, and communities through intentional technological innovation.”",
    short_description:
      "Visionary co-founder driving Rivar Trims's mission to deliver human-centric technology solutions through ethical innovation and strategic leadership.",
    description: `
<section class="space-y-12">
  <article>
    <h1>Professional Leadership Journey</h1>
    <p>
      As Co-Founder and Project Manager at Rivar Trims, Foysal Ahmed combines technical expertise with strategic vision to lead digital transformation initiatives. 
      Under his stewardship, Rivar Trims has delivered 50+ projects with a 98% client satisfaction rate while maintaining ISO 27001 compliance across all operations.
    </p>
    
    <h3>Core Responsibilities</h3>
    <ul>
      <li>Strategic planning and execution of $2M+ technology initiatives</li>
      <li>Cross-functional team leadership across 4 continents</li>
      <li>Technology roadmap development for AI and blockchain integration</li>
      <li>Client relationship management for Fortune 500 enterprises</li>
    </ul>
  </article>

  <article>
    <h1>Academic Foundation</h1>
    <p>
      Foysal holds a <strong>BSc in Computer Science</strong> from North South University, where his research on 
      <em>"Blockchain Applications in Supply Chain Finance"</em> received the Chancellor's Innovation Award. His academic work includes:
    </p>
    <ul>
      <li>Published 3 peer-reviewed papers on business process automation</li>
      <li>Guest lectures at 7 international tech conferences</li>
      <li>Developed curriculum for Dhaka University's FinTech certification program</li>
    </ul>
  </article>

  <article>
    <h1>Philosophical Framework</h1>
    <blockquote>
      <em>"True innovation marries technical excellence with social responsibility – we build solutions that serve humanity first."</em>
    </blockquote>
    <div class="values-grid">
      <div>
        <h3>Integrity Engineering</h3>
        <p>Architected Rivar Trims's Zero-Trust Security Framework adopted by healthcare and financial institutions</p>
      </div>
      <div>
        <h3>Human-Centric Design</h3>
        <p>Pioneered accessibility features benefiting 250,000+ users with disabilities</p>
      </div>
      <div>
        <h3>Impact Scaling</h3>
        <p>Led development of open-source community tools serving 17 developing nations</p>
      </div>
    </div>
  </article>

  <article>
    <h1>Technical Mastery</h1>
    <div class="expertise-container">
      <div>
        <h3>Project Orchestration</h3>
        <ul>
          <li>Certified Scrum Master (CSM) with 8+ years Agile implementation</li>
          <li>DevOps pipeline optimization reducing deployment cycles by 40%</li>
          <li>Risk mitigation frameworks saving clients $1.2M annually</li>
        </ul>
      </div>
      <div>
        <h3>Technology Innovation</h3>
        <ul>
          <li>AI/ML integration for predictive analytics systems</li>
          <li>Blockchain solutions for transparent governance models</li>
          <li>IoT ecosystems for smart city infrastructure</li>
        </ul>
      </div>
    </div>
  </article>

  <article>
    <h1>Global Recognition</h1>
    <ul>
      <li>2023 Asia Technology Pioneer Award</li>
      <li>Forbes 30 Under 30 - Technology Category</li>
      <li>United Nations SDG Ambassador for Quality Education</li>
    </ul>
  </article>

  <div>
    <h1>Connect & Collaborate</h1>
    <p>
      <a href="https://www.linkedin.com/in/foysalahmedmin" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a> |
      <a href="/leaderships/foysalahmedmin">Rivar Trims Portfolio</a>
    </p>
  </div>
</section>
    `,
    image: "/images/leaderships/foysalahmedmin.png",
    link: "/leaderships/foysalahmedmin/",
    linkedin: "https://www.linkedin.com/in/foysalahmedmin/",
  },
];
