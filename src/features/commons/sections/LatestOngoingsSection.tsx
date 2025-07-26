import React from "react";
import BlogCard from "@/features/blogs/components/BlogCard";
import SectionIntro from "@/features/commons/components/sections/SectionIntro";
import NotFoundBlogs from "@/features/blogs/components/NotFoundBlogs";

interface LatestOngoingsSectionProps {
  array: string[]; // Fix the type according the data structure
}

export default function LatestOngoingsSection({
  array,
}: LatestOngoingsSectionProps) {
  const hasLatestOngoings = array?.length > 0 && array;
  return (
    <section className="flex flex-col mx-auto justify-center gap-9 w-full">
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
