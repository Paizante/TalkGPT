import json
from pathlib import Path
from typing import List

import pandas as pd
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas

from core.models import LegalRecord


def to_dataframe(records: List[LegalRecord]) -> pd.DataFrame:
    return pd.DataFrame([r.to_dict() for r in records])


def export_csv(records: List[LegalRecord], output_dir: Path) -> Path:
    output_dir.mkdir(parents=True, exist_ok=True)
    path = output_dir / "resultado.csv"
    to_dataframe(records).to_csv(path, index=False)
    return path


def export_json(records: List[LegalRecord], output_dir: Path) -> Path:
    output_dir.mkdir(parents=True, exist_ok=True)
    path = output_dir / "resultado.json"
    with path.open("w", encoding="utf-8") as f:
        json.dump([r.to_dict() for r in records], f, ensure_ascii=False, indent=2)
    return path


def export_pdf(records: List[LegalRecord], output_dir: Path, risk_score: int) -> Path:
    output_dir.mkdir(parents=True, exist_ok=True)
    path = output_dir / "relatorio.pdf"
    c = canvas.Canvas(str(path), pagesize=A4)
    w, h = A4
    y = h - 40
    c.setFont("Helvetica-Bold", 14)
    c.drawString(40, y, "Relatório de Investigação Jurídica (Dados Públicos)")
    y -= 24
    c.setFont("Helvetica", 10)
    c.drawString(40, y, f"Pontuação de risco legal: {risk_score}/100")
    y -= 20
    for r in records[:35]:
        line = f"{r.tribunal} | {r.case_number} | {r.case_type} | papel: {r.role}"
        c.drawString(40, y, line[:110])
        y -= 14
        if y < 60:
            c.showPage()
            y = h - 40
    c.save()
    return path
