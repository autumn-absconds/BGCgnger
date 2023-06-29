import { Command } from '@tauri-apps/api/shell'
import { resolveResource } from '@tauri-apps/api/path';

const RunBatchFile = () => {

    const run = async () => {
        // const command = Command.sidecar('binaries/wallpaper')

        const path = await resolveResource('binaries/wall.bat');
        console.log(path);

        let command = new Command('cmd', ['/c', path]);
        console.log(command);

        const output = await command.execute();
        console.log(output);
    }

    return (
        <div>
            <button onClick={run}>Execute Script</button>
        </div>
    )
}

export default RunBatchFile
