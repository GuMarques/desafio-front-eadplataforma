"use client";
import Image from "next/image";
import "@/styles/components/_profile_picture.scss";
import "@/styles/components/_icons.scss";

interface Props {
  size?: "sm" | "md";
  url: string;
}

export const ProfilePicture = ({ size = "md", url }: Props) => {
  return (
    <div className={`profile-image-wrapper ${size}`}>
      <Image src={url} alt="Foto de perfil" fill />
    </div>
  );
};
