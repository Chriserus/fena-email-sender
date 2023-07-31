import {Job} from 'bull';
import {OnQueueCompleted, OnQueueDrained, Process, Processor} from '@nestjs/bull';

@Processor('email')
export class AppService {

  @Process('email-job')
  handleTranscode(job: Job) {
    console.log('Start email sending...', job.id, job.data);
    this.wait(5000);
  }

  @OnQueueCompleted()
  onCompleted(job: Job) {
    console.log(`Email sent ${job.id}`);
  }

  @OnQueueDrained()
  onDrained() {
    console.log('Queue drained');
  }

  wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }
}
