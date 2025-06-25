import type { Dispatch, ReactNode, SetStateAction } from "react";

/**
 * State를 변경하는 set함수 타입 정의
 */
export type SetState<T = any> = Dispatch<SetStateAction<T>>;

/**
 * 자식 요소를 가지는 컴포넌트의 Props 정의
 */
export type StrictPropsWithChildren<T = unknown, U = ReactNode> = T & {
  /**
   * 자식 요소
   */
  children: U;
};
