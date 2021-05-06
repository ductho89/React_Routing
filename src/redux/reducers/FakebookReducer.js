const stateDefault = {
  comments: [
    {
      name: "Thor", avatar: "https://i.pravatar.cc/60?u=Thor", comment: "Hi all, my name is Thor"
    },
    {
      name: "Ninh", avatar: "https://i.pravatar.cc/60?u=Ninh", comment: "Good morning everyone"
    }
  ]
}

export const FakebookReducer = (state = stateDefault, action) => {
  switch (action.type) {

    case "add_comment": {
      state.comments = [...state.comments, action.userComment]
      return { ...state }
    }
  }
  return { ...state }
}
