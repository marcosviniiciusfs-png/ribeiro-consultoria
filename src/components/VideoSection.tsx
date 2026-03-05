import vagaVideo from "@/assets/vaga-video.mp4";

const VideoSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">
            CONVITE ESPECIAL
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Conheça a oportunidade
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border bg-black">
            <video
              src={vagaVideo}
              controls
              autoPlay
              muted
              playsInline
              className="w-full md:max-h-[500px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
