import React from "react";

const PatientDetailModal = ({ isOpen, onClose, patientData }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900 mb-9"
                  id="modal-headline"
                >
                  Detail Pasien
                </h3>
                <div className="grid grid-cols-4 gap-4 text-gray-500">
                  <div className="">Nama</div>
                  <div className="col-span-3">{patientData.nama}</div>
                  <div className="">Kode Antrian</div>
                  <div className="col-span-3">{patientData.kode_antrian}</div>
                  <div className="">Pelayanan</div>
                  <div className="col-span-3">{patientData.layanan}</div>
                  <div className="">No Telepon</div>
                  <div className="col-span-3">{patientData.nomor_telepon}</div>
                  <div className="">Hari / Tanggal</div>
                  <div className="col-span-3">{patientData.hari_tanggal}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={onClose}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#21695c] text-base font-medium text-white hover:bg-[#165c4a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#21695c] sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetailModal;