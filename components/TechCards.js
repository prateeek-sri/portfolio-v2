import Image from "next/image";
import { useTheme } from "@/libs/ThemeContext"; // assuming you already use this for theme handling

const TechCard = ({ id, main, alt, changeId, lightIcon, darkIcon }) => {
  const { isDark } = useTheme();

  return (
    <div
      className={`tech group relative h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-md sm:rounded-lg md:rounded-xl transition-all duration-300 
        ${isDark 
          ? "bg-white/25 lg:bg-none lg:hover:bg-slate-50/50" 
          : "bg-black/5 lg:bg-none lg:hover:bg-black/10"}`}
      onClick={() => {
        changeId(id);
        window.scrollTo(0, 0);
      }}
    >
      <div className="h-full w-full p-2 md:p-3 lg:p-4 relative">
        <Image
          src={isDark ? darkIcon || main : lightIcon || main}
          fill
          className="select-none group-hover:scale-[1.1] transition-all duration-700 object-contain p-2 md:p-3 rounded-lg md:rounded-xl lg:rounded-2xl"
          alt={alt}
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 33vw"
        />
      </div>
    </div>
  );
};

export default TechCard;
