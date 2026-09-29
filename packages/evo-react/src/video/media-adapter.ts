import type { EvoVideoEngine, EvoVideoSource } from "./types";

export type VideoMedia = {
  attach(video: HTMLVideoElement): void;
  detach?(): void;
  destroy?(): void;
};

export function inferEngine({ engine, src }: EvoVideoSource) {
  if (engine) {
    return engine;
  }
  if (src.toLowerCase().split(/[?#]/, 1)[0].endsWith(".m3u8")) {
    return "hls";
  }
  if (src.toLowerCase().split(/[?#]/, 1)[0].endsWith(".mpd")) {
    return "dash";
  }
  return undefined;
}

export async function createVideoMedia(
  source: EvoVideoSource,
): Promise<{ engine?: EvoVideoEngine; media: VideoMedia }> {
  const engine = inferEngine(source);

  if (engine === "dash") {
    const { DashAdapter } = await import("@videojs/dash-video");
    const media = new DashAdapter();
    media.src = source.src;
    return { engine, media };
  }

  if (engine === "hls") {
    if (
      document
        .createElement("video")
        .canPlayType("application/vnd.apple.mpegurl")
    ) {
      const { NativeHlsAdapter } = await import("@videojs/native-hls-video");
      const media = new NativeHlsAdapter();
      media.src = source.src;
      return { engine, media };
    }

    const { HlsJsAdapter } = await import("@videojs/hlsjs-video");
    const media = new HlsJsAdapter();
    media.src = source.src;
    return { engine, media };
  }

  return {
    engine,
    media: {
      attach(video) {
        video.src = source.src;
      },
      detach() {},
    },
  };
}
