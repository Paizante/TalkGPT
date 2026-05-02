from pathlib import Path

from PySide6.QtWidgets import (
    QApplication, QWidget, QVBoxLayout, QLineEdit, QPushButton, QTableWidget,
    QTableWidgetItem, QMessageBox, QHBoxLayout, QLabel
)

from core.validation import validate_cpf_cnpj, only_digits
from core.scoring import risk_score
from export.writers import export_csv, export_json, export_pdf
from services.orchestrator import SearchOrchestrator


class MainWindow(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Investigação Jurídica - CPF/CNPJ")
        self.resize(1000, 600)
        self.records = []

        layout = QVBoxLayout(self)
        layout.addWidget(QLabel("Consulta baseada apenas em dados públicos e respeitando LGPD."))
        self.input_doc = QLineEdit()
        self.input_doc.setPlaceholderText("Digite CPF ou CNPJ")
        layout.addWidget(self.input_doc)

        row = QHBoxLayout()
        self.btn_search = QPushButton("Buscar")
        self.btn_search.clicked.connect(self.search)
        self.btn_csv = QPushButton("Exportar CSV")
        self.btn_csv.clicked.connect(self.save_csv)
        self.btn_pdf = QPushButton("Exportar PDF")
        self.btn_pdf.clicked.connect(self.save_pdf)
        row.addWidget(self.btn_search)
        row.addWidget(self.btn_csv)
        row.addWidget(self.btn_pdf)
        layout.addLayout(row)

        self.table = QTableWidget(0, 8)
        self.table.setHorizontalHeaderLabels([
            "Fonte", "Tribunal", "Processo", "Tipo", "Polo", "Documento", "Data", "Status"
        ])
        layout.addWidget(self.table)

    def search(self):
        doc = only_digits(self.input_doc.text())
        if not validate_cpf_cnpj(doc):
            QMessageBox.warning(self, "Erro", "CPF/CNPJ inválido (apenas tamanho validado).")
            return
        self.records = SearchOrchestrator().run(doc)
        self.table.setRowCount(len(self.records))
        for i, r in enumerate(self.records):
            vals = [r.source, r.tribunal, r.case_number, r.case_type, r.role, r.subject_document, r.publication_date, r.status]
            for j, v in enumerate(vals):
                self.table.setItem(i, j, QTableWidgetItem(str(v)))

    def save_csv(self):
        if not self.records:
            return
        out = export_csv(self.records, Path("dist/output"))
        export_json(self.records, Path("dist/output"))
        QMessageBox.information(self, "Exportado", f"CSV/JSON salvos em: {out.parent}")

    def save_pdf(self):
        if not self.records:
            return
        score = risk_score(self.records)
        out = export_pdf(self.records, Path("dist/output"), score)
        QMessageBox.information(self, "Exportado", f"PDF salvo em: {out}")


def run():
    app = QApplication([])
    w = MainWindow()
    w.show()
    app.exec()
