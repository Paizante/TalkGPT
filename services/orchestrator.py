from concurrent.futures import ThreadPoolExecutor
from typing import List

from core.models import LegalRecord
from services.mock_collectors import PublicCourtsCollector, DiarioOficialCollector


class SearchOrchestrator:
    def __init__(self):
        self.collectors = [PublicCourtsCollector(), DiarioOficialCollector()]

    def run(self, document: str) -> List[LegalRecord]:
        records = []
        with ThreadPoolExecutor(max_workers=len(self.collectors)) as ex:
            futures = [ex.submit(c.search, document) for c in self.collectors]
            for f in futures:
                records.extend(f.result())

        uniq = {}
        for r in records:
            key = (r.tribunal, r.case_number, r.source)
            uniq[key] = r
        return list(uniq.values())
