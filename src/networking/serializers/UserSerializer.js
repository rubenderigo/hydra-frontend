class UserSerializer {
  static deSerializeUser(data) {
    return {
      username: data.username,
      email: data.email,
      name: data.name,
      lastname: data.surname,
      birth_date: data.birth_date,
      photo_profile: data.photo_profile,
    };
  }
}

export default UserSerializer;
