import { Module } from '@nestjs/common';
import { RecordingVideoService } from './recording-video.service';
import { RecordingVideoController } from './recording-video.controller';

@Module({
  providers: [RecordingVideoService],
  controllers: [RecordingVideoController],
})
export class RecordingVideoModule {}
