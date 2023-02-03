export class Job {
    jobId: number;
    customerId: number;
    customerName: string;
    jobDescription: string;
    dueDate: Date;
    recurring: boolean;
    recurWeeks: number;
    comments: string;
    
    constructor(
      jobId: number,
      customerId: number,
      customerName: string,
      jobDescription: string,
      dueDate: Date,
      recurring: boolean,
      recurWeeks: number,
      comments: string
    ) {
      this.jobId = jobId;
      this.customerId = customerId;
      this.customerName = customerName;
      this.jobDescription = jobDescription;
      this.dueDate = dueDate;
      this.recurring = recurring;
      this.recurWeeks = recurWeeks;
      this.comments = comments;
    }
  }