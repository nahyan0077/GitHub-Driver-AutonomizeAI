import { createSlice } from "@reduxjs/toolkit";

let initialState: any = {
  githubData: {
    userDetails: {},
    repositories: [],
    followersList: [],
    followerUsername: "",
    followerDetails: {},
    followerRepos: [],
  },
};

const gitHubDataSlice = createSlice({
  name: "githubData",
  initialState,
  reducers: {

    setUserDetails: (state, action) => {
        state.githubData = {
            ...state.githubData,
            userDetails: action.payload
        }
    },
    setRepositories: (state, action) => {
        state.githubData = {
            ...state.githubData,
            repositories: action.payload
        }
    }
  },
});

export const { setUserDetails, setRepositories } = gitHubDataSlice.actions;
export const gitHubDataReducer = gitHubDataSlice.reducer;
