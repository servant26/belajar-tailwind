import { useState } from 'react';

const Form = () => {
  const [judul, setJudul] = useState('');
  const [deskripsi, setDeskripsi] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Judul: ${judul}\nDeskripsi: ${deskripsi}`);
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Halaman Form</h1>
      
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6">
        <div className="mb-4">
          <label className="block mb-2 font-medium">Judul</label>
          <input
            type="text"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block mb-2 font-medium">Deskripsi</label>
          <textarea
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            className="w-full border p-2 rounded"
            rows="4"
            required
          />
        </div>
        
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
