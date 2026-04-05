export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">

        {/* Spinner */}
        <div className="w-10 h-10 border-4 border-gray-300 border-t-green-500 rounded-full animate-spin"></div>

        <p className="text-gray-500 text-sm">
          Loading MagmaNet...
        </p>

      </div>
    </div>
  );
}