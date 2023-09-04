import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import htmlToPdfmake from "html-to-pdfmake";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import "./Invoice.css";

const Invoice = ({ cartData }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const updateDate = () => {
      setCurrentDate(new Date());
    };

    updateDate();

    const interval = setInterval(updateDate, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

  const printDocument = () => {
    const doc = new jsPDF();

    const pdfTable = document.getElementById('divToPrint');
    const html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = {
      content: [
        { text: "INVOICE", fontSize: 18, bold: true },
        { text: `Purchased Date: ${formattedDate}`, fontSize: 12 },
        html,
      ],
    };
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    pdfMake.createPdf(documentDefinition).open();
  };

  const overallTotal = cartData.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div className="invoice-card">
      <div className="invoice-header">
        <div className="invoice-header-left">
          <h1>INVOICE</h1>
        </div>
        <div className="invoice-header-right">
          <p>Purchased Date: {formattedDate}</p>
        </div>
      </div>
      <div id="divToPrint" className="invoice-content">
        <hr />
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((item, key) => (
              <tr key={key}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
                <td>${item.quantity * item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr />
        <div className="overall-total">
          <p>Overall Total: ${overallTotal}</p>
        </div>
        <hr />
      </div>
      <button className="print-button" onClick={printDocument}>Print PDF</button>
      {/* <button className="email-button" onClick={emailInvoice}>Email Invoice</button> */}
    </div>
  );
};

export default Invoice;
