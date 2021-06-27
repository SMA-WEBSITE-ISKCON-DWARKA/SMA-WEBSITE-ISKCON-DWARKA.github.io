export interface RegisterUser {
  firebaseId: string;
  phoneNumber: string;
}

export interface UserCreatedResponse {

  userId: string;
  firebaseId: string;
  email: string;
  name: string;
  phoneNumber: string;
}
