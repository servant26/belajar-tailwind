const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Halaman Home - Grid</h1>
      
      {/* Grid dengan 3 kolom */}
      <div className="grid grid-cols-3 gap-4">
        {/* Item 1 - colspan 2 */}
        <div className="bg-red-200 p-4 rounded col-span-2">
          <h2 className="font-bold">Featured (col-span-2)</h2>
          <p>Ini konten utama yang memenuhi 2 kolom.</p>
        </div>
        
        {/* Item 2 */}
        <div className="bg-blue-200 p-4 rounded">
          <h2 className="font-bold">Sidebar</h2>
          <p>Ini sidebar.</p>
        </div>
        
        {/* Item 3 - rowspan 2 */}
        <div className="bg-green-200 p-4 rounded row-span-2">
          <h2 className="font-bold">Konten Panjang (row-span-2)</h2>
          <p>Ini konten yang memenuhi 2 baris.</p>
          <ul className="list-disc ml-4 mt-2">
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </div>
        
        {/* Item 4 */}
        <div className="bg-yellow-200 p-4 rounded">
          <h2 className="font-bold">Konten 1</h2>
          <p>Grid item biasa.</p>
        </div>
        
        {/* Item 5 - colspan 2 */}
        <div className="bg-purple-200 p-4 rounded col-span-2">
          <h2 className="font-bold">Footer (col-span-2)</h2>
          <p>Ini footer yang memenuhi 2 kolom.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
