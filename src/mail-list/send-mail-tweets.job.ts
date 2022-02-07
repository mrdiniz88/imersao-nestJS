import { Job } from 'bull';
import { Processor, Process } from '@nestjs/bull';
import { MailListService } from './mail-list.service';

@Processor('emails')
export class SendMailTweetsJob {
  constructor(private mailListService: MailListService) {}

  @Process()
  async handle(job: Job) {
    const mailList = await this.mailListService.findOne();
    console.log(mailList.emails);
    console.log('kafka sends email to microservice done in go');
  }
}
