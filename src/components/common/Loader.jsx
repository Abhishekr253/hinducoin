const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="w-14 h-14 border-4 border-white border-t-transparent rounded-full animate-spin" />
    </div>
  );
};

export default Loader;
