function SectionTitle({ label, title, description }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      {label && (
        <p className="text-tokyoRed font-semibold mb-2 uppercase tracking-wide text-sm">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">{title}</h2>
      {description && <p className="text-gray-600 text-lg">{description}</p>}
    </div>
  );
}

export default SectionTitle;
