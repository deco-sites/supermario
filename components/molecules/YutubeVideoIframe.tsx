export interface videoUrlProps{
    videoUrlCode:string;
  }
  
export default function YutubeVideoIframe({videoUrlCode}:videoUrlProps) {
    return (
      <div class="flex justify-center items-center w-screen h-screen fixed  bg-black overflow-hidden top-0 left-0 z-[9] lg:(left-[0%] top-[20px])">
        <iframe
          class="object-contain w-full h-[42%] lg:h-[80%]"
          width="860"
          height="615"
          src={"https://www.youtube.com/embed/" +
          videoUrl + "?autoplay=1"}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        >
        </iframe>
      </div>
    );
  }