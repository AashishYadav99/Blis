// src/ExcelUploader.js
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import * as XLSX from "xlsx";

const ExcelUploader = () => {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      // Parse Excel file
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      // Assuming you want the first sheet
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      console.log("Parsed data:", jsonData);
      // You can now use jsonData as needed
    };

    reader.readAsArrayBuffer(file);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: {
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
        'application/vnd.ms-excel': ['.xls'],
      },
        });

  return (
    <div
      {...getRootProps()}
      className={`bg-green-600  rounded-lg p-4 text-center transition-colors duration-300 cursor-pointer 
        ${isDragActive ? "bg-gray-200 border-green-300" : "border-green"}
        ${isDragAccept ? "border-green-600" : ""}
        ${isDragReject ? "border-red-600" : ""}
        hover:border-blue-500 max-w-sm mx-auto`}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center justify-center">
        <p className="text-xs md:text-sm  text-white font-bold">
          Upload Excel File
        </p>
      </div>
    </div>
  );
};

export default ExcelUploader;
