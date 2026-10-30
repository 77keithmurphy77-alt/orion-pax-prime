import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');

    return res.status(200).json({
        status: "ONLINE",
        project: "Orion Pax Prime",
        chassis: "Cybertron Vanguard Text Baseline",
        telemetry: {
            ledger_height: 10,
            active_matrix: "Consensus_Mesh_Plane",
            last_consensus_id: "CNS-5BD3828A",
            verified_peers: 1
        },
        timestamp: "2026-10-30T15:28:53.468294+00:00"
    });
}
