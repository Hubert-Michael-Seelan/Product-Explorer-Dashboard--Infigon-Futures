"use client";

interface Props {
  value: string;
  onChange: (v: string) => void;
}

export default function SearchInput({ value, onChange }: Props) {
  return (
    <input
      type="search"
      placeholder="Search products"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
        w-64 px-3 py-2
        border border-gray-300
        rounded-md
        text-sm
        focus:outline-none focus:ring-2 focus:ring-black
      "
    />
  );
}
