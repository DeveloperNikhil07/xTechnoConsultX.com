import { readFileSync } from 'fs';
import { join } from 'path';

export default function handler(req, res) {
  try {
    const data = JSON.parse(
      readFileSync(join(process.cwd(), 'WBGlobaldata.json'), 'utf8')
    );
    res.status(200).json(data);
  } catch {
    res.status(500).json({ error: 'Could not load data' });
  }
}
