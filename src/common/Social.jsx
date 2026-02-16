import React from "react";
import { Instagram, Twitter, Youtube, Facebook, Twitch } from "lucide-react";

export default function SocialBar() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">

      <SocialIcon>
        <Instagram size={20} />
      </SocialIcon>

      <SocialIcon>
        <Twitter size={20} />
      </SocialIcon>

      <SocialIcon>
        <Youtube size={20} />
      </SocialIcon>

      <SocialIcon>
        <Facebook size={20} />
      </SocialIcon>

      <SocialIcon>
        <Twitch size={20} />
      </SocialIcon>

    </div>
  );
}

function SocialIcon({ children }) {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 
                    p-3 rounded-full text-white cursor-pointer 
                    hover:bg-red-600 hover:scale-110 
                    transition duration-300 shadow-lg">
      {children}
    </div>
  );
}
