import {
  Briefcase,
  Code2,
  Database,
  LayoutDashboard,
  LucideIcon,
  Megaphone,
  Paintbrush,
  PenLine,
  Search,
} from "lucide-react";

export type TService = {
  _id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  thumbnail: string;
  link: string;
  details: {
    thumbnail: string;
    title: string;
    description: string;
    links?: {
      text?: string;
      url?: string;
    }[];
  };
  points: {
    thumbnail: string;
    list: {
      _id: string;
      title: string;
      description: string;
      links?: {
        text?: string;
        url?: string;
      }[];
    }[];
  };
};

export const services: TService[] = [
  {
    _id: "application-systems-development",
    icon: Code2,
    title: "Application Systems Development",
    description:
      "We design and develop high-performance applications across web, desktop, and mobile platforms. From responsive websites and scalable web apps to native and cross-platform mobile apps, our solutions are tailored to your business goals. Using modern frameworks like React, Next.js, Node.js, Flutter, and React Native, we ensure consistency, speed, and reliability across all devices.",
    thumbnail: "/images/services/application-systems-development.png",
    link: "/services/application-systems-development/",
    details: {
      thumbnail:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
      title: "Full-Stack: Web, Desktop & Mobile Application Development",
      description: `
        <div>
          <h3>End-to-End Application Development Excellence</h3>
          <p>
            Our comprehensive
            <strong>application development services</strong> cover the complete
            spectrum of digital solutions—from responsive websites and progressive
            web apps to native iOS/Android applications and cross-platform desktop
            software. We specialize in <em>full-stack development</em>,
            <strong>API integrations</strong>, and
            <strong>performance optimization</strong> using cutting-edge
            technologies.
          </p>

          <div>
            <h4><strong>Technologies We Use:</strong></h4>
            <ul>
              <li>
                <h5>🌐 Frontend Development</h5>
                <ul style="list-style-type: square">
                  <li><strong>React.js:</strong> Component-based UI development</li>
                  <li>
                    <strong>Next.js:</strong> Server-side rendering and static
                    generation
                  </li>
                  <li>
                    <strong>TypeScript:</strong> Type-safe JavaScript development
                  </li>
                  <li>
                    <strong>Tailwind CSS:</strong> Utility-first styling framework
                  </li>
                  <li>
                    <strong>Vue.js:</strong> Progressive framework for web
                    interfaces
                  </li>
                </ul>
              </li>
              <li>
                <h5>⚙️ Backend Development</h5>
                <ul style="list-style-type: square">
                  <li>
                    <strong>Node.js:</strong> JavaScript runtime for server-side
                    development
                  </li>
                  <li><strong>Express.js:</strong> Web application framework</li>
                  <li>
                    <strong>GraphQL & REST APIs:</strong> Flexible data querying
                    solutions
                  </li>
                  <li>
                    <strong>MongoDB & PostgreSQL:</strong> NoSQL and relational
                    databases
                  </li>
                  <li><strong>Redis:</strong> In-memory data structure store</li>
                  <li>
                    <strong>TypeScript:</strong> Type-safe JavaScript development
                  </li>
                </ul>
              </li>
              <li>
                <h5>📱 Mobile Development</h5>
                <ul style="list-style-type: square">
                  <li>
                    <strong>Progressive Web Apps:</strong> Web apps with native
                    features
                  </li>
                  <li><strong>React Native:</strong> Cross-platform mobile apps</li>
                  <li><strong>Expo:</strong> Native app development platform</li>
                </ul>
              </li>
              <li>
                <h5>🖥️ Desktop Development</h5>
                <ul style="list-style-type: square">
                  <li><strong>Electron:</strong> Cross-platform desktop apps</li>
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <h4><strong>Development Methodologies:</strong></h4>
            <ul>
              <li>
                <strong>Agile Development:</strong> Iterative development with
                regular client feedback and continuous improvement
              </li>
              <li>
                <strong>Test-Driven Development:</strong> Comprehensive testing
                strategies including unit, integration, and end-to-end tests
              </li>
              <li>
                <strong>Performance Monitoring:</strong> Real-time application
                monitoring and optimization for peak performance
              </li>
            </ul>
          </div>

          <div>
            <h4><strong>Specialized Services: </strong></h4>
            <ul>
              <li>
                <strong>API Development & Integration:</strong> RESTful and GraphQL
                APIs with third-party service integrations
              </li>
              <li>
                <strong>Database Design & Optimization:</strong> Scalable database
                architecture and query optimization
              </li>
              <li>
                <strong>Security Implementation:</strong> Authentication,
                authorization, and data protection
              </li>
              <li>
                <strong>Performance Optimization:</strong> Code splitting, lazy
                loading, and caching strategies
              </li>
            </ul>
          </div>

          <div>
            <h4><strong>Our Development Process:</strong></h4>
            <ul>
              <li>
                <strong>Requirements Analysis:</strong> Detailed project scoping and
                technical specification
              </li>
              <li>
                <strong>Architecture Design:</strong> System design and technology
                stack selection
              </li>
              <li>
                <strong>Iterative Development:</strong> Sprint-based development
                with regular demos
              </li>
              <li>
                <strong>Quality Assurance:</strong> Comprehensive testing and code
                review processes
              </li>
              <li>
                <strong>Deployment & Launch:</strong> Production deployment with
                monitoring setup
              </li>
              <li>
                <strong>Maintenance & Support:</strong> Ongoing updates, bug fixes,
                and feature enhancements
              </li>
            </ul>
          </div>
        </div>
      `,
    },
    points: {
      thumbnail:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=800&fit=crop",
      list: [
        {
          _id: "app-1",
          title: "Modern Frontend & Web App Development",
          description:
            "We craft responsive, accessible, and interactive user interfaces using modern technologies like React, Next.js, and TypeScript—building rich web experiences that are both visually appealing and highly performant. Whether you're launching a marketing landing page, building a dynamic admin dashboard, or developing a complex, full-scale web application, our frontend solutions are designed with precision and scalability in mind. Using React’s component-based architecture, we create reusable, maintainable UI components that promote code consistency and development speed. With Next.js, we enhance our applications with server-side rendering (SSR), static site generation (SSG), and API routes—ensuring faster page loads, better SEO, and seamless navigation. TypeScript adds a powerful layer of type safety and developer tooling, reducing runtime errors and improving code clarity in large and growing codebases. We focus on performance optimization through lazy loading, dynamic imports, image optimization, and bundle splitting—ensuring your app runs smoothly across devices and networks. Our UIs are also responsive and mobile-friendly by default, following best practices in CSS architecture, layout systems (like Flexbox and Grid), and accessibility standards (WCAG). Beyond development, we prioritize UI/UX collaboration, integrating with design tools like Figma or Sketch, and ensuring pixel-perfect implementation. From interactive dashboards with real-time data to content-driven marketing pages, we tailor every solution to align with your brand, goals, and technical requirements.",
        },
        {
          _id: "app-2",
          title: "Backend & API Development",
          description:
            "We build robust and scalable backend systems using Node.js, Express, and MongoDB to power modern, data-driven applications. Our backend solutions are designed for high performance, security, and flexibility—capable of handling everything from simple APIs to complex business logic. With Node.js and Express, we develop RESTful and GraphQL APIs that offer efficient data handling, clean architecture, and easy integration with frontend applications. We implement secure server-side logic, including user authentication, authorization, and data validation, using best practices and modern tools.On the database side, we use MongoDB to create flexible and efficient data models, optimized with indexing, aggregation pipelines, and schema validation. Whether you're building a web app, mobile app, or SaaS platform, our backend infrastructure ensures reliability, scalability, and smooth integration with third-party services and cloud platforms.",
        },
        {
          _id: "app-3",
          title: "Mobile & Cross-Platform App Development",
          description:
            "We specialize in building high-quality mobile applications using React Native and Expo, enabling us to deliver fast, reliable, and scalable solutions for both iOS and Android platforms. With React Native's powerful component-based architecture and Expo's streamlined development environment, we can develop cross-platform apps from a single codebase—significantly reducing development time and cost without compromising performance or design. Our apps offer a native-like user experience, with smooth animations, fast load times, and consistent behavior across devices. We integrate essential device features such as camera, location, push notifications, and offline support, ensuring your app is functional, responsive, and ready for real-world use. From startups to enterprise-level solutions, we tailor every app to meet specific business goals—whether it's for internal operations, customer engagement, or product delivery. With over-the-air updates, rapid prototyping, and a focus on user-centric design, we ensure your mobile product evolves quickly and stays aligned with user expectations and market demands.",
        },
        {
          _id: "app-4",
          title: "Desktop Application Development",
          description:
            "Leveraging the capabilities of Electron, we develop robust and high-performance desktop applications that run seamlessly across Windows, macOS, and Linux. Our solutions combine the flexibility of web technologies—like HTML, CSS, and JavaScript—with the power of native desktop features, enabling us to deliver rich, responsive user interfaces and deeply integrated functionality. Whether you need custom workflows, real-time data handling, or integration with third-party APIs and services, our Electron-based applications are designed to meet the unique needs of your business while maintaining a consistent and polished user experience across all platforms.",
        },
        {
          _id: "app-5",
          title: "Deployment, Maintenance & Optimization",
          description:
            "We handle deployment across web, app stores, and desktop platforms, including continuous updates, bug fixes, ASO, and performance tuning. Our security practices and optimization techniques ensure long-term stability and protection against threats.",
        },
      ],
    },
  },
  {
    _id: "seo",
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description:
      "Data-driven SEO strategies that increase organic visibility, drive qualified traffic, and accelerate revenue growth.",
    thumbnail: "/images/services/seo.png",
    link: "/services/seo",
    details: {
      thumbnail:
        "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?w=800&h=600&fit=crop",
      title: "Enterprise-Grade SEO Solutions",
      description: `
        <div class="seo-details">
          <h3>Scientific SEO That Delivers Results</h3>
          <p>We engineer <strong>holistic SEO ecosystems</strong> that combine technical excellence, content intelligence, and authoritative backlink profiles. Our scientific approach delivers <em>sustainable rankings</em> in competitive SERPs while future-proofing your website against algorithm updates.</p>

          <div class="seo-methodology">
            <h4>Our Proven SEO Methodology:</h4>
            <div class="methodology-steps">
              <div class="step">
                <h5>🔍 1. Comprehensive Technical Audit</h5>
                <p>We analyze your website's technical foundation, identifying crawl issues, indexation problems, and Core Web Vitals optimization opportunities</p>
              </div>
              <div class="step">
                <h5>📊 2. Data-Driven Keyword Research</h5>
                <p>Using advanced tools and behavioral data, we identify high-intent commercial queries throughout the buyer journey</p>
              </div>
              <div class="step">
                <h5>📝 3. Content Strategy & Optimization</h5>
                <p>AI-augmented content creation aligned with E-E-A-T principles, featuring topical authority clusters and entity optimization</p>
              </div>
              <div class="step">
                <h5>🔗 4. Authority Building Campaign</h5>
                <p>Strategic digital PR and authoritative backlink acquisition through data partnerships and competitive gap analysis</p>
              </div>
              <div class="step">
                <h5>📈 5. Performance Monitoring</h5>
                <p>Machine learning-powered rank tracking with predictive analytics and ROI attribution modeling</p>
              </div>
            </div>
          </div>

          <h4>Advanced SEO Capabilities:</h4>
          <ul>
            <li><strong>Technical SEO:</strong> Site architecture optimization, Core Web Vitals enhancement, and schema markup implementation</li>
            <li><strong>Content Intelligence:</strong> Semantic search optimization and search demand forecasting</li>
            <li><strong>Local SEO:</strong> Geo-specific optimization with GMB management and localized content hubs</li>
            <li><strong>Enterprise SEO:</strong> Large-scale website optimization and international SEO strategies</li>
          </ul>

          <div class="results-section">
            <h4>What Sets Us Apart:</h4>
            <blockquote>
              <p>We don't just optimize for search engines—we optimize for search <em>intelligence</em>. Our approach combines traditional SEO best practices with cutting-edge AI and machine learning techniques to deliver sustainable, long-term results.</p>
            </blockquote>
          </div>

          <div class="tools-technologies">
            <h4>Tools & Technologies We Use:</h4>
            <p><strong>Analytics:</strong> Google Analytics 4, Google Search Console, SEMrush, Ahrefs, Screaming Frog</p>
            <p><strong>Content Optimization:</strong> Surfer SEO, Clearscope, MarketMuse</p>
            <p><strong>Technical SEO:</strong> Lighthouse, PageSpeed Insights, GTMetrix</p>
          </div>
        </div>
      `,
      links: [
        { text: "View Case Studies", url: "/case-studies/seo" },
        { text: "SEO Audit Sample", url: "/resources/seo-audit-sample.pdf" },
      ],
    },
    points: {
      thumbnail:
        "https://images.unsplash.com/photo-1709281847802-9aef10b6d4bf?w=600&h=800&fit=crop",
      list: [
        {
          _id: "technical-seo",
          title: "Technical Foundation",
          description:
            "Site architecture optimization, Core Web Vitals enhancement, crawl efficiency maximization, and indexation management with comprehensive schema markup implementation.",
          links: [
            {
              text: "Technical Checklist",
              url: "/resources/technical-seo-checklist",
            },
          ],
        },
        {
          _id: "keyword-strategy",
          title: "Intent-Driven Keyword Strategy",
          description:
            "Scientifically validated keyword mapping using behavioral data and semantic search patterns to capture high-intent commercial queries throughout the buyer journey.",
          links: [
            {
              text: "Keyword Research Template",
              url: "/resources/keyword-template",
            },
          ],
        },
        {
          _id: "content-optimization",
          title: "AI-Augmented Content Optimization",
          description:
            "LLM-enhanced content creation aligned with E-E-A-T principles, featuring topical authority clusters, entity optimization, and search demand forecasting.",
          links: [{ text: "Content Samples", url: "/portfolio/content" }],
        },
        {
          _id: "backlink-engineering",
          title: "Authority Building",
          description:
            "Strategic digital PR campaigns and authoritative backlink acquisition through data partnerships, resource amplification, and competitive gap exploitation.",
          links: [
            { text: "Link Building Report", url: "/resources/link-building" },
          ],
        },
        {
          _id: "local-seo",
          title: "Hyperlocal Domination",
          description:
            "Geo-specific SEO with GMB optimization, localized content hubs, and proximity-based ranking signals for multi-location enterprises.",
          links: [{ text: "Local SEO Kit", url: "/resources/local-seo-kit" }],
        },
        {
          _id: "seo-analytics",
          title: "Predictive Analytics",
          description:
            "Machine learning-powered rank tracking, SERP feature forecasting, and ROI attribution modeling with custom dashboards integrating GA4, GSC, and CRM data.",
          links: [{ text: "Analytics Demo", url: "/demo/seo-dashboard" }],
        },
      ],
    },
  },
  {
    _id: "digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Our comprehensive digital marketing solutions increase visibility, engagement, and conversions across all digital channels. We integrate SEO, social media, email marketing, influencer partnerships, and targeted advertising to deliver cohesive campaigns that reach the right audience with the right message at the right time.",
    thumbnail: "/images/services/digital-marketing.png",
    link: "/services/digital-marketing/",
    details: {
      thumbnail:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      title: "Digital Marketing",
      description: `
        <div class="digital-marketing-details">
          <h3>Full-Spectrum Digital Marketing Excellence</h3>
          <p>Our <strong>comprehensive digital marketing solutions</strong> encompass every aspect of online marketing, from <em>search engine optimization</em> to <strong>performance advertising</strong> across all major platforms. We build integrated strategies that target your ideal audience segments throughout their entire customer journey.</p>

          <h4>Complete Marketing Ecosystem:</h4>
          <div class="marketing-services">
            <div class="service-category">
              <h5>🎯 Search Engine Optimization (SEO)</h5>
              <p>Technical SEO, content optimization, and link building strategies that drive organic visibility and qualified traffic</p>
            </div>
            <div class="service-category">
              <h5>📱 Social Media Management</h5>
              <p>Content creation, community management, and social advertising across Facebook, Instagram, LinkedIn, Twitter, and TikTok</p>
            </div>
            <div class="service-category">
              <h5>📧 Email Marketing Campaigns</h5>
              <p>Automated nurture sequences, segmentation strategies, and performance optimization for maximum ROI</p>
            </div>
            <div class="service-category">
              <h5>🤝 Influencer Collaborations</h5>
              <p>Strategic partnerships with industry influencers to amplify brand reach and credibility</p>
            </div>
            <div class="service-category">
              <h5>💰 Performance Advertising</h5>
              <p>Google Ads, Facebook Ads, LinkedIn Ads, YouTube advertising, and programmatic display campaigns</p>
            </div>
          </div>

          <h4>Platform Expertise:</h4>
          <ul>
            <li><strong>Google:</strong> Search, Display, Shopping, YouTube, and Discovery campaigns</li>
            <li><strong>Meta:</strong> Facebook and Instagram advertising with advanced targeting</li>
            <li><strong>LinkedIn:</strong> B2B focused campaigns for professional audiences</li>
            <li><strong>Programmatic:</strong> Automated buying across premium ad exchanges</li>
          </ul>

          <div class="results-highlight">
            <h4>What You Can Expect:</h4>
            <p>Our integrated approach ensures <strong>consistent messaging</strong> while leveraging each platform's unique strengths. We focus on <em>maximizing reach and conversions</em> through strategic budget allocation, continuous optimization, and data-driven decision making.</p>
          </div>
        </div>
      `,
    },
    points: {
      thumbnail:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop",
      list: [
        {
          _id: "dm-1",
          title: "Integrated Channel Strategy",
          description:
            "We design synchronized campaigns across search, social, email, content networks, and paid advertising platforms. Our channel integration ensures consistent messaging while leveraging each platform's unique strengths to maximize reach and conversions.",
        },
        {
          _id: "dm-2",
          title: "Targeted Advertising & Media Buying",
          description:
            "We create and manage performance-driven ad campaigns with precision audience targeting, A/B testing, and algorithmic optimization across all major platforms. Our approach ensures maximum ROI through strategic budget allocation and continuous refinement.",
        },
        {
          _id: "dm-3",
          title: "Audience Segmentation & Journey Mapping",
          description:
            "Using demographic, behavioral, and intent data, we identify high-value audience segments and deliver personalized messaging at each journey stage. Our approach includes lookalike audiences, retargeting strategies, and lifecycle marketing.",
        },
        {
          _id: "dm-4",
          title: "Performance Analytics & Optimization",
          description:
            "Our comprehensive analytics framework tracks KPIs across all channels with custom dashboards. We implement continuous testing and data-driven optimizations to improve campaign efficiency, ROAS, and marketing effectiveness.",
        },
      ],
    },
  },
  {
    _id: "ui-ux-design",
    icon: LayoutDashboard,
    title: "UI/UX Design",
    description:
      "Our UI/UX design service delivers intuitive, accessible, and visually appealing interfaces for web and mobile apps. We prioritize user experience by conducting research, building wireframes, and testing interactions. The result is a seamless flow that keeps users engaged and satisfied while achieving your business objectives.",
    thumbnail: "/images/services/ui-ux-design.png",
    link: "/services/ui-ux-design/",
    details: {
      thumbnail:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop",
      title: "UI/UX Design",
      description: `
        <div class="uiux-design-details">
          <h3>User-Centered Design That Converts</h3>
          <p>We provide comprehensive <strong>user-centered design solutions</strong> that bridge the gap between user needs and business objectives. Our process encompasses <em>extensive user research</em>, <strong>information architecture</strong>, <strong>wireframing</strong>, <strong>prototyping</strong>, and <strong>usability testing</strong> to create seamless user experiences that drive engagement and conversions.</p>

          <h4>Complete UX/UI Design Process:</h4>
          <div class="design-phases">
            <div class="phase">
              <h5>🔍 Research & Discovery</h5>
              <ul>
                <li>User interviews and surveys</li>
                <li>Competitive analysis</li>
                <li>Market research and trends</li>
                <li>Stakeholder workshops</li>
                <li>Business requirements gathering</li>
              </ul>
            </div>
            <div class="phase">
              <h5>🗺️ Information Architecture</h5>
              <ul>
                <li>User journey mapping</li>
                <li>Site map creation</li>
                <li>Content strategy</li>
                <li>Navigation structure</li>
                <li>Task flow optimization</li>
              </ul>
            </div>
            <div class="phase">
              <h5>✏️ Wireframing & Prototyping</h5>
              <ul>
                <li>Low-fidelity wireframes</li>
                <li>Interactive prototypes</li>
                <li>High-fidelity mockups</li>
                <li>Design system creation</li>
                <li>Component libraries</li>
              </ul>
            </div>
            <div class="phase">
              <h5>🎨 Visual Design</h5>
              <ul>
                <li>Brand-aligned UI design</li>
                <li>Typography and color systems</li>
                <li>Icon and illustration design</li>
                <li>Responsive design layouts</li>
                <li>Micro-interaction design</li>
              </ul>
            </div>
            <div class="phase">
              <h5>🧪 Testing & Validation</h5>
              <ul>
                <li>Usability testing sessions</li>
                <li>A/B testing implementation</li>
                <li>Accessibility audits</li>
                <li>Performance optimization</li>
                <li>Post-launch analytics</li>
              </ul>
            </div>
          </div>

          <h4>Accessibility-First Design Approach:</h4>
          <div class="accessibility-focus">
            <p>We design interfaces that meet <strong>WCAG 2.1 AA accessibility standards</strong>, ensuring usability for all users regardless of ability. Our accessibility-first approach includes:</p>
            <ul>
              <li><strong>Color Contrast:</strong> Ensuring sufficient contrast ratios for readability</li>
              <li><strong>Screen Reader Support:</strong> Semantic HTML and ARIA labels</li>
              <li><strong>Keyboard Navigation:</strong> Full functionality without mouse interaction</li>
              <li><strong>Cognitive Load Reduction:</strong> Clear information hierarchy and intuitive layouts</li>
              <li><strong>Mobile Accessibility:</strong> Touch-friendly interfaces with appropriate sizing</li>
            </ul>
          </div>

          <h4>Design Tools & Technologies:</h4>
          <p><strong>Design & Prototyping:</strong> Figma, Adobe XD, Sketch, InVision</p>
          <p><strong>User Testing:</strong> Maze, UserTesting, Hotjar, Google Analytics</p>
          <p><strong>Collaboration:</strong> Miro, FigJam, Notion, Slack</p>
          <p><strong>Development Handoff:</strong> Zeplin, Abstract, Figma Dev Mode</p>

          <div class="results-focus">
            <h4>Measurable Results We Deliver:</h4>
            <blockquote>
              <p>Our user-centered design approach consistently delivers <strong>improved conversion rates</strong>, <em>reduced bounce rates</em>, and <strong>increased user satisfaction scores</strong>. We don't just make things look good—we make them work better for your users and your business.</p>
            </blockquote>
          </div>
        </div>
      `,
    },
    points: {
      thumbnail:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=800&fit=crop",
      list: [
        {
          _id: "ux-1",
          title: "User Research & Journey Mapping",
          description:
            "We conduct comprehensive user research including interviews, surveys, and behavioral analysis to understand user needs and pain points. Our journey mapping visualizes complete user pathways, identifying friction points and opportunities to enhance the overall experience.",
        },
        {
          _id: "ux-2",
          title: "Interaction Design & Prototyping",
          description:
            "Our team creates detailed wireframes, interactive prototypes, and micro-interaction designs that bring user flows to life. Using tools like Figma and Adobe XD, we develop and test functional prototypes before development to validate design concepts and usability.",
        },
        {
          _id: "ux-3",
          title: "Accessibility-Compliant Interface Design",
          description:
            "We design interfaces that meet WCAG 2.1 accessibility standards, ensuring usability for all users regardless of ability. Our accessibility-first approach includes color contrast optimization, screen reader compatibility, keyboard navigation support, and cognitive load reduction.",
        },
      ],
    },
  },
  {
    _id: "graphic-design",
    icon: Paintbrush,
    title: "Graphic Design",
    description:
      "From logos and business cards to social media graphics and marketing materials, our graphic design service ensures your brand looks professional and memorable. We focus on clean, effective visual communication that aligns with your brand identity. Whether you're launching a new product or refreshing your look, we bring your ideas to life.",
    thumbnail: "/images/services/graphic-design.png",
    link: "/services/graphic-design/",
    details: {
      thumbnail:
        "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800&h=600&fit=crop",
      title: "Graphic Design",
      description: `
        <div class="graphic-design-details">
          <h3>Visual Identity That Makes an Impact</h3>
          <p>Our comprehensive <strong>graphic design services</strong> encompass every aspect of visual communication, from <em>brand identity development</em> to <strong>marketing collateral creation</strong> and <strong>digital asset production</strong>. We specialize in creating visually compelling designs that effectively communicate your brand values and messaging while maintaining consistency across all touchpoints.</p>

          <h4>Complete Design Solutions:</h4>
          <div class="design-categories">
            <div class="category">
              <h5>🎨 Brand Identity & Logo Design</h5>
              <ul>
                <li>Logo design and brand mark creation</li>
                <li>Color palette development</li>
                <li>Typography system selection</li>
                <li>Brand guideline documentation</li>
                <li>Visual identity applications</li>
              </ul>
            </div>
            <div class="category">
              <h5>📄 Print & Marketing Materials</h5>
              <ul>
                <li>Business cards and stationery</li>
                <li>Brochures and sales sheets</li>
                <li>Presentation templates</li>
                <li>Trade show displays</li>
                <li>Packaging design</li>
              </ul>
            </div>
            <div class="category">
              <h5>💻 Digital Graphics & Assets</h5>
              <ul>
                <li>Website graphics and banners</li>
                <li>Social media templates</li>
                <li>Email campaign graphics</li>
                <li>Digital advertising creatives</li>
                <li>App interface elements</li>
              </ul>
            </div>
          </div>

          <h4>Our Design Philosophy:</h4>
          <blockquote>
            <p>Great design is not just about making things look beautiful—it's about creating <strong>meaningful connections</strong> between brands and their audiences through strategic visual communication.</p>
          </blockquote>

          <div class="design-process">
            <h4>Our Proven Design Process:</h4>
            <ol>
              <li><strong>Discovery & Research:</strong> Understanding your brand, audience, and competitive landscape</li>
              <li><strong>Concept Development:</strong> Creating multiple design directions based on strategic insights</li>
              <li><strong>Design Refinement:</strong> Iterating on chosen concepts with your feedback</li>
              <li><strong>Final Production:</strong> Delivering print-ready and web-optimized files</li>
              <li><strong>Brand Guidelines:</strong> Providing documentation for consistent brand application</li>
            </ol>
          </div>

          <h4>Why Choose Our Design Services:</h4>
          <div class="value-propositions">
            <div class="value-prop">
              <h5>🎯 Strategic Approach</h5>
              <p>Every design decision is backed by research and aligned with your business objectives</p>
            </div>
            <div class="value-prop">
              <h5>🔄 Flexible Revisions</h5>
              <p>We work collaboratively to ensure the final design exceeds your expectations</p>
            </div>
            <div class="value-prop">
              <h5>📱 Multi-Platform Optimization</h5>
              <p>Designs optimized for both print and digital applications with proper file formats</p>
            </div>
            <div class="value-prop">
              <h5>⚡ Fast Turnaround</h5>
              <p>Efficient workflow processes that deliver high-quality designs on schedule</p>
            </div>
          </div>

          <div class="software-tools">
            <h4>Professional Design Tools:</h4>
            <p><strong>Vector Graphics:</strong> Adobe Illustrator, Sketch, Figma</p>
            <p><strong>Image Editing:</strong> Adobe Photoshop, Affinity Photo</p>
            <p><strong>Layout Design:</strong> Adobe InDesign, Canva Pro</p>
            <p><strong>Prototyping:</strong> Adobe XD, Figma, InVision</p>
          </div>
        </div>
      `,
      links: [{ text: "Design Portfolio", url: "/portfolio/design" }],
    },
    points: {
      thumbnail:
        "https://images.unsplash.com/photo-1519408469771-2586093c3f14?w=600&h=800&fit=crop",
      list: [
        {
          _id: "gd-1",
          title: "Brand Identity Systems",
          description:
            "We develop comprehensive visual identity systems including logo design, color palettes, typography systems, and brand guideline documentation. Our identity work establishes distinctive brand recognition while ensuring consistent application across all touchpoints and media formats.",
        },
        {
          _id: "gd-2",
          title: "Marketing Collateral Design",
          description:
            "Our team creates visually impactful marketing materials including brochures, sales sheets, presentations, trade show displays, and promotional items. We focus on information hierarchy and visual storytelling to create materials that effectively communicate key messages and drive engagement.",
        },
        {
          _id: "gd-3",
          title: "Digital Asset Production",
          description:
            "We produce optimized digital graphics for websites, social media, email campaigns, and advertising. Our asset creation includes responsive design adaptations, file optimization for fast loading, and platform-specific formatting to ensure maximum visual impact across all digital channels.",
        },
      ],
    },
  },
  {
    _id: "content-creation",
    icon: PenLine,
    title: "Content Creation",
    description:
      "Our content creation service covers everything from blog posts and social media content to video scripts and product descriptions. We focus on storytelling, SEO optimization, and audience engagement. Whether you're building a brand or running campaigns, our team produces original and compelling content tailored to your voice, goals, and platform needs.",
    thumbnail: "/images/services/content-creation.png",
    link: "/services/content-creation/",
    details: {
      thumbnail:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
      title: "Content Creation",
      description: `
        <div class="content-details">
          <h3>Comprehensive Content Solutions for Every Platform</h3>
          <p>We create <strong>comprehensive content solutions</strong> that drive engagement and conversions across all digital channels. Our expert team specializes in developing <em>brand-aligned storytelling</em>, implementing <strong>advanced SEO optimization techniques</strong>, and crafting audience engagement strategies that are specifically tailored to your unique business goals and platform requirements.</p>
          
          <h4>What Sets Our Content Apart:</h4>
          <ul>
            <li><strong>Strategic Brand Alignment:</strong> Every piece of content reinforces your brand voice and messaging consistency</li>
            <li><strong>Data-Driven Approach:</strong> We use analytics and audience insights to inform content decisions</li>
            <li><strong>Multi-Format Expertise:</strong> From long-form articles to micro-content for social media</li>
            <li><strong>SEO Integration:</strong> Content optimized for search visibility without sacrificing readability</li>
          </ul>

          <h4>Our Content Services Include:</h4>
          <div class="service-grid">
            <div class="service-item">
              <h5>Blog Articles & Long-Form Content</h5>
              <p>In-depth, research-backed articles that establish thought leadership and drive organic traffic</p>
            </div>
            <div class="service-item">
              <h5>Social Media Content</h5>
              <p>Platform-specific content designed for maximum engagement and shareability</p>
            </div>
            <div class="service-item">
              <h5>Video Scripts & Storyboards</h5>
              <p>Compelling narratives for video content across all platforms and formats</p>
            </div>
            <div class="service-item">
              <h5>Product Descriptions</h5>
              <p>Persuasive copy that highlights benefits and drives conversions</p>
            </div>
          </div>

          <blockquote>
            <p>"Quality content is not about quantity—it's about creating valuable experiences that resonate with your audience and drive meaningful engagement."</p>
          </blockquote>
        </div>
      `,
    },
    points: {
      thumbnail:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=800&fit=crop",
      list: [
        {
          _id: "cc-1",
          title: "Multi-Platform Content Strategy",
          description:
            "We develop comprehensive content frameworks that maintain consistent brand messaging across blogs, social media, email newsletters, and video platforms. Our approach includes platform-specific adaptations to maximize engagement while ensuring cohesive storytelling that reinforces your brand identity.",
        },
        {
          _id: "cc-2",
          title: "SEO-Optimized Creation",
          description:
            "Our writers craft content with strategic keyword integration, semantic structuring, and readability optimization to improve search rankings. We conduct thorough keyword research and competitor analysis to develop content that ranks well while providing genuine value to your audience.",
        },
        {
          _id: "cc-3",
          title: "Audience-Focused Storytelling",
          description:
            "We craft compelling narratives tailored to your audience by leveraging detailed personas and customer journey mapping. Our storytelling connects emotional motivators with real-world solutions, driving deeper engagement and higher conversion rates through content that feels personal, relevant and impactful.",
        },
      ],
    },
  },
  // {
  //   _id: "video-production",
  //   icon: Clapperboard,
  //   title: "Video Editing Service",
  //   description:
  //     "We deliver professional video editing solutions tailored to your brand, audience, and message. From social media clips to corporate promos and cinematic storytelling, our editors bring your footage to life with precision, creativity, and consistency.",
  //   thumbnail: "/images/services/video-production.png",
  //   link: "/services/video-production/",
  //   details: {
  //     thumbnail:
  //       "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?w=800&h=600&fit=crop",
  //     title: "Video Editing Service",
  //     description: `
  //       <div class="video-editing-details">
  //         <h3>Professional Video Editing That Captivates</h3>
  //         <p>Our <strong>professional video editing services</strong> transform raw footage into compelling visual stories that resonate with your audience. From basic cuts and transitions to <em>advanced motion graphics</em>, <strong>color grading</strong>, and <strong>sound design</strong>, we work closely with your creative vision to produce high-quality video content that perfectly aligns with your brand's identity and communication goals.</p>

  //         <h4>Complete Video Production Pipeline:</h4>
  //         <div class="video-services">
  //           <div class="service-tier">
  //             <h5>🎬 Cinematic & Brand Videos</h5>
  //             <ul>
  //               <li>Corporate promotional videos</li>
  //               <li>Product launch campaigns</li>
  //               <li>Brand storytelling pieces</li>
  //               <li>Documentary-style content</li>
  //               <li>Training and educational videos</li>
  //             </ul>
  //           </div>
  //           <div class="service-tier">
  //             <h5>📱 Social Media Content</h5>
  //             <ul>
  //               <li>Instagram Reels and Stories</li>
  //               <li>TikTok trend-based content</li>
  //               <li>YouTube Shorts optimization</li>
  //               <li>LinkedIn video posts</li>
  //               <li>Facebook video ads</li>
  //             </ul>
  //           </div>
  //           <div class="service-tier">
  //             <h5>🎨 Motion Graphics & Animation</h5>
  //             <ul>
  //               <li>Animated logos and intros</li>
  //               <li>Lower thirds and titles</li>
  //               <li>Data visualization</li>
  //               <li>Infographic animations</li>
  //               <li>2D and 3D motion graphics</li>
  //             </ul>
  //           </div>
  //         </div>

  //         <h4>Our Video Editing Expertise:</h4>
  //         <div class="expertise-areas">
  //           <div class="expertise">
  //             <h5>🎯 Strategic Storytelling</h5>
  //             <p>We craft compelling narratives by combining visuals, pacing, and audio to keep your audience engaged from start to finish</p>
  //           </div>
  //           <div class="expertise">
  //             <h5>🎨 Visual Enhancement</h5>
  //             <p>Professional color grading, visual effects, and motion graphics that elevate your content's production value</p>
  //           </div>
  //           <div class="expertise">
  //             <h5>🔊 Audio Perfection</h5>
  //             <p>Crystal-clear sound design, music selection, and audio mixing for broadcast-quality results</p>
  //           </div>
  //           <div class="expertise">
  //             <h5>📊 Platform Optimization</h5>
  //             <p>Format and aspect ratio optimization for different platforms and viewing contexts</p>
  //           </div>
  //         </div>

  //         <h4>Software & Tools We Use:</h4>
  //         <p><strong>Professional Editing:</strong> Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve</p>
  //         <p><strong>Motion Graphics:</strong> Adobe After Effects, Cinema 4D, Blender</p>
  //         <p><strong>Audio Production:</strong> Adobe Audition, Pro Tools, Logic Pro</p>
  //         <p><strong>Color Grading:</strong> DaVinci Resolve, Adobe SpeedGrade</p>

  //         <div class="collaboration-process">
  //           <h4>Our Collaborative Process:</h4>
  //           <p>We believe in <strong>iterative collaboration</strong> throughout the editing process. Our flexible revision system and clear communication channels ensure that the final output perfectly aligns with your vision and expectations. We provide regular updates, preview links, and detailed feedback sessions to keep you involved every step of the way.</p>
  //         </div>
  //       </div>
  //     `,
  //   },
  //   points: {
  //     thumbnail:
  //       "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=800&fit=crop",
  //     list: [
  //       {
  //         _id: "video-1",
  //         title: "Cinematic Editing & Storytelling",
  //         description:
  //           "We craft compelling narratives by combining visuals, pacing, and audio in a way that keeps your audience engaged. Ideal for product launches, brand stories, and promotional content.",
  //       },
  //       {
  //         _id: "video-2",
  //         title: "Social Media & Short-Form Content",
  //         description:
  //           "We produce attention-grabbing edits optimized for platforms like Instagram, TikTok, and YouTube Shorts. Fast-paced, trend-aware, and designed for high engagement.",
  //         links: [{ text: "See Social Edits", url: "/examples/social-videos" }],
  //       },
  //       {
  //         _id: "video-3",
  //         title: "Motion Graphics & Animation",
  //         description:
  //           "Enhance your videos with animated logos, titles, lower thirds, and infographics. Our motion designers add visual polish that communicates professionalism and creativity.",
  //       },
  //       {
  //         _id: "video-4",
  //         title: "Color Grading & Sound Design",
  //         description:
  //           "We ensure every frame and every note is polished. Our color grading and sound design process gives your videos a cinematic, broadcast-quality finish.",
  //       },
  //       {
  //         _id: "video-5",
  //         title: "Revisions & Collaboration",
  //         description:
  //           "We work with you iteratively, offering flexible revision rounds and clear communication to ensure the final output aligns perfectly with your expectations.",
  //       },
  //     ],
  //   },
  // },
  // {
  //   _id: "lead-generation",
  //   icon: UserPlus,
  //   title: "Lead Generation",
  //   description:
  //     "Our lead generation service helps you attract and convert potential customers through a combination of landing pages, email funnels, paid ads, and outreach campaigns. We use data-driven techniques to target your ideal audience, build interest, and nurture leads until they're ready to buy. It's not just about getting leads—it's about getting the right ones.",
  //   thumbnail: "/images/services/lead-generation.png",
  //   link: "/services/lead-generation/",
  //   details: {
  //     thumbnail:
  //       "https://images.unsplash.com/photo-1705635821033-30f2f4906c91?w=800&h=600&fit=crop",
  //     title: "Lead Generation",
  //     description: `
  //       <div class="lead-generation-details">
  //         <h3>Strategic Lead Generation That Converts</h3>
  //         <p>We implement <strong>full-funnel lead generation solutions</strong> designed to attract, nurture, and convert high-quality prospects into sales-ready leads. Our comprehensive approach combines cutting-edge technology with proven marketing strategies to deliver <em>marketing-qualified leads (MQLs)</em> that your sales team can confidently pursue.</p>

  //         <h4>Complete Lead Generation Ecosystem:</h4>
  //         <div class="lead-gen-components">
  //           <div class="component">
  //             <h5>🎯 Precision Targeting</h5>
  //             <p>Advanced audience segmentation using demographic, behavioral, and intent data to reach your ideal customer profile</p>
  //           </div>
  //           <div class="component">
  //             <h5>📄 Landing Page Optimization</h5>
  //             <p>High-converting landing pages with A/B tested elements, compelling copy, and optimized conversion paths</p>
  //           </div>
  //           <div class="component">
  //             <h5>📧 Email Nurturing Sequences</h5>
  //             <p>Automated drip campaigns that educate prospects and guide them through the decision-making process</p>
  //           </div>
  //           <div class="component">
  //             <h5>🎨 Lead Magnets & Content Offers</h5>
  //             <p>Valuable resources like whitepapers, webinars, and tools that capture contact information</p>
  //           </div>
  //           <div class="component">
  //             <h5>📞 Targeted Outreach Campaigns</h5>
  //             <p>Personalized email and LinkedIn outreach to decision-makers in your target market</p>
  //           </div>
  //         </div>

  //         <h4>Our Lead Generation Process:</h4>
  //         <ol>
  //           <li><strong>Ideal Customer Profile (ICP) Development:</strong> We analyze your best customers to create detailed buyer personas</li>
  //           <li><strong>Multi-Channel Campaign Strategy:</strong> Develop integrated campaigns across paid ads, content marketing, and outreach</li>
  //           <li><strong>Lead Capture & Qualification:</strong> Implement forms, chatbots, and qualification frameworks</li>
  //           <li><strong>Nurturing & Scoring:</strong> Automated workflows that score and nurture leads based on engagement</li>
  //           <li><strong>Sales Handoff:</strong> Seamless transition of qualified leads to your sales team with complete context</li>
  //         </ol>

  //         <div class="results-metrics">
  //           <h4>Key Performance Indicators We Track:</h4>
  //           <ul>
  //             <li><strong>Lead Quality Score:</strong> BANT qualification and fit scoring</li>
  //             <li><strong>Conversion Rates:</strong> From visitor to lead to customer</li>
  //             <li><strong>Cost Per Lead (CPL):</strong> Optimized across all channels</li>
  //             <li><strong>Lead-to-Customer Rate:</strong> Quality over quantity focus</li>
  //             <li><strong>Sales Cycle Length:</strong> Time from lead to closed deal</li>
  //           </ul>
  //         </div>

  //         <blockquote>
  //           <p>"Effective lead generation isn't about casting the widest net—it's about attracting the right prospects who are genuinely interested in your solution and ready to engage with your sales team."</p>
  //         </blockquote>
  //       </div>
  //     `,
  //   },
  //   points: {
  //     thumbnail:
  //       "https://images.unsplash.com/photo-1699143494459-5d8e398769b7?w=600&h=800&fit=crop",
  //     list: [
  //       {
  //         _id: "lg-1",
  //         title: "Targeted Acquisition Campaigns",
  //         description:
  //           "We develop precision targeting strategies using intent data, firmographic filters, and behavioral triggers to reach your ideal customer profile. Our multi-touch approach combines content offers, paid advertising, and strategic partnerships to attract high-intent prospects into your conversion funnel.",
  //       },
  //       {
  //         _id: "lg-2",
  //         title: "Conversion Funnel Optimization",
  //         description:
  //           "Our team designs and implements staged nurturing workflows that guide prospects through awareness, consideration, and decision phases. Using marketing automation and behavioral triggers, we deliver personalized content experiences that build trust and move prospects toward sales readiness.",
  //       },
  //       {
  //         _id: "lg-3",
  //         title: "Lead Qualification & Scoring",
  //         description:
  //           "We implement systematic lead scoring models based on engagement level, demographic fit, and behavioral indicators. Our qualification process includes initial screening, needs analysis, and BANT (Budget, Authority, Need, Timeline) assessment to ensure sales teams receive properly vetted, sales-ready leads.",
  //       },
  //     ],
  //   },
  // },
  // {
  //   _id: "online-support",
  //   icon: Headphones,
  //   title: "Online Support",
  //   description:
  //     "Our online support service ensures that your digital platforms are always operational and your customers receive timely help. We offer live chat setup, ticketing systems, virtual assistance, and knowledge base management. Whether it's technical support or customer service, we're here to help you stay responsive and reliable.",
  //   thumbnail: "/images/services/online-support.png",
  //   link: "/services/online-support/",
  //   details: {
  //     thumbnail:
  //       "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop",
  //     title: "Online Support",
  //     description: `
  //       <div class="online-support-details">
  //         <h3>24/7 Digital Support Solutions</h3>
  //         <p>We provide comprehensive <strong>digital support solutions</strong> that ensure your customers receive exceptional service around the clock. Our services include <em>helpdesk implementation</em>, <strong>live chat systems</strong>, <strong>knowledge base development</strong>, and <strong>ticketing systems</strong> designed to enhance customer satisfaction while reducing support overhead.</p>

  //         <h4>Complete Support Ecosystem:</h4>
  //         <div class="support-services">
  //           <div class="support-category">
  //             <h5>🎫 Helpdesk & Ticketing</h5>
  //             <ul>
  //               <li>Multi-channel ticket management</li>
  //               <li>Automated ticket routing and prioritization</li>
  //               <li>SLA management and escalation rules</li>
  //               <li>Performance analytics and reporting</li>
  //               <li>Custom workflow configuration</li>
  //             </ul>
  //           </div>
  //           <div class="support-category">
  //             <h5>💬 Live Chat & Messaging</h5>
  //             <ul>
  //               <li>Real-time customer chat support</li>
  //               <li>AI-powered chatbot implementation</li>
  //               <li>Seamless human agent handoffs</li>
  //               <li>Multi-language support capabilities</li>
  //               <li>Mobile-responsive chat widgets</li>
  //             </ul>
  //           </div>
  //           <div class="support-category">
  //             <h5>📚 Knowledge Management</h5>
  //             <ul>
  //               <li>Comprehensive FAQ development</li>
  //               <li>Searchable knowledge base creation</li>
  //               <li>Video tutorial production</li>
  //               <li>Self-service portal design</li>
  //               <li>Content maintenance and updates</li>
  //             </ul>
  //           </div>
  //           <div class="support-category">
  //             <h5>📞 Virtual Assistance</h5>
  //             <ul>
  //               <li>Remote technical support</li>
  //               <li>Customer onboarding assistance</li>
  //               <li>Product training and guidance</li>
  //               <li>Account management support</li>
  //               <li>Multilingual support services</li>
  //             </ul>
  //           </div>
  //         </div>

  //         <h4>Advanced Support Features:</h4>
  //         <div class="advanced-features">
  //           <div class="feature">
  //             <h5>🤖 AI-Powered Automation</h5>
  //             <p>Intelligent chatbots with natural language processing that handle routine inquiries and escalate complex issues to human agents</p>
  //           </div>
  //           <div class="feature">
  //             <h5>📊 Analytics & Insights</h5>
  //             <p>Comprehensive reporting on support metrics, customer satisfaction, and agent performance with actionable insights</p>
  //           </div>
  //           <div class="feature">
  //             <h5>🔗 System Integrations</h5>
  //             <p>Seamless integration with CRM, email marketing, and business management systems for unified customer data</p>
  //           </div>
  //           <div class="feature">
  //             <h5>📱 Omnichannel Support</h5>
  //             <p>Consistent support experience across email, chat, phone, social media, and mobile applications</p>
  //           </div>
  //         </div>

  //         <h4>Support Platform Expertise:</h4>
  //         <p><strong>Helpdesk Solutions:</strong> Zendesk, Freshdesk, Intercom, Help Scout, Custom Solutions</p>
  //         <p><strong>Live Chat Tools:</strong> Intercom, Drift, Crisp, Tawk.to, Custom Chat Systems</p>
  //         <p><strong>Chatbot Platforms:</strong> Dialogflow, Microsoft Bot Framework, Custom AI Solutions</p>
  //         <p><strong>Knowledge Base:</strong> Confluence, Notion, GitBook, Custom Knowledge Systems</p>

  //         <h4>Support Service Levels:</h4>
  //         <div class="service-levels">
  //           <div class="level">
  //             <h5>🥉 Essential Support</h5>
  //             <p>Basic ticketing system and knowledge base setup with email-based support</p>
  //           </div>
  //           <div class="level">
  //             <h5>🥈 Professional Support</h5>
  //             <p>Live chat integration, AI chatbots, and comprehensive knowledge management</p>
  //           </div>
  //           <div class="level">
  //             <h5>🥇 Enterprise Support</h5>
  //             <p>24/7 managed support services with dedicated agents and custom integrations</p>
  //           </div>
  //         </div>

  //         <blockquote>
  //           <p>"Exceptional customer support isn't just about solving problems—it's about creating positive experiences that build lasting relationships and drive customer loyalty."</p>
  //         </blockquote>

  //         <div class="support-metrics">
  //           <h4>Key Performance Indicators We Track:</h4>
  //           <ul>
  //             <li><strong>First Response Time:</strong> Average time to initial customer contact</li>
  //             <li><strong>Resolution Time:</strong> Average time to complete issue resolution</li>
  //             <li><strong>Customer Satisfaction (CSAT):</strong> Post-interaction satisfaction scores</li>
  //             <li><strong>Ticket Volume Trends:</strong> Patterns in support request types and frequency</li>
  //             <li><strong>Self-Service Success Rate:</strong> Percentage of issues resolved through knowledge base</li>
  //           </ul>
  //         </div>
  //       </div>
  //     `,
  //   },
  //   points: {
  //     thumbnail:
  //       "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=800&fit=crop",
  //     list: [
  //       {
  //         _id: "os-1",
  //         title: "Helpdesk & Ticketing Systems",
  //         description:
  //           "We implement and configure comprehensive helpdesk solutions like Zendesk and Freshdesk to streamline customer support operations. Our setup includes customized ticket workflows, SLA management, escalation rules, and integration with communication channels for efficient issue resolution.",
  //         links: [{ text: "System Options", url: "/options/support" }],
  //       },
  //       {
  //         _id: "os-2",
  //         title: "Live Chat & Chatbot Implementation",
  //         description:
  //           "We deploy and customize live chat solutions with AI-powered chatbots for 24/7 customer assistance. Our implementation includes conversational design, integration with knowledge bases, handoff protocols to human agents, and performance analytics to continuously improve response quality.",
  //       },
  //       {
  //         _id: "os-3",
  //         title: "Knowledge Management Systems",
  //         description:
  //           "We develop structured knowledge bases and FAQ systems that enable self-service support. Our approach includes content organization, search optimization, analytics tracking, and maintenance processes to ensure support content remains accurate, accessible, and effective in reducing support tickets.",
  //       },
  //     ],
  //   },
  // },
  {
    _id: "data-entry",
    icon: Database,
    title: "Data Entry Services",
    description:
      "Reliable and efficient data entry solutions designed to improve accuracy, streamline workflows, and support informed decision-making.",
    thumbnail: "/images/services/data-entry.png",
    link: "/services/data-entry",
    details: {
      thumbnail:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      title: "Comprehensive Data Entry & Management Solutions",
      description: `
        <p>Our data entry services deliver precise, scalable, and cost-effective solutions tailored to your business needs. From digitizing handwritten documents to managing structured datasets, we ensure data consistency and operational efficiency.</p>

        <h3>Why Choose Our Data Entry Services?</h3>
        <ul>
          <li><strong>99.9% Accuracy Rate:</strong> Rigorous quality assurance processes ensure high data precision</li>
          <li><strong>Fast Turnaround:</strong> Timely delivery without compromising on quality</li>
          <li><strong>Secure Processing:</strong> GDPR-compliant workflows with advanced data protection protocols</li>
          <li><strong>Scalable Solutions:</strong> Capable of managing both small-scale and enterprise-level data projects</li>
          <li><strong>Cost-Effective:</strong> Significantly reduce operational costs while maintaining quality</li>
        </ul>

        <h3>Industries We Serve</h3>
        <p>We serve a broad range of industries including Healthcare, E-commerce, Real Estate, Financial Services, Legal, Education, and more.</p>
      `,
    },
    points: {
      thumbnail:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=800&fit=crop",
      list: [
        {
          _id: "data-entry-management",
          title: "Data Entry & Management",
          description:
            "Accurate and structured data entry from handwritten, scanned, and digital sources. Includes data validation, cleansing, and formatting to maintain database integrity.",
        },
        {
          _id: "data-processing",
          title: "Data Processing",
          description:
            "Comprehensive data transformation services including format conversion, normalization, and migration across Excel, CSV, XML, JSON, and database platforms.",
        },
        {
          _id: "online-form-processing",
          title: "Online Form Processing",
          description:
            "Real-time form processing for surveys, registrations, applications, and feedback forms. Includes data extraction, validation, and integration into structured databases.",
        },
        {
          _id: "document-digitization",
          title: "Document Digitization",
          description:
            "Transform physical documents into searchable digital assets using OCR technology, metadata tagging, and enhanced archival systems.",
        },
        {
          _id: "data-mining",
          title: "Data Mining & Web Research",
          description:
            "Extract actionable insights from online platforms through structured web scraping, lead generation, and competitive intelligence gathering.",
        },
        {
          _id: "catalog-processing",
          title: "Catalog & Product Data Entry",
          description:
            "Detailed e-commerce product listing services including attribute entry, pricing, descriptions, and media handling for platforms like Amazon, eBay, and Shopify.",
        },
      ],
    },
  },
  {
    _id: "back-office-support",
    icon: Briefcase,
    title: "Back Office Support",
    description:
      "Streamlined and scalable back office support to enhance operational efficiency and reduce administrative burdens.",
    thumbnail: "/images/services/back-office-support.png",
    link: "/services/back-office-support",
    details: {
      thumbnail:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
      title: "Complete Back Office Support Solutions",
      description: `
        <p>Our back office solutions empower organizations to focus on core business functions by outsourcing routine tasks to a dedicated and experienced team. We deliver flexible, reliable, and secure services tailored to your business needs.</p>

        <h3>Key Benefits</h3>
        <ul>
          <li><strong>Cost Reduction:</strong> Optimize costs with efficient off-site staffing models</li>
          <li><strong>24/7 Support:</strong> Global delivery model offering continuous assistance</li>
          <li><strong>Scalable Teams:</strong> Easily scale resources up or down based on demand</li>
          <li><strong>Expert Professionals:</strong> Experienced staff across administrative, technical, and analytical functions</li>
          <li><strong>Process Optimization:</strong> Streamlined SOPs to enhance accuracy and speed</li>
        </ul>

        <h3>Service Guarantee</h3>
        <p>We ensure 99.5% uptime, proactive communication, and strict confidentiality across all services and deliverables.</p>
      `,
    },
    points: {
      thumbnail:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=800&fit=crop",
      list: [
        {
          _id: "web-research",
          title: "Web Research",
          description:
            "Extensive research services for market trends, competitors, product analysis, and lead sourcing—delivered with validated, up-to-date information.",
          links: [
            {
              text: "Research Services",
              url: "/services/web-research",
            },
          ],
        },
        {
          _id: "content-moderation",
          title: "Content Moderation",
          description:
            "Efficient monitoring and moderation of user-generated content to enforce guidelines, protect brand image, and maintain platform integrity.",
        },
        {
          _id: "administrative-support",
          title: "Administrative Support",
          description:
            "Virtual administrative services including email management, scheduling, data entry, and documentation to streamline day-to-day tasks.",
        },
        {
          _id: "hr-admin",
          title: "HR Administration",
          description:
            "End-to-end HR support including onboarding, payroll, benefits administration, and compliance tracking to improve workforce efficiency.",
        },
        {
          _id: "recruiting-services",
          title: "Recruiting Services",
          description:
            "Full-cycle recruitment solutions from talent sourcing to candidate placement, tailored to meet your industry-specific hiring needs.",
        },
        {
          _id: "accounting-bookkeeping",
          title: "Accounting & Bookkeeping",
          description:
            "Accurate financial management services including bookkeeping, A/P & A/R, tax filing, and monthly financial reports by certified professionals.",
        },
        {
          _id: "data-analytics",
          title: "Data Analytics & Reporting",
          description:
            "Turn raw business data into meaningful insights through customized dashboards, trend analysis, and performance metrics.",
        },
        {
          _id: "technical-support",
          title: "Technical Help & Desk Support",
          description:
            "Multilevel IT support including troubleshooting, maintenance, and user guidance to ensure operational continuity.",
        },
        {
          _id: "call-support",
          title: "Call Support Services",
          description:
            "Inbound and outbound call center services including customer support, appointment booking, and telesales with multilingual representatives.",
        },
      ],
    },
  },
  {
    _id: "business-solutions",
    icon: Briefcase,
    title: "Business Solutions",
    description:
      "We offer custom digital solutions to streamline your operations, automate workflows, and boost productivity. Our services include CRM setup, ERP integration, custom dashboards, and digital transformation consulting. Whether you're a startup or an established business, we help you adopt the right tools to scale efficiently.",
    thumbnail: "/images/services/business-solutions.png",
    link: "/services/business-solutions/",
    details: {
      thumbnail:
        "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&h=600&fit=crop",
      title: "Business Solutions",
      description: `
        <div class="business-solutions-details">
          <h3>Digital Transformation That Drives Growth</h3>
          <p>We provide comprehensive <strong>digital transformation services</strong> designed to streamline operations, automate workflows, and accelerate business growth. Our solutions include <em>CRM implementation</em>, <strong>workflow automation</strong>, <strong>ERP integration</strong>, and <strong>custom business application development</strong> tailored to optimize your unique operational requirements.</p>

          <h4>Complete Business Solution Portfolio:</h4>
          <div class="solution-categories">
            <div class="solution-category">
              <h5>🔄 Workflow Automation</h5>
              <ul>
                <li>Process mapping and optimization</li>
                <li>Automated task routing and approval workflows</li>
                <li>Document management systems</li>
                <li>Notification and alert systems</li>
                <li>Integration with existing tools</li>
              </ul>
            </div>
            <div class="solution-category">
              <h5>🏢 CRM & ERP Systems</h5>
              <ul>
                <li>Salesforce implementation and customization</li>
                <li>HubSpot setup and automation</li>
                <li>Odoo ERP deployment</li>
                <li>Custom CRM development</li>
                <li>Data migration and integration</li>
              </ul>
            </div>
            <div class="solution-category">
              <h5>📊 Business Intelligence</h5>
              <ul>
                <li>Custom dashboard development</li>
                <li>Real-time analytics and reporting</li>
                <li>KPI tracking and visualization</li>
                <li>Data warehouse setup</li>
                <li>Predictive analytics implementation</li>
              </ul>
            </div>
            <div class="solution-category">
              <h5>🛠️ Custom Applications</h5>
              <ul>
                <li>Inventory management systems</li>
                <li>Project management tools</li>
                <li>Employee management platforms</li>
                <li>Customer portal development</li>
                <li>API integrations and connectors</li>
              </ul>
            </div>
          </div>

          <h4>Digital Transformation Process:</h4>
          <div class="transformation-process">
            <div class="process-step">
              <h5>1. 🔍 Assessment & Analysis</h5>
              <p>Comprehensive audit of current systems, processes, and technology stack to identify optimization opportunities</p>
            </div>
            <div class="process-step">
              <h5>2. 📋 Strategy Development</h5>
              <p>Custom digital transformation roadmap aligned with business objectives and growth goals</p>
            </div>
            <div class="process-step">
              <h5>3. 🛠️ Implementation</h5>
              <p>Phased rollout of solutions with minimal disruption to ongoing operations</p>
            </div>
            <div class="process-step">
              <h5>4. 📈 Training & Adoption</h5>
              <p>Comprehensive user training and change management to ensure successful adoption</p>
            </div>
            <div class="process-step">
              <h5>5. 🔧 Optimization & Support</h5>
              <p>Ongoing monitoring, optimization, and support to maximize ROI and system performance</p>
            </div>
          </div>

          <h4>Key Benefits of Our Business Solutions:</h4>
          <ul>
            <li><strong>Increased Efficiency:</strong> Automate repetitive tasks and streamline workflows</li>
            <li><strong>Better Decision Making:</strong> Real-time data insights and comprehensive reporting</li>
            <li><strong>Cost Reduction:</strong> Eliminate manual processes and reduce operational overhead</li>
            <li><strong>Scalability:</strong> Solutions that grow with your business needs</li>
            <li><strong>Integration:</strong> Seamless connectivity between existing and new systems</li>
          </ul>

          <div class="technology-partners">
            <h4>Technology Partners & Platforms:</h4>
            <p><strong>CRM/ERP:</strong> Salesforce, HubSpot, Odoo, Microsoft Dynamics, Zoho</p>
            <p><strong>Automation:</strong> Zapier, Microsoft Power Automate, Custom APIs</p>
            <p><strong>Analytics:</strong> Tableau, Power BI, Google Analytics, Custom Dashboards</p>
            <p><strong>Cloud Platforms:</strong> AWS, Google Cloud, Microsoft Azure</p>
          </div>

          <blockquote>
            <p>"Digital transformation isn't just about technology—it's about reimagining how your business operates to create sustainable competitive advantages and exceptional customer experiences."</p>
          </blockquote>
        </div>
      `,
    },
    points: {
      thumbnail:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=800&fit=crop",
      list: [
        {
          _id: "bs-1",
          title: "Workflow Automation Systems",
          description:
            "We analyze business processes to identify automation opportunities and implement customized workflow solutions. Our automation systems integrate with existing tools to streamline operations, reduce manual tasks, minimize errors, and improve overall operational efficiency.",
        },
        {
          _id: "bs-2",
          title: "CRM & ERP Integration",
          description:
            "We implement and customize CRM/ERP solutions like Salesforce, HubSpot, and Odoo to centralize business data. Our integration services connect disparate systems, synchronize data across platforms, and create unified dashboards for comprehensive business intelligence.",
        },
        {
          _id: "bs-3",
          title: "Custom Business Application Development",
          description:
            "We develop tailored software solutions to address unique business challenges, including inventory management systems, custom reporting tools, and specialized operational platforms. Our applications are built to integrate with existing infrastructure while providing scalable solutions for business growth.",
        },
      ],
    },
  },
];
