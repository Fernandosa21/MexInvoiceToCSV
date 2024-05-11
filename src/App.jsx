import { useState } from 'react'
import './App.css'
import FileInput from '../components/FileInput/FileInput'
import getTotalJson from '../helpers/getTotalJson';
import getReducedInvoice from '../helpers/getReduceInvoice'
import getReducedArray from '../helpers/getReducedArray'
import JSONtoCSV from '../helpers/JSONtoCsv'
function App() {

  const readFiles = async (event) => {
    try {
      //TODO: Validate only xml files for a reason
      //
      const files = event?.target?.files || {};
      const filesAsText = Object.values(files).map((item) => {
        return new Promise((resolver, reject) => {
          let reader = new FileReader();

          reader.readAsText(item);
          reader.onload = function () {
            resolver(reader.result)
          };

          reader.onerror = function () {
            reject(null)
          };
        })
      })
      const filesResponse = await Promise.all(filesAsText);
      const totalJson = getTotalJson(filesResponse);
      const reducedInvoices = getReducedInvoice(totalJson);
      const reducedArray = getReducedArray(reducedInvoices)
      JSONtoCSV(reducedArray);

    } catch (err) {
      //TODO: Better error management
    }
  }

  //TODO: add loading

  return (
    <>
      <div className="card">
        {/* TODO: add instructions */}
        <FileInput
          label="Elegir archivos"
          multiple
          onChange={readFiles}
          accept="text/xml"
        />
      </div>
    </>
  )
}

export default App
