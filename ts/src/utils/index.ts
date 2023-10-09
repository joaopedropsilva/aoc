import fs from 'node:fs'
import rdl from 'node:readline'
import path from 'node:path'

export async function readInput(file_name: string): Promise<string[][] | []> {
    const INPUT_PATH = path.join(__dirname, `../${file_name}`);
    const input = fs.createReadStream(INPUT_PATH, { encoding: 'utf-8' });
    const output: string[] = [];

    return await new Promise((resolve, reject) => {
        try {
            const lineReader = rdl.createInterface({ input });

            lineReader.on('line', (line: string) => {
                output.push(line);
            });

            return lineReader.on('close', () => {
                return resolve(output.map((line: string) => line.split(' ')));
            });
        } catch (error) {
            return reject(error);
        }
    });
}

