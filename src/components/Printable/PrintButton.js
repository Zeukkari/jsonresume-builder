import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const toPDF = (ref, label) => {
  const input = ref.current
  const inputHeightMm = Math.floor(input.offsetHeight / input.offsetHeight)
  const a4WidthMm = 210
  const a4HeightMm = 297

  html2canvas(input).then(canvas => {
    const imgData = canvas.toDataURL('image/png')

    // Document of a4WidthMm wide and inputHeightMm high
    if (inputHeightMm > a4HeightMm) {
      // elongated a4 (system print dialog will handle page breaks)
      const pdf = new jsPDF('p', 'mm', [inputHeightMm + 16, a4WidthMm])
      pdf.addImage(imgData, 'PNG', 0, 0)
      pdf.save(`${label}.pdf`)
    } else {
      // standard a4
      const pdf = new jsPDF()
      pdf.addImage(imgData, 'PNG', 0, 0)
      pdf.save(`${label}.pdf`)
    }
  })
}

export default toPDF
