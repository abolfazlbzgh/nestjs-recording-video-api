import { Injectable, BadRequestException } from '@nestjs/common';
import { Video, RecordingVideo } from './dto/recording-video.dto';
import * as moment from 'moment';

@Injectable()
export class RecordingVideoService {
  processRecordingVideo(data: RecordingVideo): Video[] {
    //Error Handling
    if (!data) {
      throw new BadRequestException('No data provided');
    }
    // Check if any of the flags are true
    if (
      data.isRecordingStarted ||
      data.isStartRecordingPending ||
      data.isStopRecordingPending
    ) {
      return [];
    }

    // Process and sort videos
    const processedVideos = data.videos
      .map((video) => {
        const processedVideo = {
          ...video,
          endAt: moment(parseInt(video.endAt)).format('mm hh A MM/DD/YYYY'),
        };
        if (video.price && video.price > 0) {
          delete processedVideo.url;
        }
        return processedVideo;
      })
      .sort((a, b) => parseInt(a.endAt) - parseInt(b.endAt));

    return processedVideos;
  }
}
