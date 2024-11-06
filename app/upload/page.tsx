'use client'
import React from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary'

const UploadPage = () => {
  return (
    <CldUploadWidget uploadPreset="lf9gynly">
      {({ open }) => (
        <button className="btn btn-primary" onClick={() => open()}>
          Upload
        </button>
      )}
    </CldUploadWidget>
  );
}

export default UploadPage