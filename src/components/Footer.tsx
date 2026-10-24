export default function Footer() {
  return (
    <footer className="border-t border-line">
      <p className="mx-auto max-w-4xl px-5 py-8 text-sm text-muted">
        © {new Date().getFullYear()} Anderson S.
      </p>
    </footer>
  );
}
