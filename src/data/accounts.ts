export interface Account {
  username: string;
  email: string;
  password: string;
  preferredContentTypes: string[];
}

export const accounts: Account[] = [
  {
    username: "admin",
    email: "daganspano@gmail.com",
    password: "admin123",
    preferredContentTypes: ["test", "demo"],
  },
];
