type UserProfile = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<UserProfile>) {
  // Тут ви можете використовувати initialValues для оновлення користувача
  console.log("Updating userProfile:", initialValues);
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
} as Partial<UserProfile>);
