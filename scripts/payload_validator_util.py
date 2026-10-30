# Autonomous Helper Component for Orion Pax Prime Node
# Generated on: 2026-10-30T16:07:31.702169+00:00
import json

def verify_system_payload_integrity(data_dict):
    try:
        keys_check = [k in data_dict for k in ['status', 'telemetry', 'project']]
        return all(keys_check)
    except Exception:
        return False
