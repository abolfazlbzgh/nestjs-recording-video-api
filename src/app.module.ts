import { Module } from '@nestjs/common';
import { RecordingVideoModule } from './recording-video/recording-video.module';

@Module({
  imports: [RecordingVideoModule],
})
export class AppModule {}
