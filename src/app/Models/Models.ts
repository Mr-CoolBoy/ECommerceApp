export interface APIResponseModel { 
    message: string
    result: boolean
    data: any;
  }

  export class Login { 
    EmailId: string;
    Password: string;
    constructor() {
      this.EmailId = '';
      this.Password = '';
    } 
  }

  export class SignUp { 
    FirstName: string;
    LastName: string;
    EmailId: string;
    Password: string;
    constructor() {
      this.FirstName = '';
      this.LastName = '';
      this.EmailId = '';
      this.Password = '';
    } 
  }