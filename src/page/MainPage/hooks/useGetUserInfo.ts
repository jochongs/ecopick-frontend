import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../util/axiosInstance";
import { useEffect } from "react";
import type { AxiosError } from "axios";

type User = {
  member_name: string;
  point: number;
};

export default function useGetUserInfo() {
  const query = useQuery<User, AxiosError>({
    queryKey: ["user-info"],
    async queryFn() {
      const response = await axiosInstance.post<User>("/members");
      console.log(response.data);
      return response.data;
    },
    staleTime: 0,
    retry: 0,
    gcTime: 0,
    placeholderData: (prev, prevQuery) => prev,
  });

  useEffect(() => {
    if (!query.error) {
      return;
    }

    const status = query.error.status;

    if (status !== 200) {
      alert("알 수 없는 에러가 발생했습니다.");
    }
  }, [query.error]);

  return query;
}
