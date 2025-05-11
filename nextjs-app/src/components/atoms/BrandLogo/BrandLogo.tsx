import Image from "next/image";
import logoBlack from "@assets/images/logos/logo-black.svg";
import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  height?: number | string;
  width?: number | string;
}

export default function BrandLogo({
  height = 24,
  width = "auto",
}: BrandLogoProps) {
  return (
    <Link href="/" passHref>
      <Image
        src={logoBlack}
        alt="Brand logo"
        height={typeof height === "number" ? height : 24}
        width={typeof width === "number" ? (width as number) : undefined}
        style={{
          height: typeof height === "string" ? height : undefined,
          width: typeof width === "string" ? width : undefined,
        }}
      />
    </Link>
  );
}
