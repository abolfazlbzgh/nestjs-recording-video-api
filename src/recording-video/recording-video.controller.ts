import { Controller, Get, Query } from '@nestjs/common';
import { RecordingVideoService } from './recording-video.service';
import { RecordingVideo } from './dto/recording-video.dto';
import { validateQuery } from './validation';

@Controller('api/recording-videos')
export class RecordingVideoController {
  constructor(private readonly recordingVideoService: RecordingVideoService) {}

  @Get()
  getProcessedVideos(@Query() query: Record<string, string>): any {
    let recordingVideoData: RecordingVideo;

    if (Object.keys(query).length > 0) {
      recordingVideoData = validateQuery(query);
    } else {
      // Use mock data if no query parameters are provided
      recordingVideoData = {
        isRecordingStarted: false,
        isStartRecordingPending: false,
        isStopRecordingPending: false,
        videos: [
          {
            id: 1,
            endAt: '1625242800000',
            price: 0,
            url: 'http://example.com/video1',
          },
          {
            id: 2,
            endAt: '1625246400000',
            price: 10,
            url: 'http://example.com/video2',
          },
          {
            id: 3,
            endAt: '1625250000000',
            price: 0,
            url: 'http://example.com/video3',
          },
          {
            id: 4,
            endAt: '1625253600000',
            price: 20,
            url: 'http://example.com/video4',
          },
          {
            id: 5,
            endAt: '1625257200000',
            price: 0,
            url: 'http://example.com/video5',
          },
          {
            id: 6,
            endAt: '1625260800000',
            price: 30,
            url: 'http://example.com/video6',
          },
          {
            id: 7,
            endAt: '1625264400000',
            price: 0,
            url: 'http://example.com/video7',
          },
          {
            id: 8,
            endAt: '1625268000000',
            price: 40,
            url: 'http://example.com/video8',
          },
          {
            id: 9,
            endAt: '1625271600000',
            price: 0,
            url: 'http://example.com/video9',
          },
          {
            id: 10,
            endAt: '1625275200000',
            price: 50,
            url: 'http://example.com/video10',
          },
        ],
      };
    }

    return this.recordingVideoService.processRecordingVideo(recordingVideoData);
  }
}
