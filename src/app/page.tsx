import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-1 md:p-4">
      <section className="mx-auto w-full max-w-2xl space-y-7 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between gap-x-4">
              <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
              <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground">
                {RESUME_DATA.contact.email ? (
                  <Button
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`mailto:${RESUME_DATA.contact.email}`} title="Email">
                      <MailIcon className="size-4" />
                    </a>
                  </Button>
                ) : null}
                {RESUME_DATA.contact.tel ? (
                  <Button
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`tel:${RESUME_DATA.contact.tel}`} title="Phone">
                      <PhoneIcon className="size-4" />
                    </a>
                  </Button>
                ) : null}
                {RESUME_DATA.contact.social.map((social) => (
                  <Button
                    key={social.name}
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={social.url} title={social.name} target="_blank" rel="noopener noreferrer">
                      <social.icon className="size-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {RESUME_DATA.about ? (
              <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
                {RESUME_DATA.about}
              </p>
            ) : null}

            {/* Location, Phone & Email in the same row with icons */}
            <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1 font-mono text-xs text-muted-foreground">
              {RESUME_DATA.location ? (
                <a
                  className="inline-flex items-center gap-x-1.5 hover:underline"
                  href={RESUME_DATA.locationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GlobeIcon className="size-3" />
                  {RESUME_DATA.location}
                </a>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <a
                  className="inline-flex items-center gap-x-1 hover:underline"
                  href={`tel:${RESUME_DATA.contact.tel}`}
                >
                  <PhoneIcon className="size-3" />
                  {RESUME_DATA.contact.tel}
                </a>
              ) : null}
              {RESUME_DATA.contact.email ? (
                <a
                  className="inline-flex items-center gap-x-1 hover:underline"
                  href={`mailto:${RESUME_DATA.contact.email}`}
                >
                  <MailIcon className="size-3" />
                  {RESUME_DATA.contact.email}
                </a>
              ) : null}
            </div>
          </div>
        </div>
        <Section>
          <h2 className="-mt-3 text-xl font-bold">About</h2>
          <p className="-mt-3 text-pretty font-mono  text-sm text-muted-foreground">
            {RESUME_DATA.summary}
          </p>
        </Section>
        <Section>
          <h2 className="-mt-3 text-xl font-bold">Work Experience</h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader className="mt-0">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline" href={work.link}>
                        {work.company}
                      </a>

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {work.start} - {work.end ?? "Present"}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs text-muted-foreground  ">
                  {work.description}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="-mt-3 text-xl font-bold">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2">{education.degree}</CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className=" -mt-2 mb-0 text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {RESUME_DATA.skills.map((skill) => {
              return (
                <p
                  key={skill}
                  className="text-blakc rounded-lg bg-[#f3f4f6] px-3 py-1 text-sm font-medium opacity-90 shadow-lg"
                >
                  {skill}
                </p>
              );
            })}
          </div>
        </Section>
        <Section className="print-force-new-page1 scroll-mb-16">
          <h2 className="-mt-0 text-xl font-bold">Projects</h2>
            <p className="text-sm text-muted-foreground mb-3">
            Click on any project to see its overview or{" "}
            <a
              href='https://ali-umed.netlify.app/'
              className="underline hover:text-primary font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              click here
            </a>
          </p>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>
      </section>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
