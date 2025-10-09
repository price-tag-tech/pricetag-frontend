import {IResponse} from '../types'

const API_URL = `${process.env.REACT_APP_API_URL}/v1`;
const AUTH_TOKEN = localStorage.getItem("token");

// Implement service methods based on your API
export const myStores = async (): Promise<IResponse> => {
  try {
    const response = await fetch(`${API_URL}/stores`, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
    });

    if (!response.ok) throw new Error("Failed to load stores");

    const res = await response.json();

    if (res.data?.length === 0)
      return {
        status: "success",
        code: 404,
        message: "You have not created any store yet",
        data: [],
      };

    return {
      status: "success",
      code: 200,
      data: res.data,
    };
  } catch (error: any) {
    return {
      status: "error",
      code: 500,
      message: error.message || "Something went wrong",
    };
  }
};
