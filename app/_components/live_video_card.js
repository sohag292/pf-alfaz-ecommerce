import Image from "next/image";
import viewerIcon from "./assets/view.svg";

export default function LiveVideoCard({data} = {
  data: {
    name: undefined,
    image: undefined,
    total_viewers: undefined,
    streamer: {
      name: undefined,
      image: undefined,
    },
  },
}) {
  return (
    <div className="w-48 h-[20.5rem] border border-zinc-200 hover:border-primary-400 box-content relative shrink-0">
      <BackgroundOverlay />

      <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-between">

        <LiveViewer data={data} />

        <StreamerInfo data={data} />
      </div>
      <div className="h-full w-full">
        <Image src={data.image} alt="live video" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

function BackgroundOverlay() {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0"
         style={{
           background: 'linear-gradient(to bottom, transparent 70%, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.75))',
           mixBlendMode: 'multiply'
         }}
    />
  )
}

function LiveViewer({data}) {
  return (
    <div className="w-32 h-5 grid grid-cols-2 mx-auto rounded-sm mt-4 overflow-hidden text-[10px] text-white">
      <div className="bg-red-500 flex items-center justify-center">
        <div className="size-1.5 bg-white rounded-full mr-1"/>
        LIVE
      </div>
      <div className="bg-gray-600 flex items-center justify-center">
        <div className="size-3.5 mr-1">
          <Image src={viewerIcon} className="h-full" alt="view"/>
        </div>
        {data.total_viewers}
      </div>
    </div>
  );
}

function StreamerInfo({data}) {
  return (
    <div className="p-2">
      <div className="text-white text-sm mb-2 line-clamp-2">{data.name}</div>

      <div className="flex gap-2 items-center">
        <div className="size-5 rounded-full"><Image src={data.streamer.image} className="w-full" alt="streamer" /></div>
        <div className="text-xs text-white line-clamp-1">{data.streamer.name}</div>
      </div>
    </div>
  )
}