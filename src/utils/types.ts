export type CreateUserParams = {
  username: string;
  password: string;
};

export type UpdateUserParams = {
  username: string;
  password: string;
};

export type CreateUserIdentityParams = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  cityOfBirth: string;
};

export type CreateUserVehicleParams = {
  typeVehicle: string;
  brand: string;
  dateCreation: number;
};