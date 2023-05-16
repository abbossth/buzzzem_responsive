import React from "react";
import styles from "./BloggerById.module.scss";
import BloggerMain from "components/UI/BloggerMain/BloggerMain";
import CBreadCrumbs from "components/UI/CBreadCrumbs/CBreadCrumbs";
import BloggerSocial from "components/UI/BloggerSocial/BloggerSocial";
import Reviews from "components/UI/Reviews/Reviews";
import Comments from "components/UI/Comments/Comments";
import {
  UseGetSingleBloggers,
  UseGetSingleRatings,
} from "services/blogger.service";
import { useRouter } from "next/router";

const breadcrumbItems = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "/blogger",
    label: "Bloggers",
  },
  {
    label: "Nozima Musaboyeva",
  },
];

const BloggerById = () => {
  const { query } = useRouter();
  const { data: blogger } = UseGetSingleBloggers({
    id: query.id,
  });

  const { data: rating } = UseGetSingleRatings({
    id: query.id,
  });

  return (
    <>
      <div className={styles.bloggerSingle}>
        <CBreadCrumbs items={breadcrumbItems} />
        <BloggerMain
          image={blogger?.image}
          gender={blogger?.gender}
          age={blogger?.age}
          full_name={blogger?.full_name}
          country={blogger?.country}
          languages={blogger?.languages}
          avg_rate={blogger?.avg_rate}
          total_rates={blogger?.total_rates}
        />
        <BloggerSocial />
        <Reviews />
        <Comments id={blogger?.id} />
      </div>
    </>
  );
};

export default BloggerById;
