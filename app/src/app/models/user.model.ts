
export class User {
    // id: number;
    username: string;
    password: string;
    email: string;
    // type: UserType;
  
    constructor(email: string, username: string, password: string, type: UserType) {
      // this.id = id;
      this.username = username;
      this.password = password;
      this.email = email;
      // this.type = type;
    }
  }
  
export enum UserType {
    Admin = 'admin',
    Common = 'common'
  }
  