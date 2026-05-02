from collections import Counter
from typing import Iterable
from core.models import LegalRecord


WEIGHTS = {
    "criminal": 45,
    "tax": 30,
    "labor": 20,
    "civil": 10,
}


def classify_case_type(text: str) -> str:
    text = (text or "").lower()
    if any(k in text for k in ["criminal", "penal"]):
        return "criminal"
    if any(k in text for k in ["tribut", "fiscal", "tax"]):
        return "tax"
    if any(k in text for k in ["trabalh", "labor"]):
        return "labor"
    return "civil"


def risk_score(records: Iterable[LegalRecord]) -> int:
    total = 0
    for r in records:
        total += WEIGHTS.get(r.case_type, 8)
        if r.role.lower() in {"réu", "reu", "defendant"}:
            total += 10
    return min(100, total)


def summary_by_type(records: Iterable[LegalRecord]):
    return Counter(r.case_type for r in records)
