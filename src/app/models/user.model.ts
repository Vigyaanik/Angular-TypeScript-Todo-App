
export class User {
    id: number;
    username: string;
    password: string;
    type: UserType;
  
    constructor(id: number, username: string, password: string, type: UserType) {
      this.id = id;
      this.username = username;
      this.password = password;
      this.type = type;
    }
  }
  
export enum UserType {
    Admin = 'admin',
    Common = 'common'
  }
  