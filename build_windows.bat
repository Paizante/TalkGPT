@echo off
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
python -m playwright install chromium
python -m pip install pyinstaller
pyinstaller --noconfirm --windowed --name InvestigacaoLegal main.py
