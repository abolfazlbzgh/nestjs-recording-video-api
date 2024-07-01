export interface Video {
  id: number;
  endAt: string;
  price: number;
  url?: string | null;
}

export interface RecordingVideo {
  isRecordingStarted: boolean;
  isStartRecordingPending: boolean;
  isStopRecordingPending: boolean;
  videos: Video[];
}
