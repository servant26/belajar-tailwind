const Flexbox = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Halaman Flexbox</h1>
      
      {/* Flexbox row dengan flex-1 */}
      <div className="flex gap-4 mb-6">
        <div className="bg-indigo-200 p-4 rounded flex-1">Item 1 (flex-1)</div>
        <div className="bg-indigo-300 p-4 rounded flex-1">Item 2 (flex-1)</div>
        <div className="bg-indigo-400 p-4 rounded flex-1">Item 3 (flex-1)</div>
      </div>
      
      {/* Flexbox dengan justify-center */}
      <div className="flex justify-center gap-4 mb-6 bg-gray-100 p-4 rounded">
        <div className="bg-pink-200 p-3 rounded">Center 1</div>
        <div className="bg-pink-300 p-3 rounded">Center 2</div>
        <div className="bg-pink-400 p-3 rounded">Center 3</div>
      </div>
      
      {/* Flexbox dengan justify-between */}
      <div className="flex justify-between gap-4 mb-6 bg-gray-100 p-4 rounded">
        <div className="bg-green-200 p-3 rounded">Kiri</div>
        <div className="bg-green-300 p-3 rounded">Tengah</div>
        <div className="bg-green-400 p-3 rounded">Kanan</div>
      </div>
      
      {/* Flexbox column */}
      <div className="flex flex-col gap-4 bg-gray-100 p-4 rounded">
        <div className="bg-yellow-200 p-3 rounded">Column 1</div>
        <div className="bg-yellow-300 p-3 rounded">Column 2</div>
        <div className="bg-yellow-400 p-3 rounded">Column 3</div>
      </div>
    </div>
  );
};

export default Flexbox;

