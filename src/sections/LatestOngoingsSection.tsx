import React from "react";
import BlogCard from "@/components/blog/BlogCard";
import SectionIntro from "@/components/sections/SectionIntro";
import NotFoundBlogs from "@/components/blog/NotFoundBlogs";

interface LatestOngoingsSectionProps {
  array: string[]; // Fix the type according the data structure
}

export default function LatestOngoingsSection({
  array,
}: LatestOngoingsSectionProps) {
  const hasLatestOngoings = array?.length > 0 && array;
  return (
    <section className="flex flex-col my-50 mx-auto justify-between gap-9 w-full px-48">
      <SectionIntro
        title="Latest Ongoing Projects"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina."
        buttonText="Read All Blogs"
      />
      {hasLatestOngoings ? (
        <div className="flex w-full lg:justify-between justify-center gap-4 flex-wrap">
          {array.map((arrayItem) => (
            <BlogCard
              key={arrayItem}
              userName="John Doe"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              date="January 1, 2023"
            />
          ))}
        </div>
      ) : (
        <NotFoundBlogs />
      )}
    </section>
  );
}
