import * as React from "react";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import { GithubIcon, GlobeIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";

type ProjectProps = {
  id: number;
  name: string;
  type: string;
  image: string;
  description: string;
  badges: string[];
  github: string;
  live: string;
  reference?: {
    name: string;
    link: string;
  };
};

export function ProjectDetails({ project }: { project: ProjectProps }) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Card
            key={project.id + project.name}
            className="h-fit w-full md:w-[calc(50%-0.25rem)] cursor-pointer"
          >
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
                height={200}
                className="w-full h-[150px] object-cover object-top"
              />
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle>{project.name}</DialogTitle>
            <DialogDescription>{project.type}</DialogDescription>
          </DialogHeader>
          <img
            src={`/images${project.image}`}
            alt={`Image of the ${project.name} Website`}
            width={200}
            height={200}
            className="w-full object-cover"
          />
          <div className="flex flex-col gap-4">
            <p className="text-sm md:text-md list-disc list-inside whitespace-pre-wrap">
              {project.description}{" "}
              {project.reference && (
                <a
                  className="text-contrast"
                  href={project.reference.link}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {project.reference.name}
                </a>
              )}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.badges.map((badge) => (
                <Badge key={badge}>{badge}</Badge>
              ))}
            </div>
          </div>
          <div className="flex gap-4 items-end">
            <a href={project.github} target="_blank" rel="noreferrer noopener">
              <GithubIcon />
            </a>
            <a href={project.live} target="_blank" rel="noreferrer noopener">
              <GlobeIcon />
            </a>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Card
          key={project.id + project.name}
          className="h-fit w-full sm:w-[calc(50%-0.25rem)] cursor-pointer"
        >
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
              height={200}
              className="w-full h-[150px] object-cover"
            />
          </CardContent>
        </Card>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{project.name}</DrawerTitle>
          <DrawerDescription>{project.type}</DrawerDescription>
        </DrawerHeader>
        <ScrollArea className="h-[500px]">
          <div className="flex flex-col p-4 gap-8">
            <img
              src={`/images${project.image}`}
              alt={`Image of the ${project.name} Website`}
              width={200}
              height={200}
              className="w-full object-cover"
            />
            <div className="flex flex-col gap-4">
              <p className="text-sm md:text-md list-disc list-inside whitespace-pre-wrap">
                {project.description}{" "}
                {project.reference && (
                  <a
                    className="text-contrast"
                    href={project.reference.link}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {project.reference.name}
                  </a>
                )}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.badges.map((badge) => (
                  <Badge key={badge}>{badge}</Badge>
                ))}
              </div>
            </div>
            <div className="flex gap-4 items-end">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
              >
                <GithubIcon />
              </a>
              <a href={project.live} target="_blank" rel="noreferrer noopener">
                <GlobeIcon />
              </a>
            </div>
          </div>
        </ScrollArea>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
