export class SaveEmailCommand {
  constructor(
    readonly recipient_email: string,
    readonly body: string,
  ) {}
}

// contrato
