import Categories from "components/UI/Categories/Categories";
import Banner from "../../UI/Banner/Banner";
import TopRates from "components/UI/TopRates/TopRates";
import Review from "components/UI/Review/Review";
import {
  UseGetAllCategories,
  UseGetBloggers,
  UseGetRatings,
} from "services/blogger.service";

export function Main() {
  const { data: bloggersData } = UseGetBloggers({
    queryParams: {
      page: 1,
    },
  });

  const { data: reviews } = UseGetRatings({
    queryParams: "",
  });

  const { data: categories } = UseGetAllCategories({
    queryParams: "",
  });

  return (
    <main>
      <Banner />
      <Categories categories={categories} />
      <TopRates bloggersData={bloggersData} />
      <Review reviews={reviews} />
    </main>
  );
}
