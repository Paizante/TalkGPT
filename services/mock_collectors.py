from datetime import date
from typing import List

from core.models import LegalRecord
from core.scoring import classify_case_type
from services.base import Collector


class PublicCourtsCollector(Collector):
    name = "public_courts"

    def search(self, document: str) -> List[LegalRecord]:
        rows = [
            ("TJSP", "1001234-00.2024.8.26.0100", "Ação Cível", "réu"),
            ("TRF3", "5008888-10.2025.4.03.6100", "Execução Fiscal", "autor"),
            ("TST", "0000123-55.2025.5.02.0001", "Reclamação Trabalhista", "réu"),
        ]
        out = []
        for t, n, c, r in rows:
            out.append(LegalRecord(
                source="Tribunais Públicos",
                tribunal=t,
                case_number=n,
                case_type=classify_case_type(c),
                role=r,
                subject_name="Investigado",
                subject_document=document,
                publication_date=str(date.today()),
                status="público",
                details_url="https://example.org/consulta"
            ))
        return out


class DiarioOficialCollector(Collector):
    name = "diario_oficial"

    def search(self, document: str) -> List[LegalRecord]:
        return [LegalRecord(
            source="DOU",
            tribunal="Diário Oficial da União",
            case_number="N/A",
            case_type="civil",
            role="menção",
            subject_name="Investigado",
            subject_document=document,
            publication_date=str(date.today()),
            status="publicação",
            details_url="https://www.in.gov.br/"
        )]
