import React from "react";
import { useEffect, useState } from "react";
import ModalAddDataPasien from "./modalAddDataPasien";
const apiEndpoint = "http://localhost:1234/get";

const ModalPasien = ({ isOpen, onClose }) => {
  const [data, setData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Ada masalah dengan fetch:", error);
      }
    };

    fetchData();
  }, []);

  const openModal = () => {
    setIsModalOpen(true); // Buka modal dengan mengatur isModalOpen menjadi true
  };

  const closeModal = () => {
    setIsModalOpen(false); // Tutup modal dengan mengatur isModalOpen menjadi false
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md ml-64 -mt-32 w-[65%]">
            <div className="flex justify-between">
              <h1 className="font-semibold text-xl">Detail Pasien</h1>
              <button onClick={onClose} className="text-white mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.6618 21.013C19.3111 21.6623 20.3637 21.6623 21.013 21.013C21.6623 20.3637 21.6623 19.3111 21.013 18.6618L14.3512 12L21.013 5.33821C21.6623 4.68894 21.6623 3.63626 21.013 2.98698C20.3637 2.33771 19.3111 2.33771 18.6618 2.98698L12 9.64877L5.33818 2.98695C4.68891 2.33768 3.63623 2.33768 2.98696 2.98695C2.33768 3.63623 2.33768 4.68891 2.98696 5.33818L9.64877 12L2.98695 18.6618C2.33768 19.3111 2.33768 20.3638 2.98695 21.013C3.63623 21.6623 4.68891 21.6623 5.33818 21.013L12 14.3512L18.6618 21.013Z"
                    fill="black"
                    fillOpacity="0.5"
                  />
                </svg>
              </button>
            </div>

            {/* {data ? (
              <div className="table-container">
                <table className="min-w-full divide-gray-700 my-4">
                  <thead className="bg-gray-100 text-center">
                    <tr>
                      <th className="vertical-header  w-1/6 min-w-[160px] py-2 text-sm font-normal text-gray-500 dark:text-gray-400">Nomor</th>
                      <th className="vertical-header  w-1/6 min-w-[160px] py-2 text-sm font-normal text-gray-500 dark:text-gray-400">Nama</th>
                      <th className="vertical-header  w-1/6 min-w-[160px] py-2 text-sm font-normal text-gray-500 dark:text-gray-400">Kode Antrian</th>
                      <th className="vertical-header  w-1/6 min-w-[160px] py-2 text-sm font-normal text-gray-500 dark:text-gray-400">Pelayanan</th>
                      <th className="vertical-header  w-1/6 min-w-[160px] py-2 text-sm font-normal text-gray-500 dark:text-gray-400">No Telepon</th>
                    </tr>
                  </thead>

                  <tbody className="text-center divide-y divide-gray-200">
                    {data.map((item) => (
                      <tr key={item.id}>
                        <td className="text-sm font-medium">{item.nomor}</td>
                        <td className="px-4 py-4 text-sm font-medium">{item.nama}</td>
                        <td className="px-4 py-4 text-sm font-medium">{item.kode_antrian}</td>
                        <td className="px-4 py-4 text-sm font-medium">{item.pelayanan}</td>
                        <td className="px-4 py-4 text-sm font-medium">{item.no_telepon}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              "Loading..."
            )} */}

            <table className="mb-10 border border-solid border-black border-collapse min-w-full divide-gray-700 my-4">
              <tr>
                <th className="border border-solid border-black border-collapse p-2 w-1/6 min-w-[160px] text-sm font-normal text-gray-500 dark:text-gray-400 bg-gray-100">Nama</th>
                <td className="border border-solid border-black border-collapse p-2  text-sm font-medium ">Ella Fitriyani Rosyidah</td>
              </tr>
              <tr>
                <th className="border border-solid border-black border-collapse w-1/6 min-w-[160px] text-sm font-normal text-gray-500 dark:text-gray-400 bg-gray-100">Umur</th>
                <td className="border border-solid border-black border-collapse p-2 text-sm font-medium">17</td>
              </tr>
              <tr>
                <th className="border border-solid border-black border-collapse w-1/6 min-w-[160px] text-sm font-normal text-gray-500 dark:text-gray-400 bg-gray-100">Jenis Kelamin</th>
                <td className="border border-solid border-black border-collapse p-2 text-sm font-medium">P</td>
              </tr>
              <tr>
                <th className="border border-solid border-black border-collapse w-1/6 min-w-[160px] text-sm font-normal text-gray-500 dark:text-gray-400 bg-gray-100">Alamat</th>
                <td className="border border-solid border-black border-collapse p-2 text-sm font-medium">Pariaman, Sumatra Barat</td>
              </tr>
              <tr>
                <th className="border border-solid border-black border-collapse w-1/6 min-w-[160px] text-sm font-normal text-gray-500 dark:text-gray-400 bg-gray-100">No telepon</th>
                <td className="border border-solid border-black border-collapse p-2 text-sm font-medium">081392307589</td>
              </tr>
            </table>

            <table className="border border-solid border-black border-collapse min-w-full divide-gray-700 my-4">
              <caption className="text-left font-medium text-xl mb-5">Rekaman Medis</caption>
              <tr>
                <th className="border border-solid border-black border-collapse w-1/6 min-w-[160px] text-sm font-normal text-gray-500 dark:text-gray-400 bg-gray-100">Kode Rekam Medis</th>
                <td className="border border-solid border-black border-collapse p-2 text-sm font-medium ">RM0020-01</td>
              </tr>
              <tr>
                <th className="border border-solid border-black border-collapse w-1/6 min-w-[160px] text-sm font-normal text-gray-500 dark:text-gray-400 bg-gray-100">Dokter</th>
                <td className="border border-solid border-black border-collapse p-2 text-sm font-medium">Drg. Rima Yunita R</td>
              </tr>
              <tr>
                <th className="border border-solid border-black border-collapse w-1/6 min-w-[160px] text-sm font-normal text-gray-500 dark:text-gray-400 bg-gray-100">Keluhan</th>
                <td className="border border-solid border-black border-collapse p-2 text-sm font-medium">Sakit Gigi</td>
              </tr>
              <tr>
                <th className="border border-solid border-black border-collapse w-1/6 min-w-[160px] text-sm font-normal text-gray-500 dark:text-gray-400 bg-gray-100">Diagnosa</th>
                <td className="border border-solid border-black border-collapse p-2 text-sm font-medium">Gigi Berlubang</td>
              </tr>
              <tr>
                <th className="border border-solid border-black border-collapse w-1/6 min-w-[160px] text-sm font-normal text-gray-500 dark:text-gray-400 bg-gray-100">Tindakan</th>
                <td className="border border-solid border-black border-collapse p-2 text-sm font-medium">Tambal Gigi Dewasa</td>
              </tr>
              <tr>
                <th className="border border-solid border-black border-collapse w-1/6 min-w-[160px] text-sm font-normal text-gray-500 dark:text-gray-400 bg-gray-100">Keterangan</th>
                <td className="border border-solid border-black border-collapse p-2 text-sm font-medium">Obat paracetamol 3x1 hari, 1 tablet</td>
              </tr>
              <tr>
                <th className="border border-solid border-black border-collapse w-1/6 min-w-[160px] text-sm font-normal text-gray-500 dark:text-gray-400 bg-gray-100">Tanggal Pemeriksaan</th>
                <td className="border border-solid border-black border-collapse p-2 text-sm font-medium">14-11-2023</td>
              </tr>
            </table>
            <div className="flex justify-end">
              <button onClick={openModal} className="text-white mb-2 rounded-md bg-[#0EA5E9] px-5 py-1">Tambah Data</button>
            </div>
          </div>
        </div>
      )}
    <ModalAddDataPasien isOpen={isModalOpen} onClose={closeModal}/>
    </>
  );
};

export default ModalPasien;