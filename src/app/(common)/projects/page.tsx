import { projects } from "@/assets/data/projects";
import { sectors } from "@/assets/data/sectors";
import ProjectsTabSection from "@/components/(common)/(projects-page)/ProjectsTabSection";
import {
  Description,
  SectionTitle,
  Subtitle,
  Title,
} from "@/components/ui/SectionTitle";
import {
  Tabs,
  TabsContent,
  TabsItem,
  TabsList,
  TabsTrigger,
} from "@/components/ui/Tabs";

export const metadata = {
  title: "Projects | Rivar Trims",
  description:
    "Rivar Trims | Our projects range from small-scale renovations to large-scale construction projects. We're dedicated to delivering exceptional results that make a difference in the digital world.",
};

const ProjectsPage = () => {
  return (
    <main>
      <section className="intersection-fade-in py-16 md:py-24">
        <div className="container">
          <SectionTitle>
            <Subtitle>Our Works</Subtitle>
            <Title>Projects</Title>
            <Description>
              Building the future of the construction industry, one project at a
              time.
            </Description>
          </SectionTitle>
          <div>
            <Tabs value="all">
              <TabsList className="mb-8 justify-start gap-6 md:mb-12">
                <TabsTrigger value="all">
                  <span className="font-semibold capitalize">All</span>
                </TabsTrigger>
                {sectors?.map((sector) => (
                  <TabsTrigger key={sector._id} value={sector._id}>
                    <span className="font-semibold capitalize">
                      {sector?.title}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
              <TabsContent>
                <TabsItem value="all">
                  <ProjectsTabSection projects={projects} />
                </TabsItem>
                {sectors?.map((sector) => {
                  const filtered_projects =
                    projects?.filter(
                      (project) => project?.sector === sector._id,
                    ) || [];
                  return (
                    <TabsItem key={sector._id} value={sector._id}>
                      <ProjectsTabSection projects={filtered_projects} />
                    </TabsItem>
                  );
                })}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
