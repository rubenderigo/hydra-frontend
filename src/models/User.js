class User {
  constructor(data) {
    this.username = data.username;
    this.email = data.email;
    this.name = data.name;
    this.lastname = data.surname;
    this.birth_date = data.birth_date;
    this.photo_profile = data.photo_profile;
  }
}

export default User;
