export interface Account {
  username: string;
  email: string;
  password: string;
}

export const accounts: Account[] = [
  {
    username: "admin",
    email: "daganspano@gmail.com",
    password: "admin123",
  },
];
