import { BadRequestException } from '@nestjs/common';
import { RecordingVideo } from './dto/recording-video.dto';

export function validateQuery(query: Record<string, string>): RecordingVideo {
  const requiredParams = [
    'isRecordingStarted',
    'isStartRecordingPending',
    'isStopRecordingPending',
    'videos',
  ];

  for (const param of requiredParams) {
    if (!(param in query)) {
      throw new BadRequestException(`Missing query parameter: ${param}`);
    }
  }

  try {
    const recordingVideoData: RecordingVideo = {
      isRecordingStarted: query.isRecordingStarted === 'true',
      isStartRecordingPending: query.isStartRecordingPending === 'true',
      isStopRecordingPending: query.isStopRecordingPending === 'true',
      videos: JSON.parse(query.videos),
    };

    if (
      !Array.isArray(recordingVideoData.videos) ||
      recordingVideoData.videos.length === 0
    ) {
      throw new BadRequestException('Invalid videos format');
    }

    return recordingVideoData;
  } catch (error) {
    throw new BadRequestException('Invalid query parameters or JSON format');
  }
}
