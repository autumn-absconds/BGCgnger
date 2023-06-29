import { useState } from "react";
import { createDir, writeBinaryFile, BaseDirectory } from '@tauri-apps/api/fs';
// import { open } from '@tauri-apps/api/shell';
import "./App.css";
// import BatchFile from "./componants/BatchFile";
import RunBatchFile from "./componants/RunBatchFile";
// import { shell } from '@tauri-apps/api/shell';



function App() {


  async function greet() {

    const image = await fetch('https://d33wubrfki0l68.cloudfront.net/594c6f1ec038fc51a47d02762acada24c78c637c/c93b0/meta/tauri_logo_light.svg');
    const imageData = await image.arrayBuffer();
    await createDir('images', { dir: BaseDirectory.Picture, recursive: true });
    await writeBinaryFile('images/lola.svg', imageData, { dir: BaseDirectory.Picture });


  }


  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>

      {/* <BatchFile/> */}
      <RunBatchFile />

      {/* <button onClick={greet}>Save Image</button> */}
    </div>
  );
}

export default App;
