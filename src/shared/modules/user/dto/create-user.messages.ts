export const CreateUserMessages = {
  email: {
    invalidFormat: 'email must be a valid address'
  },
  avatar: {
    invalidFormat: 'avatar is required',
  },
  userName: {
    invalidFormat: 'userName is required',
    lengthField: 'min length is 1, max is 15',
  },

  password: {
    invalidFormat: 'password is required',
    lengthField: 'min length for password is 6, max is 12'
  },
  userType: {
    invalidFormat: 'userType must be Normal or Pro',
  }
} as const;
