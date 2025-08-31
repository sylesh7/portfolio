import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  liveUrl?: string;
  codeUrl: string;
};

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
      <CardHeader>
        <CardTitle className="font-headline">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription>{project.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-start gap-4">
        {project.liveUrl && (
          <Button asChild variant="outline">
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2" /> Live Demo
            </Link>
          </Button>
        )}
        <Button asChild variant="ghost">
          <Link href={project.codeUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2" /> View Code
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
