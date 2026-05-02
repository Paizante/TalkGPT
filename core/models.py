from dataclasses import dataclass, asdict
from typing import Optional


@dataclass
class LegalRecord:
    source: str
    tribunal: str
    case_number: str
    case_type: str
    role: str
    subject_name: str
    subject_document: str
    publication_date: str
    status: str
    details_url: Optional[str] = None

    def to_dict(self):
        return asdict(self)
