export interface FirebaseUserResponse {
  additionalUserInfo: {providerId: string, isNewUser: boolean};
  user: FirebaseUser;
}

export interface FirebaseUser {
  uid: string;
  phoneNumber: string;
  apiKey: string;
  appName: string;
  authDomain: string;
  stsTokenManager: TokenManager;
}

export interface TokenManager {
  refreshToken: string;
  accessToken: string;
}
