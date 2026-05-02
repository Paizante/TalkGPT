"""Adapter preparado para automação assistida com Playwright.
Não faz bypass de CAPTCHA e deve ser usado apenas em consultas legalmente permitidas.
"""

from playwright.sync_api import sync_playwright


def open_assisted_session(url: str) -> None:
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        page = browser.new_page()
        page.goto(url)
        input("Resolva eventuais desafios de acesso manualmente e pressione Enter para encerrar...")
        browser.close()
