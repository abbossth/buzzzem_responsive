import { useMutation, useQuery } from "react-query";
import { request } from "./http-client";

const bloggerService = {
  getBloggers: (queryParams) => request.get(`/bloggers/?${queryParams}`),
  getSingleBloggers: (id) => request.get(`/bloggers/${id}/`),
  getCategories: (queryParams) =>
    request.get("/categories/total-bloggers/", queryParams),
  getAllCategories: (queryParams) => request.get("/categories/", queryParams),
  getPlatforms: (queryParams) =>
    request.get("/platforms/total-accounts/", queryParams),
  getRatingsCountRange: (queryParams) =>
    request.get("/ratings/count-range/", queryParams),
  getRatings: (queryParams) => request.get("/ratings/", queryParams),
  getSingleRatings: (id) => request.get(`/ratings/${id}/`),
  createComments: (queryParams) => request.post("/ratings/", queryParams),
};

export const UseGetBloggers = ({ queryParams }) => {
  return useQuery(["GET_BLOGGERS", queryParams], async () => {
    return await bloggerService.getBloggers(queryParams).then((res) => {
      return res.results;
    });
  });
};
export const UseGetBloggersMain = ({ queryParams, debouncedSearchTerm }) => {
  return useQuery(
    ["GET_BLOGGERS_MAIN", queryParams],
    async () => {
      return await bloggerService.getBloggers(queryParams).then((res) => {
        return res.results;
      });
    },
    {
      enabled: !!debouncedSearchTerm,
    }
  );
};

export const UseGetSingleBloggers = ({ id }) => {
  return useQuery(["GET_SINGLE_BLOGGERS", id], async () => {
    return await bloggerService.getSingleBloggers(id).then((res) => res);
  });
};

export const UseGetCategories = ({ queryParams }) => {
  return useQuery(["GET_CATEGORIES", queryParams], async () => {
    return await bloggerService.getCategories(queryParams).then((res) => {
      return res.results;
    });
  });
};

export const UseGetAllCategories = ({ queryParams }) => {
  return useQuery(["GET_ALL_CATEGORIES", queryParams], async () => {
    return await bloggerService.getAllCategories(queryParams).then((res) => {
      return res.results;
    });
  });
};

export const UseGetPlatforms = ({ queryParams }) => {
  return useQuery(["GET_PLATFORMS", queryParams], async () => {
    return await bloggerService.getPlatforms(queryParams).then((res) => {
      return res.results;
    });
  });
};
export const UseGetRatingsCountRange = ({ queryParams }) => {
  return useQuery(["GET_RATINGS_COUNT_RANGE", queryParams], async () => {
    return await bloggerService
      .getRatingsCountRange(queryParams)
      .then((res) => res);
  });
};

export const UseGetRatings = ({ queryParams }) => {
  return useQuery(["GET_RATINGS", queryParams], async () => {
    return await bloggerService.getRatings(queryParams).then((res) => {
      return res.results;
    });
  });
};

export const UseGetSingleRatings = ({ id }) => {
  return useQuery(["GET_SINGLE_RATINGS", id], async () => {
    return await bloggerService.getSingleRatings(id).then((res) => res.results);
  });
};

export const UseCreateComments = (mutationSettings) => {
  return useMutation(
    (data) => bloggerService.createComments(data),
    mutationSettings
  );
};
