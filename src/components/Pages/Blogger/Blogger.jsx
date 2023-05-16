import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import FilterBlogger from "components/UI/FilterBlogger/FilterBlogger";
import BloggerCards from "components/UI/BloggerCards/BloggerCards";
import {
  UseGetBloggers,
  UseGetCategories,
  UseGetPlatforms,
  UseGetRatingsCountRange,
} from "services/blogger.service";
import { useSelector } from "react-redux";
import { useDebounce } from "utils/useDebounce";
import CRating from "components/UI/Rating/Rating";

const drawerWidth = 260;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: "100%",
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: "-80px",
    }),
  })
);

export default function Blogger() {
  const open = useSelector((state) => state.sidebar.sidebar);
  const [checkedCategory, setCheckedCategory] = useState([]);
  const [checkedPlatform, setCheckedPlatform] = useState([]);
  const [checkedRating, setCheckedRating] = useState([]);
  const [select, setSelect] = useState({
    age: "",
    language: "",
    location: "",
  });
  const [gender, setGender] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const { data: bloggersFilter } = UseGetBloggers({
    queryParams: "",
  });

  const queryParams = Object.entries({
    full_name: debouncedSearchTerm,
    gender,
    age: "",
    language: "",
    country: select.location,
    category: checkedCategory.join(","),
    platform: checkedPlatform.join(","),
    rating: checkedRating.join(","),
  })
    .filter(([key, value]) => value !== "")
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");

  const { data: bloggersData } = UseGetBloggers({
    queryParams,
  });

  const languagesOption = [
    ...new Set(
      bloggersFilter
        ?.map((blogger) => blogger.languages.map((el) => el?.short_form))
        .flat()
    ),
  ];

  const CountrySelect = [...new Set(bloggersFilter?.map((el) => el.country))];

  const { data: CategoriesOption } = UseGetCategories({
    queryParams: "",
  });

  const { data: PlatformsOption } = UseGetPlatforms({
    queryParams: "",
  });

  const { data: RatingCountRangeOption } = UseGetRatingsCountRange({
    queryParams: "",
  });

  const ratingOptions = (options) => {
    const optionArr = [];
    for (let range in options) {
      optionArr.push({
        name: <CRating value={+range.split("_")?.[2] / 10} name="read-only" />,
        id: `${+range.split("_")?.[2] / 10}`,
        count: options[range],
      });
    }
    return optionArr;
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            padding: "4.25rem 0",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <FilterBlogger
          select={select}
          setSelect={setSelect}
          languagesOption={languagesOption}
          CountrySelect={CountrySelect}
          setGender={setGender}
          gender={gender}
          CategoriesOption={CategoriesOption}
          ratingOptions={ratingOptions(RatingCountRangeOption)}
          checkedCategory={checkedCategory}
          checkedPlatform={checkedPlatform}
          checkedRating={checkedRating}
          setCheckedCategory={setCheckedCategory}
          setCheckedPlatform={setCheckedPlatform}
          setCheckedRating={setCheckedRating}
          PlatformsOption={PlatformsOption}
        />
      </Drawer>
      <Main open={open}>
        <BloggerCards
          open={open}
          bloggers={bloggersData}
          setSearchTerm={setSearchTerm}
        />
      </Main>
    </Box>
  );
}
