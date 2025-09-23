import { createSlice, type PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError, type AxiosResponse } from "axios";

interface IAuthState {
  token: string;
  tokenExpiration: number | null;
  isLoading: boolean;
  isRejected: boolean;
  isFulfilled: boolean;
  isLoggingOut: boolean;
}

interface AuthResponse {
  token: string;
  user: { id: string; email: string; role: string; name: string };
}

const initialState: IAuthState = {
  token: "",
  tokenExpiration: null,
  isLoading: false,
  isFulfilled: false,
  isRejected: false,
  isLoggingOut: false,
};

const loginThunk = createAsyncThunk<
  string,
  { email: string; password: string },
  { rejectValue: { error: Error; status?: number } }
>("auth/login", async (form, { rejectWithValue }) => {
  try {
    const url = `${import.meta.env.VITE_REACT_APP_API_URL}/api/users/login`;
    const result: AxiosResponse<AuthResponse> = await axios.post(url, form);

    const token = result.data.token;

    const expirationTime = new Date().getTime() + 60 * 60 * 1000;
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("tokenExpiration", expirationTime.toString());
    sessionStorage.setItem("user", JSON.stringify(result.data.user));

    return token;
  } catch (error) {
    if (error instanceof AxiosError)
      return rejectWithValue({
        error: error.response?.data,
        status: error.status,
      });
    return String(error);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    removeToken: (state) => {
      state.token = "";
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("tokenExpiration");
    },
    setLoggingOut: (state, action: PayloadAction<boolean>) => {
      state.isLoggingOut = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
        state.isFulfilled = false;
        state.isRejected = false;
      })
      .addCase(loginThunk.rejected, (state) => {
        state.isLoading = false;
        state.isRejected = true;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        const expirationTime = new Date().getTime() + 60 * 60 * 1000;
        state.token = payload;
        state.tokenExpiration = expirationTime;
        state.isLoading = false;
        state.isFulfilled = true;
      });
  },
});

export const authAction = {
  ...authSlice.actions,
  loginThunk,
};
export type AuthState = ReturnType<typeof authSlice.reducer>;
export default authSlice.reducer;