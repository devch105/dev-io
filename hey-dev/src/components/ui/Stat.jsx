const Stat = ({ value, label }) => {
  return (
    <div>
      <p className="text-2xl font-bold tracking-tight text-white">
        {value}
      </p>

      <p className="mt-1 text-xs text-zinc-500">
        {label}
      </p>
    </div>
  );
};

export default Stat;