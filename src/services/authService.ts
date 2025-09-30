import axios from "axios";

interface RegisterProp {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
}

interface IResponse {
  status: "success" | "fail" | "error";
  code: number;
  message?: string;
  data?: any;
}

const API_URL =
  process.env.REACT_APP_API_URL || "https://price-tag-api.esanuniteddfw.com";

// Implement service methods based on your API
export const exampleMethod = async () => {
  // Implementation based on your API
};

export const registrationService = async (
  data: RegisterProp
): Promise<IResponse> => {
  try {
    const payload = {
      firstname: data.firstName,
      lastname: data.lastName,
      email: data.email,
      phone: data.phoneNumber,
      password: data.password,
      username: data.username,
    };

    const res = await axios.post(`${API_URL}/v1/auth/register`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status !== 200) {
      return {
        status: "fail",
        code: res.status || 400,
        message: res.data.error,
      };
    }

    return {
      status: "success",
      code: 200,
      message: "Registration successful",
      data: res.data,
    };
  } catch (error: any) {
    console.log({ error: error.message });
    return {
      status: "error",
      code: error.response?.status || 500,
      message: error.response?.data?.message || error.message,
    };
  }
};

export const loginService = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<IResponse> => {
  try {
    const res = await axios.post(`${API_URL}/v1/auth/login`, {
      headers: {
        "Content-Type": "application/json",
      },
      data: { email, password },
    });

    if (res.status !== 200) {
      return {
        status: "fail",
        code: res.status || 400,
        message: res.data.error,
      };
    }

    return {
      status: "success",
      code: 200,
      message: "Login successful",
      data: res.data,
    };
  } catch (error: any) {
    return {
      status: "error",
      code: 500,
      message: error.message || "Internal server error",
      data: error,
    };
  }
};
