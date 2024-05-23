import React, { useState } from 'react'
import QRCode from 'react-qr-code';

function QRCodeGenerator() {
    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');
    function handleGeneratorCode() {
        setQrCode(input);
        setInput('');
}

  return (
    <div>
          <h1>QR Code Generator</h1>
          <div>
          <input
              onChange={(e) => setInput(e.target.value)}
              type="text"
              name='qr-code'
                  placeholder='Enter Your value'
              value={input}/>
          <button disabled={input && input.trim !==''?false:true} onClick={handleGeneratorCode}>Generator</button>
          </div>
          <div>
              <QRCode id='qr-code' value={qrCode} size={400} style={{background:"#fff"}}>
              </QRCode>
          </div>

    </div>
  )
}

export default QRCodeGenerator
