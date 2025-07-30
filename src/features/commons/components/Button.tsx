import Link from "next/link";

export default function Button({
  children: text = "Click me",
  link = "",
  onClick,
  className = "",
  variant = "filled",
  arrowRight = true,
}: {
  children?: string;
  link?: string;
  onClick?: () => void;
  className?: string;
  variant?: "outline" | "filled";
  arrowRight?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center fill-current gap-4 px-9 py-3 rounded-3xl hover:cursor-pointer transition-colors ${className} ${
        variant === "outline"
          ? "border border-black text-black bg-transparent hover:bg-black hover:text-white"
          : "bg-black text-white hover:bg-black/90 hover:text-white"
      }`}
    >
      {onClick ? (
        <span>{text}</span>
      ) : (
        <Link href={link}>
          <span>{text}</span>
        </Link>
      )}
      {arrowRight && (
      <svg
        width="10"
        height="16"
        viewBox="0 0 10 16"
        fill="current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.72013 15.5455C0.28079 15.1062 0.28079 14.3938 0.72013 13.9545L6.67463 8L0.72013 2.04549C0.28079 1.60616 0.28079 0.893845 0.72013 0.454506C1.15947 0.0151653 1.87178 0.0151653 2.31112 0.454506L9.06112 7.2045C9.50046 7.64384 9.50046 8.35616 9.06112 8.7955L2.31112 15.5455C1.87178 15.9848 1.15947 15.9848 0.72013 15.5455Z"
          fill="current"
        />
      </svg>
    )}
    </button>
  );
}
