import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import jsPDF from 'jspdf';

const InvoicePDF = () => {
  const pdfRef = useRef(null);

  useEffect(() => {
    const generatePDF = async () => {
      const response = await fetch('YOUR_API_ENDPOINT_HERE');
      const data = await response.json();

      const doc = new jsPDF();
      doc.setFontSize(18);
      doc.text('Invoice', 10, 20);

      // Assuming your API response structure has cart and myshelf properties
      const cartData = data.cart;
      const myshelfData = data.myshelf;

      // Add cart data to the PDF
      doc.setFontSize(14);
      doc.text('Cart:', 10, 30);
      let cartY = 40;
      cartData.forEach((item) => {
        doc.text(`${item.name}: $${item.price}`, 10, cartY);
        cartY += 10;
      });

      // Add myshelf data to the PDF
      doc.text('My Shelf:', 10, cartY + 10);
      let shelfY = cartY + 20;
      myshelfData.forEach((book) => {
        doc.text(`${book.title} by ${book.author}`, 10, shelfY);
        shelfY += 10;
      });

      // Save or display the PDF
      doc.save('invoice.pdf'); // Save as PDF
      // doc.output('dataurlnewwindow'); // Open in a new window
    };

    generatePDF();
  }, []);

  return (
    <div className="container">
      <div ref={pdfRef} className="invoice-pdf">
        {/* This div is used for styling and won't be rendered */}
        <p>This is the invoice PDF content.</p>
      </div>
    </div>
  );
};

export default InvoicePDF;
