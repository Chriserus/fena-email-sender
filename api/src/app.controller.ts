import {Queue} from 'bull';
import {InjectQueue} from '@nestjs/bull';
import {Controller, Post} from '@nestjs/common';

@Controller('v1/email')
export class AppController {
  constructor(
    @InjectQueue('email') private readonly queue: Queue,
  ) {
  }

  @Post()
  async transcode() {
    console.log('Post a job to queue hey');
    await this.queue.add('email-job', {
      address: 'my-email@email.com',
    });
    await this.queue.add('email-job', {
      address: 'my-email@email.com',
    });
    await this.queue.add('email-job', {
      address: 'my-email@email.com',
    });
    console.log('End posting a job to queue');
  }
}
