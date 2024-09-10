import { randomUUID } from 'node:crypto';

export class Email {
  private id: string;
  recipient_email: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
  sentAt: Date | null;

  constructor(recipient_email: string, body: string) {
    this.id = randomUUID();
    this.recipient_email = recipient_email;
    this.body = body;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.sentAt = null;
  }
}
