import Link from "next/link";
export default function Header() {
  return (
    <div className="border-black/10 border-b h-[40px] flex items-center  justify-between px-5">
      <div>Logo</div>
      <ul className="flex items-center gap-3">
        <li>
          <Link href="/">Home </Link>
        </li>
        <li>
          <Link href="/posts">About </Link>
        </li>
        <li>
          <Link href="/forms">Contact-Us </Link>
        </li>
      </ul>
    </div>
  );
}
