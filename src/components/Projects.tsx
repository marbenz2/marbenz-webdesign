import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Github, Globe } from "lucide-react";
import projects from "../data/projects.json";

const Projects = () => {
  return (
    <Carousel className="flex flex-col w-full lg:self-end self-center gap-2 px-2 relative">
      <h2 className="text-lg md:text-2xl font-semibold text-center">
        Projekte
      </h2>
      <CarouselPrevious className="absolute top-4 left-2 w-12 h-6" />
      <CarouselNext className="absolute top-4 right-2 w-12 h-6" />
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem className="flex justify-center" key={project.id}>
            <Card className="h-fit max-w-96">
              <CardHeader className="text-xl font-semibold">
                {project.name}
                <CardDescription className="text-sm md:text-md">
                  {project.type}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-8">
                <img
                  src={`/images${project.image}`}
                  alt={`Image of the ${project.name} Website`}
                  width={200}
                  className="w-full"
                />
                <div className="flex flex-col gap-4">
                  <p className="text-sm md:text-md list-disc list-inside whitespace-pre-wrap">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.badges.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 items-end">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Github />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Globe />
                  </a>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Projects;
